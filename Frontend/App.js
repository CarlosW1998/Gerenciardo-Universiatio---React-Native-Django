import React from 'react';
import { AsyncStorage } from 'react-native';
import api from './Networking/Api';
import LoginScreen from './LoginScreen/LoginScreen';
import MainScreen from './MainScreens/MainScreen';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {isLogged: false}
  }

  signIn = async () => {
    try{
      console.warn("1");
      const response = await api.post('/api-token-auth/', {
        username: "Lucas",
        password: "lucas"
      });
      console.warn("2");
      const {token} = response.data;
      console.warn("3");
      await AsyncStorage.setItem(["token", token]);
      console.warn("token: " + token);
    }catch (response){
      console.error("kk eae men");
    }

    //console.warn(this.state.error);




  };


  render() {
    return (
      <MainScreen onPress = {this.signIn}/>      
    );
    
    // if(!this.state.isLogged){
    //   return(
    //     <LoginScreen logged = {this.state.isLogged} onPress={() => this.setState({isLogged : true})}/>
    //   );
    // }else{
    //   return (
    //     <View style={styles.container}>
          
    //       <MainScreen onPress={() => this.setState({isLogged : false})} />
    //     </View>
    //   );
    // }


  }
}
