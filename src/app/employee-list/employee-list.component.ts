import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];

  constructor(
    private _employeeService: EmployeeService
  ) { }

  ngOnInit() {
    
    // Subscribe to the Observable and assign the data to the local variable
    this._employeeService.getEmployee()
      .subscribe( data => this.employees = data );

  }

}
