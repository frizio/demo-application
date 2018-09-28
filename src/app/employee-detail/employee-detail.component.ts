import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [
    {"id": 1, "name": "Ann", "age": 18},
    {"id": 2, "name": "Bob", "age": 22},
    {"id": 3, "name": "Cal", "age": 45},
    {"id": 4, "name": "Dan", "age": 33}
  ];

  constructor() { }

  ngOnInit() {
  }

}
