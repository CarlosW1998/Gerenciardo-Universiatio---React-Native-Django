import React from 'react';
import { AsyncStorage, View, Navigator } from 'react-native';
import api from '../Networking/Api';
import LoginScreen from './LoginScreen';
import MainScreen from '../MainScreens/MainScreen';
import StackNavigator from '../MainScreens/StackNavigator';

export default class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLogged: false,
      user: null,
      pswd: '',
      token: '',
      
    }
  }

  logIn = async () => {
    try{
      const response = await api.post('/api-token-auth/', {
        username: this.state.user,
        password: this.state.pswd,
      });
      const {token} = response.data;
      this.setState({
        token: token
      });
      await AsyncStorage.setItem("@GerenciadorUniversitario:token", token);
      await AsyncStorage.setItem("@GerenciadorUniversitario:user", this.state.user);
      await AsyncStorage.setItem("@GerenciadorUniversitario:logged", '1');
      
      this.setState({
        isLogged: true
      });

      return true;

    }catch (response){
      alert("Dados inválidos, tente outra vez");
      return false;
    }
  }

  signIn = async () => {
    if(this.state.user === null|| this.state.pswd==null)
      alert("Digite algo");
    else{
      try{
        const response = await api.post('/criarusuario/', {
          username: this.state.user,
          password: this.state.pswd,
        });
        const {username} = response.data;
        alert("Cadastrado com sucesso!");
      }catch (response){
        alert("Nome de usuário existente");
      }
    }
   };

   getUser = (text) =>{
     this.setState({
       user: text
     });
   }

   getPassword = (text) =>{
    this.setState({
      pswd: text
    });
  }


  render() {
    //let user =  AsyncStorage.getItem("@GerenciadorUniversitario:user");

    return(
     <LoginScreen 
      logIn = {this.logIn} 
      signIn = {this.signIn}
      getUser={this.getUser} 
      getPassword = {this.getPassword}
      />  
    );

  }
}

