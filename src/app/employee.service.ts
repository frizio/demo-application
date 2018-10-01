import { IEmployee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


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
    // get(this._url).pipe(catchError(this.errorHandler))
    return this.http.get<IEmployee[]>(this._url)
                    .pipe(catchError(this.errorHandler))
                    
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }

}
