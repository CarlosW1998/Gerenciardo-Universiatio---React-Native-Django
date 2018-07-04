import { Injectable } from '@angular/core';
import { UserapiService } from './userapi.service';
import { User } from './login/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private apiservice : UserapiService) { }
    
    login(user : User) {
      this.apiservice.gettoken(user).subscribe(data => {
        localStorage.setItem('token', data['token']);
      });
    }
    deleteToken() {
      localStorage.removeItem('token');
    }
    gettoken() {
      return localStorage.getItem('token');
    }

}
