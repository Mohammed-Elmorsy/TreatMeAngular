import { NgModule } from '@angular/core';

import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from './components/home.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    RouterModule,
  ]
})
export class HomeModule { }
