// Mes imports
import { Component, OnInit } from '@angular/core';
import { dragon } from 'src/app/mocks/dragons';
import { DragonServiceService } from 'src/app/services/dragon-service.service';
import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.css']
})

export class DragonsComponent implements OnInit {

  // Mes variables
  // dragons = DRAGONS;
  dragons: dragon[] = [];
  selectedDragon?: dragon;

  // J'appelle mes service ici 
  constructor(private dragonService: DragonServiceService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getDragon();
  }

  onSelect(hero: dragon): void {
    this.selectedDragon = hero;
    // va afficher ce message quand on clique sur un dragon de la liste
    this.messageService.add(`DragonsComponent: Selected dragon id=${hero.id}`);
  }

  // observable j'y comprend pas grand chose... mais bon je pense que ça récupère la liste des dragons
  getDragon(): void {
    this.dragonService.getDragon()
      .subscribe(dragons => this.dragons = dragons);
  }


  // c"était ce qu'il y avait avant
  dragon: dragon = {
    id: 1,
    name: 'Fatalis'
  };


}
