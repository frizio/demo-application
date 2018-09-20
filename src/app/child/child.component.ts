import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output()
  greetEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  callParentGreet() {
    this.greetEvent.emit();
  }

}
