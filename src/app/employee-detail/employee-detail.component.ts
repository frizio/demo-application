import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  public errorMessage: string;

  constructor(
    private _employeeService: EmployeeService
  ) { }

  ngOnInit() {
    
    // Subscribe to the Observable and assign the data to the local variable
    this._employeeService.getEmployee()
      .subscribe( data => this.employees = data,
                  error => this.errorMessage = error
    );
  }

}
