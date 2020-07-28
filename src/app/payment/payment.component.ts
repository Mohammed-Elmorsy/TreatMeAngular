import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../core/services/payment/payment.service';
import { payParam } from '../_models/payParam';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private service:PaymentService) { }

  ngOnInit() {
    this.loadStripe();
  }

  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }
  }

  
  pay(amount) {    
    let tok:any;
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51GxvHVCHsXKAjY8WAxlGhhdzJsU0g5q8YjUsG6oTxQHR3ewGXPE71l5KqKAirjE492pxPVkMXd5eRLXFVXDD4uhk00dmDlwC4O',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token);
        tok=token;
       
        
      }
    });

    let pay:payParam={
      fees:amount,
      email:"minamaher011@gmail.com"
    };
    
     this.service.checkOut(pay).subscribe((a)=>{
      alert("paid");
     }
    
        );
 
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });
 
}


}
