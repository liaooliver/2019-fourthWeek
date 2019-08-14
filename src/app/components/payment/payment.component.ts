import { Component, OnInit } from '@angular/core';
import { Payment } from '../../models/payment';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  public payment: Payment;

  constructor() { }

  ngOnInit() {
    this.payment = new Payment("","","","","","","","")
  }

  handleFocus(e){
    console.log(e)
    if (e.target.value.length == e.target.getAttribute('maxLength')){
      e.target.nextElementSibling.focus();
    }
  }

  finished(form){
    console.log(form)
  }
}
