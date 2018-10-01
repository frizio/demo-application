import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public departments = [
    {"id": 1, "name": "MongoDb"},
    {"id": 2, "name": "Express"},
    {"id": 3, "name": "Angular"},
    {"id": 4, "name": "Node"}
  ];

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onSelect(department) {
    this._router.navigate(["/departments", department.id]);
  }


}
