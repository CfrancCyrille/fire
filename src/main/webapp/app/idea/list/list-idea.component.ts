import { Component, OnInit } from '@angular/core';
import { GoogleVisionService } from '../../core';

import { FirebaseDatabase } from '@firebase/database-types';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

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
  itemsRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.itemsRef = db.list('ideas');
    // snapshotChanges().map() to store the key
    this.ideas = this.itemsRef.snapshotChanges().map((changes) => {
      return changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe((ideas) => {
      this.ideas = ideas;
    });
  }

  ngOnInit() { }

  deleteIdea(id) {
    this.itemsRef.remove(id);
  }

}
