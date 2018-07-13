import { Injectable } from '@angular/core';
import { UserapiService } from './userapi.service';
import { User } from './login/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private apiservice : UserapiService) { }
    
    login(user : User, router : Router) {
      this.apiservice.gettoken(user).subscribe(data => {
        localStorage.setItem('token', data['token']);
        router.navigate(["/materias"]);
      },
    );
    }
    deleteToken() {
      localStorage.removeItem('token');
    }
    gettoken() {
      return localStorage.getItem('token');
    }

}
