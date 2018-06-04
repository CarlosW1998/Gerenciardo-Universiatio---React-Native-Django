import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';
import Login from './login/Login';

export default class App extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      materias: []
    };
  }


  render() {
    return (
      <View style={styles.container}>
      <View style={styles.logoCont}>
        <Image 
        style={styles.logo}
        source={require("./res/Logo_GU.jpeg")}/>
        <Text>{`BEM VINDO AO GERENCIADOR UNIVERSITÁRIO\nPOR FAVOR, IDENTIFIQUE-SE\n\n`}</Text>
        </View>
        <View><Login/></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textinputs :{
    backgroundColor : '#ffffff',
    height: 30,
    width: 200,
  },

  logo :{
    height: 200,
    width: 200,

  },
  logoCont:{
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },


});
