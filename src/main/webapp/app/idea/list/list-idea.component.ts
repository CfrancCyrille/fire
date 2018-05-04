import { Component, OnInit } from '@angular/core';
import { GoogleVisionService } from '../../core';

import { FirebaseDatabase } from '@firebase/database-types';
import { AngularFireDatabase } from 'angularfire2/database';

// models
import { LabelModel } from '../../core/models/label.model';
import { IdeaModel } from '../../core/models/idea.model';
import { AccountService } from '../../shared/auth/account.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'jhi-idea',
  templateUrl: './list-idea.component.html',
  styleUrls: [
    'list-idea.scss'
  ]
})
export class ListIdeaComponent implements OnInit {

  ideas: any;

  constructor(private db: AngularFireDatabase) {
    this.db.list('ideas').valueChanges().subscribe((ideas) => {
      this.ideas = ideas;
      console.log('ideas', this.ideas);
    });
  }

  ngOnInit() { }

}
