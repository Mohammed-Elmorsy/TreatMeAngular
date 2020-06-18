import { NgModule } from '@angular/core';

import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from './components/home.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    RouterModule,
    TranslateModule
  ]
})
export class HomeModule { }
