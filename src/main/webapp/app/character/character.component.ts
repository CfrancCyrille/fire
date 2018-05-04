import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {CharacterModel} from "../core/models/character.model";
import {AccountService} from "../shared/auth/account.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-character',
  templateUrl: './character.component.html',
  styles: []
})
export class CharacterComponent implements OnInit {

  character: CharacterModel;
  characters: any[];
  closeResult: string;
  itemsRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase, private account: AccountService, private modalService: NgbModal) { }

  ngOnInit() {
      this.itemsRef = this.db.list('characters');

      this.character = new CharacterModel();

      this.account.get().subscribe((user) => {
          this.character.idUser = user.body.id;
      });

      this.itemsRef.snapshotChanges().map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      }).subscribe((characters) => {
              this.characters = characters;
          });
      }

    saveCharacter() {
        this.db.list('characters').push(this.character);
    }

    removeCharacter(key: any) {
        this.db.list('characters').remove(key);
    }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
}
