
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { payParam } from 'src/app/_models/payParam';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient:HttpClient) { }



  checkOut(pay:payParam)
  {

      return this.httpClient.post(environment.baseURL+"api/payment",pay);

  }
}