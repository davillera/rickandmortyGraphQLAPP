import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Character } from '@app/shared/data.interface';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersCardComponent {


  @Input() character: Character = {
    id: 0,
    name: '',
    status: '',
    species: '',
    gender: '',
    image: '',
  };

  toggleFavorite():void{
    const isFavorite = this.character.isFavorite
    this.getIcon()
    this.character.isFavorite = !isFavorite
  }

  getIcon():string{
    return this.character.isFavorite ? 'heart-solid.svg' : 'heart.svg';
  }
}

