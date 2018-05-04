import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {CharacterModel} from "../core/models/character.model";
import {AccountService} from "../shared/auth/account.service";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'jhi-character',
  templateUrl: './character.component.html',
  styles: []
})
export class CharacterComponent implements OnInit {

  character: CharacterModel;
  success: boolean;
  characters: Observable<any[]>;

  constructor(private db: AngularFireDatabase, private account: AccountService) { }

  ngOnInit() {
      this.characters = this.db.list('characters').valueChanges();

      this.character = new CharacterModel();

      this.account.get().subscribe((user) => {
          this.character.idUser = user.body.id;
      });

      this.success = false;
  }

    saveCharacter() {
        this.db.list('characters').push(this.character);
        this.success = true;
        console.log(this.success)
    }

}
