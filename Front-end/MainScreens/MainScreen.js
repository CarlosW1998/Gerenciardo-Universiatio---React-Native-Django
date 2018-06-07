import React from 'react';
import { View, Text, Button, FlatList, AsyncStorage, StyleSheet, TouchableHighlight } from 'react-native';
import api from '../Networking/Api';
import { List, ListItem } from 'react-native-elements';
import AddMateria from './AddMateria';


export default class MainScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            token : this.props.token,
            materias: [],
            msg: 'Ainda não há matérias cadastradas, para adicionar clique no botão + acima'
        }
    }

    postMaterias = async () => {
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
     }

    
    async componentDidMount(){
      this.getAllMaterias();
    }

    shouldComponentUpdate(){return true;}
    componentDidUpdate(){}

    getAllMaterias = async () => {
      try{
        const response = await api.get('/materias/');
        const materias = response.data;
        
        this.setState({
          materias: materias
        });
       // alert(JSON.stringify('pegando todas!'));
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
        { id: 17,
          usuario: 13, 
          nome: "testando",
          ab1: 7.3,
          ab2: 0.0,
          reav: 0.0,
          final: 0.0,
          media: 0.0,
          faltas: 0,
          carga_horaria: 0,
          max_faltas: 0,
          conceito: "Matriculado",}, 
        
          { headers:{'Authorization' : auth } });
        alert("Materia atualizada!");
        //this.getAllMaterias();
      }catch (response){
        alert("Erro ao adicionar!");
      }
     }
//<Button title="POST" onPress = {this.updateMateria}/>  
/*
            <Button 
            title="Adicionar Matéria" 
            color="#012B74"
            onPress = {this.postMaterias}
            />  
*/



     renderHeader = () => {
       return (
        <View style={{marginTop:25, flexDirection: 'row', alignItems:'center'}}>
        <Text>SUA LISTA DE MATÉRIAS</Text>
        <View style={{width: 70}}/>
        <Button 
        title = '+' 
        onPress = {this.postMaterias}
        color="#012B74"
        />
      </View>

       );
     }

     teste = (nome) => {
       alert("Vc clicou em: " + nome);
     }
     renderSeparator = () => {
       return(
        <View style={{ height: 1, backgroundColor: '#012B74'}}/>
       );
     }

    render(){
        return (
            <View style={styles.container}>

              <View style={{marginTop:28, flexDirection: 'row', alignItems:'center'}}>
              <Text>SUA LISTA DE MATÉRIAS</Text>
              <View style={{width: 70}}/>
              <Button 
              title = '+' 
              onPress = {this.postMaterias}
              color="#012B74"
              />
            </View>

            <View>
            <List>
              <FlatList
              data = {this.state.materias}
              renderItem = {({ item }) =>(
                <ListItem
                title={`${item.nome}`}
                />
              )}
              keyExtractor = {(item) => `${item.id}`}
              //ListHeaderComponent = {this.renderHeader}
              //ItemSeparatorComponent = {this.renderSeparator}
              />
            
            </List>
            </View>
              
              <AddMateria/>

            </View>
        );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },

  listCont:{
    alignItems: 'center',   
    flexGrow: 1,
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
