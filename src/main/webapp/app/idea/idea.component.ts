import { Component, OnInit } from '@angular/core';
import { GoogleVisionService } from '../core';
import { LabelModel } from '../core/models/label.model';
import { FirebaseDatabase } from '@firebase/database-types';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'jhi-idea',
  templateUrl: './idea.component.html',
  styleUrls: [
    'idea.scss'
  ]
})
export class IdeaComponent implements OnInit {

  private base64textString: String = '';
  private labels: LabelModel[];

  title = '';
  synopsis = '';

  constructor(private googleVisionSvc: GoogleVisionService, private db: AngularFireDatabase) { }

  ngOnInit() {
  }

  // event to get file selected
  handleFileSelect(evt) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  // convert and send picture to api 
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    this.getLabels(btoa(binaryString));
  }

  // get labels from a picture
  getLabels(binary) {
    this.googleVisionSvc.getLabels(binary).subscribe((result) => {
      this.labels = result['responses'][0]['labelAnnotations'];
    }, err => {
      console.warn('err', err);
    });
  }

  saveIdea() {
    console.log('save !');
    const idea = {
      'title': this.title,
      'synopsis': this.synopsis
    };

    const itemRef = this.db.object('idea');
    itemRef.set(idea);


    console.log('title', this.title);
  }

}
