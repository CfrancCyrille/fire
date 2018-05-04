import { Component, OnInit } from '@angular/core';
import { GoogleVisionService } from '../core';
import { LabelModel } from '../core/models/label.model';
import { FirebaseDatabase } from '@firebase/database-types';

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

  constructor(private googleVisionSvc: GoogleVisionService) { }

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

}
