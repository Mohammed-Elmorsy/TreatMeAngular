import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/components/home.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
   

const routes: Routes = [
  {path:"",redirectTo:"home" ,pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"**",component:PageNotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
