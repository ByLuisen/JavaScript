import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  getPassword(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/password/user1');
  }

  insertUser(): Observable<any> {
    return this.httpClient.put('http://localhost:3000/insertUser', {
      username: 'lucho',
      userpass: 'lucho123',
    });
  }
}
