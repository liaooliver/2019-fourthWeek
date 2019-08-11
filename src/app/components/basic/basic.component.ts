import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateControlService } from '../../services/stateControl.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  public attend = {
    audit: 0,
    child: 0
  }
  constructor(
    private _router: Router,
    private _state: StateControlService
  ) { }

  ngOnInit() {
  }

  decrease(type) {
    let auditCount = this.attend.audit;
    let childCount = this.attend.child;
    if (type === 'audit') {
      this.attend.audit = auditCount > 0 ? auditCount-1 : auditCount;
    } else if (type = 'child') { 
      this.attend.child = childCount > 0 ? childCount-1 : childCount;
    }
  }
  increase(type) {
    if (type === 'audit') {
      this.attend.audit++;
    } else if (type = 'child') {
      this.attend.child++;
    }
  }
  next(){
    this._state.step.value.way = true
    this._router.navigate([`/way`])
  }
}
