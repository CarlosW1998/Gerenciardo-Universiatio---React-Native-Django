import React from 'react';
import { AsyncStorage, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import api from '../Networking/Api';
import MainScreen from './MainScreen';
import DeleteMat from './DeleteMat';
import Notas from './Notas';

export default class SituMat extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        nome: 'Carregando',
        notas: false,
        faltas: false,
        id: null,
        materia: {},
        av: null,
        inputNota: null,
        isLoading: true,
    }
  }

  static navigationOptions = {
    title: 'DADOS DA MATÉRIA',
  };

  componentDidMount(){
    //this.setState({id : this.props.navigation.getParam('id', null)});
    this.getMateria(this.props.navigation.getParam('id', null));
  }

  getMateria = async (id) =>{
    try{
      const url = '/materias/'+id; 
      const response = await api.get(url);
      const materia = response.data;
      //alert("Teste de retorno de uma materia especifica:\n" + JSON.stringify(materia));
      this.setState({
          materia: materia[0],
          isLoading: false,
          nome: materia.nome
      });
      //alert("Teste de retorno de uma materia especifica:\n" + JSON.stringify(this.state.materia));
    }catch (response){
      alert("Erro no GET");
    }
  }

  updateMateria = async (materia) => {
    try{
      this.setState({ isLoading: true });
      let token =  await AsyncStorage.getItem("@GerenciadorUniversitario:token");
      const auth = 'JWT ' + token;
      //console.warn(token);
      const response = await api.put('/materias/'+this.state.materia.id, materia, { headers:{'Authorization' : auth } });
      //alert("Materia atualizada!");
      this.getMateria(this.state.materia.id);
    }catch (response){
      alert("Erro ao adicionar!");
    }
   }

   addFalta = () => {
       m = this.state.materia;
       f = m.faltas;
       m.faltas = Number.parseInt(f + 1);
       this.setState({
            materia: m ,
            faltas: false
       });
       this.updateMateria(this.state.materia);
   }

   setNota = (nota, tipo) => {
    m = this.state.materia;
    m[tipo] = Number.parseFloat(nota);
    this.setState({
         materia: m ,
         notas: false
    });
    this.updateMateria(this.state.materia);
  }

  calcMedia = () => {
    media = Number.parseFloat((this.state.materia.ab1 + this.state.materia.ab2)/2)

    return media;
  }
  
  render() {
    if(this.state.isLoading)
    return (
      <View style={{paddingVertical: 20, borderTopWidth: 1}}>
      <ActivityIndicator 
      animating 
      size = 'large'
      color='#000000'
      /></View>
    );

    return(
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <View >
            <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center',}}>
            {`${this.state.materia.nome}\n${this.state.materia.faltas}\n${this.state.materia.ab1}
            \n${this.state.materia.ab2}\n${this.state.materia.reav}\n${this.state.materia.final}\n\n\n`}</Text></View>

        <TouchableOpacity
        onPress={() => {this.setState({ faltas: true})}}>
            <View><Text>Adicionar Faltas</Text></View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => {this.setState({ notas: true})}}>
            <View><Text>Adicionar Notas</Text></View>
        </TouchableOpacity>

        <DeleteMat 
        visible = {this.state.faltas}
        onCancel = {() => {this.setState({ faltas: false})}}
        delete = {this.addFalta}
        txt= {'DESEJA ADICIONAR UMA FALTA NESSA MATÉRIA?'}
        //id = {this.state.longSelect}
        dNome = {this.state.materia.nome}
        greenButton = 'Adicionar'
        />

        <Notas
        visible = {this.state.notas}
        onCancel = {() => {this.setState({ notas: false})}}
        //selectedAv = {(value) => { this.teste(value) }}
        selectedAv = {(value) => { this.setState({ av: value }) }}
        setNota = {this.setNota}
        />

        </View>
    );
  }
}


