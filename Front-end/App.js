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
      await AsyncStorage.setItem(["@GerenciadorUniversitario:token", token]);
      console.warn("token: " + token);
      this.setState({
        isLogged: true
      });
    }catch (response){
      console.warn("Dados inválidos");
    }
  }


  signIn = async () => {
    try{
      const response = await api.post('/criarusuario/', {
        username: this.state.user,
        password: this.state.pswd,
      });
      const {username} = response.data;
      console.warn(username);
      //await AsyncStorage.setItem(["token", token]);
      //console.warn("token: " + token);
    }catch (response){
      console.warn("Nome de usuário existente");
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
    // return (
    //   <LoginScreen 
    //   onPress = {this.logIn} 
    //   getUser={this.getUser} 
    //   getPassword = {this.getPassword}/>  
    // );
    
    if(!this.state.isLogged){
      return(
        <LoginScreen 
        onPress = {this.logIn} 
        getUser={this.getUser} 
        getPassword = {this.getPassword}/>  
      );
    }else{
      return (
        <MainScreen onPress={() => this.setState({isLogged : false})} token = {this.state.token}/>
      );
    }


  }
}
