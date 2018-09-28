import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  /*
   * Responsability: provide the Employee Data
  */

  constructor() { }

  getEmployee() {
    return [
      {"id": 1, "name": "Ann", "age": 18},
      {"id": 2, "name": "Bob", "age": 22},
      {"id": 3, "name": "Cal", "age": 45},
      {"id": 4, "name": "Dan", "age": 33}
    ];
  }

}
