import React, {Component} from 'react';
import {View, Text, Modal, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

export default class Addmateria extends React.Component{

    // construtor(props){
    //     super(props);
    // }

    /*postMaterias = async () => {
        try{
          let token =  await AsyncStorage.getItem("@GerenciadorUniversitario:token");
          const auth = 'JWT ' + token;
          const response = await api.post('/materias/',
          { usuario: 1, 
            nome: "eXtreme Programming",
            ab1: 0.0,
            ab2: 0.0,
            reav: 0.0,
            final: 0.0,
            media: 0.0,
            faltas: 0,
            carga_horaria: 0,
            max_faltas: 0,
            conceito: "Matriculado",}, 
          
          { headers:{'Authorization' : auth } });
          alert("Matéria Adicionada!");
          this.getAllMaterias();
        }catch (response){
          alert("Erro ao adicionar!");
        }
    }*/



    render (){
        return (
            <Modal 
            animationType='fade'
            transparent={true}
            visible={true}
            style={styles.container}
            >
            
            <View style={styles.boxCont}> 
                <View>
                    <Text>ADICIONAR MATÉRIA</Text>
                    <TextInput placeholder="Nome da matéria"/>
                    <TextInput placeholder="Carga Horária"/>
                </View>
                <View>
                <TouchableOpacity onPress={() => {}}>
                    <Text>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                    <Text>Adicionar</Text>
                </TouchableOpacity>
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
        alignItems: 'center',   
        justifyContent: 'center',
    },
  
    textinputs :{
      backgroundColor : 'rgba(255,255,255, 0.2)',
      height: 40,
      width: 300,
      paddingHorizontal: 10,
    },
  
    title:{
      color: '#FFF',
      marginTop: 10,
      width: 300,
      textAlign: 'center',
      opacity: 0.9,
    },
  });