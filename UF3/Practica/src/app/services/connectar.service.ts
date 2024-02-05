import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConnectarService {
  constructor(private httpClient: HttpClient) {}
  // mètodes que retornen valors que venen d'una API
  getPosts():Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

  getUsers():Observable<any> {
    return this.httpClient.get('https://reqres.in/api/users?page=2');
  }
}
