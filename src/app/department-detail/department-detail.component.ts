import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.departmentId = id

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.departmentId = parseInt( params.get("id"));
    }
    );

  }

  goBack() {
    let id = this.departmentId + 1;
    this.router.navigate(["/departments", id]);
  }

  goNext() {
    let id = this.departmentId + 1;
    this.router.navigate(["/departments", id]);
  }

}
