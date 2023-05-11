import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/Personne';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-liste-personne',
  templateUrl: './liste-personne.component.html',
  styleUrls: ['./liste-personne.component.css']
})
export class ListePersonneComponent implements OnInit {

  // Table des Personnes à afficher
  personnesAAfficher : Personne[] =[];
  personneService : PersonneService;

   // Injection de la dépendance (récup du singleton PersonneService)
  // Un singleton est un objet unique dans sa classe.
  constructor(private ps : PersonneService) {

  // Remplit la liste des personnes à afficher avec les données fournies par le service.
  this.personneService = ps;
  this.majPersonnesAAfficher(); 
   }

  ngOnInit(): void {
  }
  /**
   * Met à jour l'affichage la liste des personnes
   */
  onSuppressionPersonne() {
    // Met à jour la liste des personnes
    this.majPersonnesAAfficher();
  }
  
  majPersonnesAAfficher(){
    this.personnesAAfficher = this.personneService.getPersonnes();
  }
  
}
