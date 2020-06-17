import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private authService:AuthService, private translate:TranslateService) 
  {
    translate.use('ar');       
   }

  ngOnInit() {
         
  }

  useLang(lang:string){
    this.translate.use(lang);    
  }

}
