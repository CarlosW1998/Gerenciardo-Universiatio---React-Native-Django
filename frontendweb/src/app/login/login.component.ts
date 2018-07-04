import { Component, OnInit } from '@angular/core';
import { UserapiService } from '../userapi.service';
import { User, Token } from './user'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentuser = new User;
  Erro = '';
  constructor(private userapi : UserapiService, private router : Router, private apiauth : AuthService) { }

  ngOnInit() {
  }
  login(user: string, password: string) {
    this.currentuser.username = user;
    this.currentuser.password = password;    
    this.apiauth.login(this.currentuser);
    if(this.apiauth.gettoken()){this.router.navigate(['/materias'])}
    else {this.Erro = 'Usuario ou senha invalidos'}
  }

  adduser(user: string, password: string){
    this.currentuser.username = user;
    this.currentuser.password = password;
    this.userapi.adduser(this.currentuser).subscribe();
    this.apiauth.login(this.currentuser);
    this.router.navigate(['/materias']);
  }
}
