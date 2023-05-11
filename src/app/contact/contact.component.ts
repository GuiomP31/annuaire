import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    // Déclaration d'un attribut de type string
    contactEmail : string ='guipast31@gmail.com';

  constructor() { }

  ngOnInit(): void {
  }

}
