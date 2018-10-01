import { IEmployee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  /*
   * Responsability: provide the Employee Data
  */

  // Simulation of a remote API using local file
  private _url = "/assets/data/employees.json";

  constructor(
    private http: HttpClient
  ) { }

  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }

}
