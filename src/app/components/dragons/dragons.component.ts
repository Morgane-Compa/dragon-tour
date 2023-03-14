import { Component } from '@angular/core';
import { dragon } from 'src/app/mocks/dragons';
import { DRAGONS } from 'src/app/mocks/mock-dragons';


@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.css']
})
export class DragonsComponent {

  dragons = DRAGONS;
  selectedDragon?: dragon;


  onSelect(hero: dragon): void {
  this.selectedDragon = hero;
}

// c"était ce qu'il y avait avant
  dragon: dragon = {
    id : 1,
    name: 'Fatalis'
  };


}
