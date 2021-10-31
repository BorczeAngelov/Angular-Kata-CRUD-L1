import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private productsUrl = 'api/persons';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.productsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getPerson(id: number): Observable<Person> {
    const url = `${this.productsUrl}/${id}`;

    return this.http.get<Person>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  deletePerson(id: number): Observable<Person> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.delete<Person>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }





  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
