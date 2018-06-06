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
        // let token =  await AsyncStorage.getItem("@GerenciadorUniversitario:token");
        // //console.warn("token recuperado: " + token);
        // try{
        //     fetch('http://192.168.0.105:8000/materias/', {
        //         method: 'POST',
        //         headers: {
        //             Authorization: token,
        //         },
        //         body: JSON.stringify({
        //             "usuario": null, 
        //             "nome": "",
        //             "ab1": null,
        //             "ab2": null,
        //             "reav": null,
        //             "final": null,
        //             "media": null,
        //             "faltas": null,
        //             "carga_horaria": null,
        //             "max_faltas": null,
        //             "conceito": "",
        //         }),
        //         });
        // }catch(err){
        //     console.warn("erro ao adicionar");
        // }
        /*try{
          const response = await api.post('/materias/',{
            "token" : this.props.token,
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
            }
            

            
        });
          console.warn("2");
          const {token} = response.data;
          this.setState({
            token: token
          });
          console.warn("3");
          //await AsyncStorage.setItem(["@GerenciadorUniversitario:token", token]);
          //console.warn("token: " + token);
          this.setState({
            isLogged: true
          });
          console.warn("4");
        }catch (response){
          console.warn("Erro ao adicionar");
        }*/
      }

    
    getMaterias = async () => {
        try{
          const response = await api.get('/materias/');
          const {materias} = response.data;
          console.warn(materias);
          //await AsyncStorage.setItem(["token", token]);
          //console.warn("token: " + token);
          this.setState({
            materias: materias
          });
        }catch (response){
          console.warn("VISH");
        }
    }
    


    render(){
        return (
            <View>
            <Text>Aqui será a lista de matérias</Text>


            <Button title="GET" onPress = {this.getMaterias}/>             

            </View>
        );
    }

}