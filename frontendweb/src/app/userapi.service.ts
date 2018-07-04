import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, Token } from './login/user';
import { Materias } from './materias/materias';
import { Observable, BehaviorSubject } from 'rxjs';
import { tick } from '@angular/core/testing';


@Injectable({
  providedIn: 'root'
})
export class UserapiService {
  rooturl = 'http://localhost:8000/';
  private tokenSource = new BehaviorSubject('default message');
  currentToken = this.tokenSource.asObservable();

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin' : '*',
      'Content-Type':  'application/json',
    })
  };
  constructor(private http : HttpClient) { }

  changeToken(token: string) {
    this.tokenSource.next(token)
  }
  
  adduser(user : User) : Observable<User> {
      return this.http.post<User>(this.rooturl + 'criarusuario/', user, this.httpOptions);
  }
  gettoken(user: User) : Observable<Token> {
    return this.http.post<Token>(this.rooturl + 'api-token-auth/', user, this.httpOptions);
  }
  getMaterias(token : string) : Observable<Materias[]> {
    
    this.httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : '*',
        'Content-Type':  'application/json',
        'Authorization' : 'JWT ' + token
      })
    };

    return this.http.get<Materias[]>(this.rooturl + 'materias/', this.httpOptions);
  }
  addMateria(token : string, materia : Materias) : Observable<Materias> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : '*',
        'Content-Type':  'application/json',
        'Authorization' : 'JWT ' + token
      })
    };
    return this.http.post<Materias>(this.rooturl + 'materias/', materia,  this.httpOptions);
  }
  deletemateria(token : string, id : number) : Observable<Materias> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : '*',
        'Content-Type':  'application/json',
        'Authorization' : 'JWT ' + token
      })
    };
    return this.http.delete<Materias>(this.rooturl + 'materias/' + String(id), this.httpOptions);
  }
  updatemateria(token : string, id : number, materia : Materias) : Observable<Materias> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : '*',
        'Content-Type':  'application/json',
        'Authorization' : 'JWT ' + token
      })
    };
    return this.http.put<Materias>(this.rooturl + 'materias/' + String(id), materia, this.httpOptions);
  }
}
