import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';




@NgModule({
  declarations: [],
  imports: [

  ],
  exports:[
    CommonModule,
    FormsModule,  
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule,
    TranslateModule
      ]
})
export class SharedModule { }
