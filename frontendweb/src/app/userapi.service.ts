import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, Token } from './login/user'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {
  rooturl = 'http://localhost:8000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin' : '*',
      'Content-Type':  'application/json',
    })
  };
  constructor(private http : HttpClient) { }
  
  adduser(user : User) : Observable<User> {
      return this.http.post<User>(this.rooturl + 'criarusuario/', user, this.httpOptions);
  }
  gettoken(user: User) : Observable<Token> {
    return this.http.post<Token>(this.rooturl + 'api-token-auth/', user, this.httpOptions);
  }

}
