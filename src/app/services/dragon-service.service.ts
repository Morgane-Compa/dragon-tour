import { Injectable } from '@angular/core';
import { dragon } from '../mocks/dragons';
import { DRAGONS } from '../mocks/mock-dragons';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DragonServiceService {

  constructor(private messageService: MessageService) { }

  getDragon(): Observable<dragon[]> {
      const dragons = of(DRAGONS);
      this.messageService.add('DragonService: fetched dragons');
      return dragons
  }
}
