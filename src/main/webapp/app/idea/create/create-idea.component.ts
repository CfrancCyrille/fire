import { Component, OnInit } from '@angular/core';
import { GoogleVisionService } from '../../core';

import { FirebaseDatabase } from '@firebase/database-types';
import { AngularFireDatabase } from 'angularfire2/database';

// models
import { LabelModel } from '../../core/models/label.model';
import { IdeaModel } from '../../core/models/idea.model';
import { AccountService } from '../../shared/auth/account.service';

@Component({
  selector: 'jhi-idea',
  templateUrl: './create-idea.component.html',
  styleUrls: [
    'create-idea.scss'
  ]
})
export class CreateIdeaComponent implements OnInit {

  private base64textString: String = '';
  private labels: LabelModel[];

  title = 'lol';
  synopsis = '';
  userId: string;
  url = '';

  constructor(private googleVisionSvc: GoogleVisionService, private db: AngularFireDatabase, private account: AccountService) { }

  ngOnInit() {
    this.account.get().subscribe((user) => {
      this.userId = user.body.id;
    });
  }

  // event to get file selected
  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  // convert and send picture to api
  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    this.getLabels(btoa(binaryString));
  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (ev: any) => {
        this.url = ev.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  // get labels from a picture
  getLabels(binary) {
    this.googleVisionSvc.getLabels(binary).subscribe((result) => {
      this.labels = result['responses'][0]['labelAnnotations'];
    }, (err) => {
      console.warn('err', err);
    });
  }

  saveIdea() {
    console.log('this', this);
    console.log('this.idea : ', this.title);

    const itemsRef = this.db.list('ideas');
    itemsRef.push({ title: this.title, synopsis: this.synopsis, userId: this.userId });
  }

}
