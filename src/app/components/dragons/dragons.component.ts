import { Component } from '@angular/core';
import { dragon } from 'src/app/mocks/dragons';


@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.css']
})
export class DragonsComponent {

  dragon: dragon = {
    id : 1,
    name: 'Fatalis'
  };


}
