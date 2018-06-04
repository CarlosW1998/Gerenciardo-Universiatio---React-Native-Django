import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default class Login extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      materias: []
    };
  }



  render() {
    return (
      <View style={styles.container}>


        <TextInput placeholder = "Usuário" style={styles.textinputs}/>
        <TextInput placeholder = "Senha" style={styles.textinputs}/>
        <Button title="Clicar" onPress={this.teste}/>

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


});
