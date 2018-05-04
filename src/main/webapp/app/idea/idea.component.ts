import { Component, OnInit } from '@angular/core';
import { GoogleVisionService } from '../core';

@Component({
  selector: 'jhi-idea',
  templateUrl: './idea.component.html',
  styles: []
})
export class IdeaComponent implements OnInit {

  private base64textString: String = '';

  constructor(private googleVisionSvc: GoogleVisionService) { }

  ngOnInit() {
  }

  handleFileSelect(evt) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    // console.log(btoa(binaryString));
    this.getLabels(btoa(binaryString));
  }

  getLabels(binary) {
    this.googleVisionSvc.getLabels(binary).subscribe((result) => {
      console.log('result : ', result)
    }, err => {
      console.warn('err', err);
    });
  }

}
