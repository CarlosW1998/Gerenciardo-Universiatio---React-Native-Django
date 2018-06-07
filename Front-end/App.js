import React from 'react';
import { AsyncStorage, View } from 'react-native';
import api from './Networking/Api';
import LoginScreen from './LoginScreen/LoginScreen';
import MainScreen from './MainScreens/MainScreen';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLogged: false,
      user: '',
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
      await AsyncStorage.setItem("@GerenciadorUniversitario:pswd", this.state.pswd);
      
      this.setState({
        isLogged: true
      });
    }catch (response){
      alert("Dados inválidos, tente outra vez");
    }
  }

  signIn = async () => {
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
     /*return (
       <MainScreen/> 
     );*/

    let user =  AsyncStorage.getItem("@GerenciadorUniversitario:user");
    let pswd =  AsyncStorage.getItem("@GerenciadorUniversitario:pswd"); 
    
    if(!this.state.isLogged){
      return(
        <LoginScreen 
        logIn = {this.logIn} 
        signIn = {this.signIn}
        getUser={this.getUser} 
        getPassword = {this.getPassword}
        />  
      );
    }else{
      return (
        <MainScreen/>
      );
    }
  }
}
