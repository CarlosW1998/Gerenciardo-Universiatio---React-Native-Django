import React from 'react';
import { View, Text, Picker, Item, TouchableOpacity, Modal, StyleSheet, TextInput } from 'react-native';


export default class Notas extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            av: "ab1",
            nota: null,
        }
    }

    valueChange(itemValue){
        this.setState({av: itemValue})
        this.props.selectedAv(itemValue)
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
            <Text style={styles.title}>ADICIONAR NOTA</Text>
            <Text style={styles.title}>Escolha o tipo de Avaliação</Text>
                <Picker
                selectedValue={this.state.av}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue, itemIndex) => this.valueChange(itemValue) }
                //onValueChange={(itemValue, itemIndex) => this.setState({av: itemValue}) }
                >
                    <Picker.Item label="Ab1" value="ab1"/>
                    <Picker.Item label="Ab2" value="ab2"/>
                    <Picker.Item label="Reavaliação" value="reav"/>
                    <Picker.Item label="Prova Final" value="final"/>
                </Picker>

                <TextInput 
                autoFocus
                placeholder="Digite a nota"
                keyboardType='numeric'
                style={styles.textinputs}
                onChangeText = {
                    (text) => {
                        this.setState({
                            nota: text,
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
                onPress={() => {this.props.setNota(this.state.nota, this.state.av)}} >
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