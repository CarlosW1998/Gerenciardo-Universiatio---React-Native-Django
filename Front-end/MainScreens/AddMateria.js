import React, {Component} from 'react';
import {View, Text, Modal, TextInput, StyleSheet, TouchableOpacity, Button} from 'react-native';

export default class Addmateria extends React.Component{

    constructor(props){
         super(props);
         this.state = {
            nomeMat: '',
            cargaH: 0,
         };
     }

    render(){
        return (
            <Modal 
            animationType='fade'
            transparent={true}
            visible={this.props.visible}
            onRequestClose = {() => {}}
            >
            
            <View style={styles.container}> 
                <View style={styles.boxCont}>
                    <Text style={styles.title}>ADICIONAR MATÉRIA</Text>

                    <TextInput 
                    autofocus
                    placeholder="Nome da matéria"
                    style={styles.textinputs}
                    onChangeText = {
                        (text) => {
                          this.setState({
                            nomeMat: text,
                          });
                        } 
                      } 
                    />

                    <TextInput 
                    autoFocus
                    placeholder="Carga Horária"
                    keyboardType='numeric'
                    style={styles.textinputs}
                    onChangeText = {
                        (text) => {
                          this.setState({
                            cargaH: text,
                          });
                        } 
                      } 
                    />

                    <View style={styles.buttonCont}>
                        <TouchableOpacity 
                        style={[styles.button, {backgroundColor: '#E25F5F', marginRight: 5}]}
                        onPress={this.props.onCancel}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={[styles.button, {backgroundColor: '#70BD85', marginLeft: 5}]}
                        onPress={() => this.props.add(this.state.nomeMat, this.state.cargaH)}
                        >
                            <Text style={styles.buttonText}>Adicionar</Text>
                        </TouchableOpacity>

                        </View>
                </View>
            </View>
            </Modal>   
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.7)',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    boxCont:{
        padding : 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: 'center',   
        width: 300,
    },
  
    textinputs :{
      backgroundColor : 'rgba(255,255,255, 0.2)',
      height: 40,
      width: 300,
      paddingHorizontal: 10,
    },
  
    title:{
      fontWeight: 'bold',
      fontSize: 16,
    },

    inputs: {
        alignSelf: 'stretch',
        marginTop: 10,
        paddingVertical: 0,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#DDD',
        height: 40,
        borderRadius: 3, 
    },

    buttonCont: {
        marginTop: 10,
        height: 40,
        flexDirection: 'row',
    },

    button:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },

    buttonText:{
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 12,
    }

  });