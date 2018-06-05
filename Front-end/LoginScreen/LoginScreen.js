import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default class LoginScreen extends React.Component {

  render() {
    return (
      <View style={styles.container} logged = {this.props.logged}>

        <TextInput 
        placeholder = "Usuário" style={styles.textinputs}
        placeholderTextColor = "rgba(255,255,255,0.7)" 
        onChangeText = {
          (text) => {
            this.props.getUser(text)
          } 
        }     
        />

        <TextInput placeholder = "Senha" style={styles.textinputs}
        placeholderTextColor = "rgba(255,255,255,0.7)"
        secureTextEntry
        onChangeText = {
          (text) => {
            this.props.getPassword(text)
          } 
        }  
        />

        <Button title="Clicar" onPress={this.props.onPress}/>

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
    backgroundColor : 'rgba(255,255,255, 0.2)',
    height: 40,
    width: 300,
    paddingHorizontal: 10,
  },


});
