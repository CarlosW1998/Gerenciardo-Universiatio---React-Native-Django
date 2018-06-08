import React from 'react';
import { AsyncStorage, View, Text, TouchableOpacity } from 'react-native';
import api from '../Networking/Api';
import MainScreen from './MainScreen';

export default class SituMat extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        notas: false,
        faltas: false,
        id: null,
        materia: {}
    }
  }

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
          materia: materia[0]
      });
      //alert("Teste de retorno de uma materia especifica:\n" + JSON.stringify(this.state.materia));
    }catch (response){
      alert("Erro no GET");
    }
  }

  updateMateria = async (materia) => {
    try{
      let token =  await AsyncStorage.getItem("@GerenciadorUniversitario:token");
      const auth = 'JWT ' + token;
      //console.warn(token);
      const response = await api.put('/materias/'+this.state.materia.id, materia, { headers:{'Authorization' : auth } });
      alert("Materia atualizada!");
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
            materia: m 
       });
       this.updateMateria(this.state.materia);
   }
  
  render() {
    return(
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <View >
            <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center',}}>
            {`${this.state.materia.nome}\n${this.state.materia.faltas}\n\n\n`}</Text></View>

        <TouchableOpacity
        onPress={() => this.addFalta()}>
            <View><Text>Adicionar Faltas</Text></View>
        </TouchableOpacity>

        </View>
    );
  }
}
