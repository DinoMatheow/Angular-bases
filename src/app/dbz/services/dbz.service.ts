import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {
  public character: Character[]= [{
    id: uuid(),
    name: 'krillin',
    power: 50
    },{
      id: uuid(),
      name:'goku',
      power: 100
    },{
      id: uuid(),
      name: 'vegueta',
      power: 90

    }];

    addCharacter( character: Character ):void {

      const newCharacter: Character = {id: uuid(), ...character}

      this.character.push(newCharacter);

    }

    onDeleteCharacter(index:number){

      this.character.splice(index, 1);
    }


deleteCharacterById(id: string){
  this.character = this.character.filter( character => character.id !==id);
}

}
