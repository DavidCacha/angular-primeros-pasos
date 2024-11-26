import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-dbz-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter():void {

    if ( this.character.name.length === 0 ) return;

    this.onNewCharacter.emit({...this.character});    
    console.log(this.character)
  }
}
