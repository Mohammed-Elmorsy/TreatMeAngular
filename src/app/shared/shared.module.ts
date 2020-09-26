import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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
    ToastrModule,
    TranslateModule
      ]
})
export class SharedModule { }
