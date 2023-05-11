import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../models/Personne';
import { PersonneService } from '../services/personne.service';


@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css']
})
export class DetailPersonneComponent implements OnInit {

  // pers est un attribut possible pour l'élémént app-detail-personne
  @Input()
  pers ! : Personne;
  personneService : PersonneService;
  // On déclare un nouvel élément que l'on pourra déclencher
  @Output() suppressionPersonne = new EventEmitter<Personne>();

  constructor (private ps : PersonneService) { 
    this.personneService = ps;
  }
  
  ngOnInit(): void {
  }

/**
 * Supprimer la personne correspondant au bouton
 */
  onClicBoutonSuppression() {
    this.ps.supprimePersonne(this.pers);
    this.suppressionPersonne.emit(this.pers);
   // accès direct
  console.log(this.pers);
  }
}

