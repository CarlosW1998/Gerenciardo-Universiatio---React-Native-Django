import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, KeyboardAvoidingView } from 'react-native';

export default class LoginScreen extends React.Component {

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container} logged = {this.props.logged}>
        <View style={styles.logoContainer}>
          <Image 
          source={require('../res/LogoGU1.png')}
          style={styles.logo}
          />
          <Text style={styles.title}>{"BEM-VINDO AO GERENCIADOR UNIVERSITÁRIO!\n\n"}</Text>

          <TextInput 
          placeholder = "Usuário" 
          style={styles.textinputs}
          placeholderTextColor = "rgba(255,255,255,0.7)" 
          onChangeText = {
            (text) => {
              this.props.getUser(text)
            } 
          }     
          />

          <TextInput 
          placeholder = "Senha" 
          style={styles.textinputs}
          placeholderTextColor = "rgba(255,255,255,0.7)"
          secureTextEntry
          onChangeText = {
            (text) => {
              this.props.getPassword(text)
            } 
          }  
          />

          <View style={{flexDirection: 'row', height: 35}}>
          <Button 
          title="Login" 
          onPress={this.props.logIn} 
          color="#012B74"
          />
          <View style={{width: 50, height: 50}}/>
          <Button 
          title="Cadastrar" 
          onPress={this.props.signIn} 
          color="#012B74"
          />
          </View>

        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },

  textinputs :{
    backgroundColor : 'rgba(255,255,255, 0.2)',
    height: 40,
    width: 300,
    paddingHorizontal: 10,
  },

  logoContainer:{
    alignItems: 'center',   
    flexGrow: 1,
    justifyContent: 'center',
  },

  logo :{
    width: 251,
    height: 169,
  },

  title:{
    color: '#FFF',
    marginTop: 10,
    width: 300,
    textAlign: 'center',
    opacity: 0.9,
  },

  formCont:{
    alignItems: 'center',   
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
    height: 10,
    paddingBottom: 100 
  },

  textinputs :{
    backgroundColor : 'rgba(255,255,255, 0.2)',
    height: 40,
    width: 300,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#FFF',
  },

});
