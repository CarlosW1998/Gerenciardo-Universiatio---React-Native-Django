import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Api from './Networking/Api';
import LoginScreen from './LoginScreen/LoginScreen';
import MainScreen from './MainScreens/MainScreen';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {isLogged: false}
  }


  render() {
    return (
      <MainScreen/>      
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
