import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConnectarService {
  constructor(private httpClient: HttpClient) {}
  // mètodes que retornen valors que venen d'una API
  getPosts(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts', {
      responseType: 'json',
      params: { username: 1 },
    });
    // return this.httpClient.post('https://jsonplaceholder.typicode.com/posts', {
    //   hero: 'Marc',
    //   responseType: 'json',
    // });
    // return this.httpClient.delete(
    //   'https://jsonplaceholder.typicode.com/posts/1',
    //   { responseType: 'json' }
    // );
  }

  // prueba de método getUsers
  // getUsers(): Observable<any> {
  //   return this.httpClient.get('https://reqres.in/api/users?page=2');
  // }

  getUsers(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/users');
  }

  getPassword(nameUser: string): Observable<any> {
    return this.httpClient.get(
      'http://localhost:3000/password/' + nameUser
    );
  }

  insertUser(): Observable<any> {
    return this.httpClient.put('http://localhost:3000/insertUser', {
      username: 'ramon',
      userpass: 'ramon',
    }).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
