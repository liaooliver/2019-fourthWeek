import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateControlService } from '../../services/stateControl.service';

@Component({
  selector: 'app-way',
  templateUrl: './way.component.html',
  styleUrls: ['./way.component.scss']
})
export class WayComponent implements OnInit {

  public paywayList = [
    {
      src:"/assets/Image 2/Image 2.png",
      text:"超商代碼 - 7-11",
      isSelected:false
    },
    {
      src: "/assets/Image 3/Image 3.png",
      text: "ATM轉帳 台新銀行",
      isSelected: false
    },
    {
      src: "/assets/Image 4/Image 4.png",
      text: "街口支付",
      isSelected: false
    }, {
      src: "/assets/crditcard.png",
      text: "信用卡 - VISA",
      isSelected: false
    },
    {
      src: "/assets/Image 5/Image 5.png",
      text: "LINE Pay",
      isSelected: false
    }
  ]
  constructor(
    private _route: Router,
    private _state: StateControlService
  ) {}

  ngOnInit() {
    
  }

  selectWay(index){
    this.paywayList.forEach(item => item.isSelected = false)
    this.paywayList[index].isSelected = true;
  }

  last(){
    this._state.step.value.way = false;
    this._route.navigate([`/basic`])
  }

  next(){
    this._state.step.value.payment = true;
    this._route.navigate([`/payment`])
  }

}
