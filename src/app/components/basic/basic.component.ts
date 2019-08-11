import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Basic } from '../../models/basic';
import { StateControlService } from '../../services/stateControl.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  public basic: Basic;
  public isValid = false;
  public validAttend = false;

  constructor( 
    public _state: StateControlService,
    public _router: Router
  ) { 
    this.basic = new Basic('','','','',0,0,'',false, '');
  }

  ngOnInit() {}

  decrease(type, e) {
    e.preventDefault();
    e.stopPropagation();
    let auditCount = this.basic.audit;
    let childCount = this.basic.child;
    if (type === 'audit') {
      this.basic.audit = auditCount > 0 ? auditCount-1 : auditCount;
    } else if (type = 'child') { 
      this.basic.child = childCount > 0 ? childCount-1 : childCount;
    }
  }
  increase(type, e) {
    if (type === 'audit') {
      this.basic.audit++;
    } else if (type = 'child') {
      this.basic.child++;
    }
  }
  next(basicForm){
    console.log(basicForm.valid)
    console.log(basicForm)
    if (basicForm.valid){
      this._state.step.value.way = true
      this._router.navigate([`/way`])
    }else{
      let sum = this.basic.audit + this.basic.child;
      if(sum === 0) this.validAttend = true;
      this.isValid = true;
    }    
  }
}
