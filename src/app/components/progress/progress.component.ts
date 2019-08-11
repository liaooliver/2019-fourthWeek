import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
    console.log(this._route)
  }

}
