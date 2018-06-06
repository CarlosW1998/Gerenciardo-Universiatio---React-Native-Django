import React from 'react';
import { View, Text, Button, FlatList, AsyncStorage } from 'react-native';
import api from '../Networking/Api';


export default class Materias extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            token : this.props.token,
            materias: []
        }
    }

    static navigationOptions = {
        tabBarLabel : 'Matérias'
    }

    postMaterias = async () => {
      try{
        const token =  await AsyncStorage.getItem("@GerenciadorUniversitario:token");
        const response = await api.post('/materias/', 
        
        {
          "usuario": null, 
          "nome": "",
          "ab1": null,
          "ab2": null,
          "reav": null,
          "final": null,
          "media": null,
          "faltas": null,
          "carga_horaria": null,
          "max_faltas": null,
          "conceito": "",
          }, 
        
          {
            headers:{'Authorization' : 'JWT ' + token }
          });
      }catch (response){
        console.warn("Dados inválidos");
      }
    }

    
    getMaterias = async () => {
        try{
          const response = await api.get('/materias/');
          const {materias} = response.data;
          console.warn(JSON.stringify(materias));
          //await AsyncStorage.setItem(["token", token]);
          //console.warn("token: " + token);
          this.setState({
            materias: materias
          });
        }catch (response){
          console.warn("VISH");
        }
    }
    // deslog = async () =>{
    //     await AsyncStorage.setItem("@GerenciadorUniversitario:user", '');
    //     await AsyncStorage.setItem("@GerenciadorUniversitario:pswd", '');
    // }
    


    render(){
        return (
            <View>
            <Text>Aqui será a lista de matérias</Text>


            <Button title="GET" onPress = {this.getMaterias}/>
            <Button title="POST" onPress = {this.postMaterias}/>           

            </View>
        );
    }

}