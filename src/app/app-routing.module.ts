import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AjoutPersonneComponent } from './ajout-personne/ajout-personne.component';
import { ListePersonneComponent } from './liste-personne/liste-personne.component';
import { ContactComponent } from './contact/contact.component';
import { AProposComponent } from './a-propos/a-propos.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ajout-personne', component: AjoutPersonneComponent},
  {path: 'liste-personne', component: ListePersonneComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'a-propos', component: AProposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
