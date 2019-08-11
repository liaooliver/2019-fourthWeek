import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateControlService {

  public step = new BehaviorSubject({
    fill: true,
    way: false,
    payment: false
  })

  constructor() { }

}
