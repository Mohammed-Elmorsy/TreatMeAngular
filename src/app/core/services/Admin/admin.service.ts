import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/_models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpclient:HttpClient) { }


  getAdminById(id)
  {
    return this.httpclient.get<User>(environment.baseURL+"api/user/GetAdmin/"+id);
  }
}
