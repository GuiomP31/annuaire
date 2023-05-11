import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Personne } from '../models/Personne';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-ajout-personne',
  templateUrl: './ajout-personne.component.html',
  styleUrls: ['./ajout-personne.component.css']
})
export class AjoutPersonneComponent implements OnInit {

  // Déclaration d'un attribut
  personneService : PersonneService;

  constructor(private ps : PersonneService) { 
    this.personneService = ps;
  }

  ngOnInit(): void {
  }

  /**
   * Traite la soumission du formulaire 
   * d'ajout d'une personne.
   * @author Guillaume Angular.
   * @param formul Le contenu du formulaire.
   */

  onFormSubmit(formul: NgForm) {
  console.log(formul.value);
  //console.log('SALUTT !!');

  // Ajoute la personne via le PersonneService
    this.personneService.ajouterPersonne(this.formValueToPersonne(formul.value));
  }

  formValueToPersonne(value: any) : Personne {


     // assert('id' in formul.value 
    // && 'nom' in formul.value 
    // && 'prenom' in formul.value 
    // && 'telephone' in formul.value 
   

    return {
      id : value.id,
      nom : value.nom,
      prenom : value.prenom,
      tel : value.telephone
    } as Personne
  }
}
