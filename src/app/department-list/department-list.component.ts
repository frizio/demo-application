import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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

  public selectedId;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt( params.get("id"));
    });
  }

  onSelect(department) {
    this.router.navigate(["/departments", department.id]);
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }


}
