import { Injectable } from '@angular/core';
import { Personne } from  '../models/Personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  personnes : Personne[] = [
    {id: 1, nom: 'Lagaffe', prenom: 'Gaston', tel: '01 02 03 04 05'},
    {id: 2, nom: 'de-chez-Smith-en-face', prenom: 'Jules', tel: '09 05 84 69 48'},
    {id: 3, nom: 'Jeanne', prenom: 'Mademoiselle', tel: '05 04 03 02 01'},
    {id: 4, nom: 'Prunelle', prenom: 'Léon', tel: '05 04 03 02 01'},
    {id: 5, nom: 'Lebrac', prenom: 'Yves', tel: '05 12 43 52 71'},
    {id: 6, nom: 'Labévue', prenom: 'Bertrand', tel: '05 04 03 02 01'},
    {id: 7, nom: 'Mademoiselle', prenom: 'Jeanne', tel: '05 04 03 02 01'},
    {id: 8, nom: 'Pastor', prenom: 'Guillaume', tel: '05 06 03 02 00'},
    {id: 9, nom: 'Léponge', prenom: 'Bob', tel: '06 06 09 82 10'}
];
  
  constructor() { }

  /**
   * 
   * @returns Retourne la liste des personnes.
   * Le (!) tableau des personnes.
   */
    getPersonnes() : Personne[] {
      return this.personnes.slice();
    }
  

    /**
     * Ajouter la personne qui est fournit à la base (le tableau)
     */
    ajouterPersonne(p : Personne){
    this.personnes.push(p);
    }

    /**
     * Supprime une personne en base de données
     */
    supprimePersonne(personneASupprimer : Personne){
      // filter () retourne un nouveau tableau fabriqué à partir
      // de l'initial et modifié via le filtre qu'on lui fournit
      this.personnes = this.personnes.filter(
        // Filtre fourni, p prendra la valeur de chaque élément du tableau initial
        // Un filtre est une fonction
       // Retourne vrai si on doit conserver p, sinon faux
          function (p : Personne){
          return p !=personneASupprimer
        }              
      );
      console.log(this.personnes); 
      // Ce qui s'écrit avec la notation fléchée équivaut à ligne 46 à 51
      // this.personnes = this.personnes.filter(p => p != personneASupprimer);
   } 
}
