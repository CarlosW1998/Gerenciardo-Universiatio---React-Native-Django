import { Component, OnInit } from '@angular/core';
import { UserapiService } from '../userapi.service';
import { User, Token } from './user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentuser = new User;
  Erro = '';
  token : Token = {
    token: ''
  };
  constructor(private userapi : UserapiService, private router : Router) { }

  ngOnInit() {
  }
  login(user: string, password: string) {
    this.currentuser.username = user;
    this.currentuser.password = password;    
    this.userapi.gettoken(this.currentuser).subscribe(mytoken => this.token = mytoken);
    if(this.token.token != '') {
      this.userapi.changeToken(this.token.token);
      this.router.navigate(['/materias'])
    }
    else {
      this.Erro = 'Usuario ou Senha incorrets';
    }
  }

  adduser(user: string, password: string){
    this.currentuser.username = user;
    this.currentuser.password = password;
    this.userapi.adduser(this.currentuser).subscribe();
    this.userapi.gettoken(this.currentuser).subscribe(mytoken => this.token = mytoken);
    console.log(this.token.token);
    this.userapi.changeToken(this.token.token);
    this.router.navigate(['/materias']);
  }
}
