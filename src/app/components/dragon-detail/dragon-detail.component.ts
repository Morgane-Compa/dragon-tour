import { Component, Input } from '@angular/core';
import { DRAGONS } from 'src/app/mocks/mock-dragons';
import { dragon } from 'src/app/mocks/dragons';


@Component({
  selector: 'app-dragon-detail',
  templateUrl: './dragon-detail.component.html',
  styleUrls: ['./dragon-detail.component.css']
})
export class DragonDetailComponent {

  @Input() dragon? : dragon;
}
