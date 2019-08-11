import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StateControlService } from './services/stateControl.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fourthWeek';

  public step$;
  
  constructor(
    private _state:StateControlService
  ){}
  
  ngOnInit(){
    this._state.step.subscribe(res => this.step$ = res)
  }

}
