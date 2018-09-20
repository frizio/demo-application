import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  
  private _loggedIn: boolean;

  get loggedIn(): boolean {
    return this._loggedIn;
  }

  @Input()
  set loggedIn(value: boolean) {
    // Here intercept the value change...
    this._loggedIn = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
