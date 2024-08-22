import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // Recibir Parametros del padre
  @Input()
  public characterList: Character[] = [];

  // Emitir eventos del hijo a el padre
  @Output()
  public deleteCharacterId: EventEmitter<number> =  new EventEmitter();


  onDeleteCharacter( index: number ): void {
    // TODO: Emitir el ID del personaje
    this.deleteCharacterId.emit( index );
  }
}
