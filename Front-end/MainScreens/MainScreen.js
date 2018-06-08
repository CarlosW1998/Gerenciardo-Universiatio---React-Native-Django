import React from 'react';
import { 
  View, Text, Button, FlatList, AsyncStorage, StyleSheet, 
  TouchableHighlight, ActivityIndicator, TouchableOpacity
} from 'react-native';
import api from '../Networking/Api';
import { List, ListItem } from 'react-native-elements';
import AddMateria from './AddMateria';
import DeleteMat from './DeleteMat';


export default class MainScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            token : this.props.token,
            materias: [],
            msg: 'Ainda não há matérias cadastradas, para adicionar clique no botão + acima para começar',
            modalVisible: false,
            deleteVisible: false,
            longSelect: null,
            dNome: null,
            isLoading: true,
        }
    }

    postMaterias = async (nome, carga) => {
      if(nome === '' || nome === ' ' || carga <= 0 || carga==='' || Number.parseInt(carga) === 0){
        alert("Dados Inválidos!");
      }else{
        try{
          let token =  await AsyncStorage.getItem("@GerenciadorUniversitario:token");
          const auth = 'JWT ' + token;
          const response = await api.post('/materias/',
          { usuario: 1, nome: nome,  ab1: 0.0,  ab2: 0.0,   reav: 0.0,
            final: 0.0,  media: 0.0,  faltas: 0,  carga_horaria: Number.parseInt(carga),
            max_faltas: Number.parseInt(carga*0.25),  conceito: "Matriculado",}, 
          
          { headers:{'Authorization' : auth } });
          alert("Matéria Adicionada!");
          this.getAllMaterias();
        }catch (response){
          alert("Erro ao adicionar!");
        }
      }
     }
  
    componentDidMount(){
      this.getAllMaterias();
    }

    //shouldComponentUpdate(){return true;}
    //componentDidUpdate(){}

    getAllMaterias = async () => {
      try{
        const response = await api.get('/materias/');
        const materias = response.data;      
        this.setState({ materias: materias, modalVisible: false, isLoading:false });
      }catch (response){
        alert("Erro!");
      }
    }


    getMateria = async (id) =>{
      try{
        const url = '/materias/'+id; 
        const response = await api.get(url);
        const materia = response.data;
        alert("Teste de retorno de uma materia especifica:\n" + JSON.stringify(materia));
      }catch (response){
        alert("Erro no GET");
      }
    }

    renderFooter = () =>{
      if(!this.state.isLoading)
        return null;
      return (
        <View style={{paddingVertical: 20, borderTopWidth: 1, borderTopColor: '#CED0CD', backgroundColor: '#3498db',}}>
        <ActivityIndicator 
        animating 
        size = 'large'
        color='#000000'
        /></View>
      );
    }

    renderTopo = () =>{
      return (
        <View style={{marginTop:28, flexDirection: 'row', alignItems:'center', justifyContent: 'center',
        backgroundColor: "#012B74"}}>
          <Text style={styles.title}>SUA LISTA DE MATÉRIAS</Text>
          <TouchableOpacity 
          style={[styles.button, {backgroundColor: '#0E37E8', marginRight: 20}]}
          onPress = {() => {this.setState({ modalVisible: true})}}>
          <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      );
    }
    

    deleteMateria = async (id) => {
      try{
        let token =  await AsyncStorage.getItem("@GerenciadorUniversitario:token");
        const auth = 'JWT ' + token;
        const response = await api.delete('/materias/'+id,      
        { headers:{'Authorization' : auth } });
        alert("Matéria excluída!");
        this.setState({ deleteVisible: false });
        this.getAllMaterias();
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

      }catch (response){
        alert("Erro ao adicionar!");
      }
     }

     teste = (nome) => {
       alert("Vc clicou em: " + nome);
     }

    render(){
        if(this.state.materias.length === 0 && !this.state.isLoading){
          return(
            <View style={styles.container}>
              {this.renderTopo()}
              <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center',}}>
                {`${this.state.msg}`}</Text>
              </View>

              <AddMateria 
              visible = {this.state.modalVisible}
              onCancel = {() => {this.setState({ modalVisible: false})}}
              add = {this.postMaterias}
              />

            </View>

          );
        }

        return (
            <View style={styles.container}>
            {this.renderTopo()}
            <View>
            <List>
              <FlatList
              data = {this.state.materias}
              renderItem = {({ item }) =>(
                <TouchableHighlight 
                onLongPress={() => {this.setState({ deleteVisible: true, longSelect: item.id, dNome:item.nome})}}
                onPress = {() => this.teste(item.id)}
                
                >
                <ListItem
                title={`${item.nome}`}
                />
                </TouchableHighlight>
              )}
              keyExtractor = {(item) => `${item.id}`}
              ListFooterComponent= {this.renderFooter}
              />
            
            </List>
            </View>
              
              <AddMateria 
              visible = {this.state.modalVisible}
              onCancel = {() => {this.setState({ modalVisible: false})}}
              add = {this.postMaterias}
              />

              <DeleteMat
              visible = {this.state.deleteVisible}
              onCancel = {() => {this.setState({ deleteVisible: false})}}
              delete = {this.deleteMateria}
              id = {this.state.longSelect}
              dNome = {this.state.dNome}
              />

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
    fontWeight: 'bold',
    fontSize: 22,
  },

  button:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
      width: 60,
  },

  buttonText:{
      fontWeight: 'bold',
      color: '#FFF',
      fontSize: 20,
  },
});
