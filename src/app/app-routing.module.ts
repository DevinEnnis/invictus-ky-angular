import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProgramsComponent } from './programs/programs.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  {path: 'programs', component: ProgramsComponent},
  { path: '', component: HomeComponent } // Redirect to home by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
