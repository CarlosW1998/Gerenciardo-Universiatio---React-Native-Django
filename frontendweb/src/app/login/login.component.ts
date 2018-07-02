import { Component, OnInit } from '@angular/core';
import { UserapiService } from '../userapi.service';
import { User, Token } from './user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentuser = new User;
  token = new Token;
  constructor(private userapi : UserapiService) { }

  ngOnInit() {
  }
  login(user: string, password: string) {
    this.currentuser.username = user;
    this.currentuser.password = password;    
    console.log(this.userapi.gettoken(this.currentuser).subscribe(mytoken => this.token = mytoken));
    if(this.token.token != '') {console.log("MUHUWHAUWAWA")};
  }

  adduser(user: string, password: string){
    this.currentuser.username = user;
    this.currentuser.password = password;
    this.userapi.adduser(this.currentuser).subscribe();
    this.userapi.gettoken(this.currentuser).subscribe(mytoken => this.token = mytoken);
    console.log(this.token);
  }
}
