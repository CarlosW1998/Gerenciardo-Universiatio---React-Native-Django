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
        let token =  await AsyncStorage.getItem("@GerenciadorUniversitario:token");
        const auth = 'JWT ' + token;
        console.warn(token);
        const response = await api.post('/materias/',
        { usuario: 0, 
          nome: "eXtreme Programming",
          ab1: 7.0,
          ab2: 7.0,
          reav: 0.0,
          final: 0.0,
          media: 7.0,
          faltas: 2,
          carga_horaria: 60,
          max_faltas: 15,
          conceito: "Aprovado",}, 
        
          { headers:{'Authorization' : auth } });
      }catch (response){
        alert("Erro ao adicionar!");
      }
     }

    
    async componentDidMount(){
      try{
        const response = await api.get('/materias/');
        const materias = response.data;
        alert(JSON.stringify(materias));
        this.setState({
          materias: materias
        });
      }catch (response){
        alert("Erro");
      }
    }


    getMateria = async (id) =>{
      try{
        //console.warn("1");
        const url = '/materias/'+id; 
        //console.warn("2");
        const response = await api.get(url);
        //console.warn("3");
        const materia = response.data;
        //console.warn("4");
        alert("Teste de retorno de uma materia especifica:\n" + JSON.stringify(materia));
      }catch (response){
        alert("Erro no GET");
      }
    }

    deleteMateria = async (id) => {
      try{
        alert(this.getMateria(15));
        let token =  await AsyncStorage.getItem("@GerenciadorUniversitario:token");
        const auth = 'JWT ' + token;
        console.warn(token);
        const response = await api.delete('/materias/'+id,      
        { headers:{'Authorization' : auth } });
        alert(this.getMateria(15));

      }catch (response){
        alert("Erro ao deletar!");
      }
     }

     updateMateria = async () => {
      try{
        let token =  await AsyncStorage.getItem("@GerenciadorUniversitario:token");
        const auth = 'JWT ' + token;
        console.warn(token);
        const response = await api.put('/materias/17',
        { id:'17',
          usuario: 13, 
          nome: "testando",
          ab1: 7.0,
          ab2: 7.0,
          reav: 8.0,
          final: 0.0,
          media: 7.0,
          faltas: 2,
          carga_horaria: 60,
          max_faltas: 15,
          conceito: "Aprovado",}, 
        
          { headers:{'Authorization' : auth } });
      }catch (response){
        alert("Erro ao adicionar!");
      }
     }


    render(){
        return (
            <View>
            <Text>Aqui será a lista de matérias</Text>

            <Button title="POST" onPress = {this.updateMateria}/>           

            </View>
        );
    }

}