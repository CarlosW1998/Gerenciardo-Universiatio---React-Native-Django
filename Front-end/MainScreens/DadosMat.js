import React from 'react';
import { AsyncStorage, View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

export default class DadosMat extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            materia : [],
        }
    }
  
componentDidMount(){
    this.setState({materia : this.props.materia});
}

  faltasRest = () => {
    f = this.state.materia.max_faltas - this.state.materia.faltas;  
    if(f < 0) f = 0
    return f
  }

  render() {
    return(
        <View style={{flex: 1}}>
        <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center',}}>
        {`${this.state.materia.nome}\n`}</Text>
        <Text style={{fontSize: 12, textAlign: 'center',}}>
        {`Carga Horária: ${this.state.materia.carga_horaria}h\n`}</Text>

        <View style={{alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>


            <Text style={{ fontWeight: 'bold', fontSize: 17, marginLeft: 10}}>
            {`NOTAS:\n\nAB1: ${this.state.materia.ab1}
            \nAB2: ${this.state.materia.ab2}
            \nREAV: ${this.state.materia.reav}
            \nFINAL: ${this.state.materia.final}
            \n\n`}
            </Text>
            
            
        <Text style={{ fontWeight: 'bold', fontSize: 17, marginBottom: 45, marginRight: 10}}>
        {`FALTAS:\n\nATUAIS: ${this.state.materia.faltas}
        \nRESTANTES: ${this.faltasRest()}`}</Text>

        </View>
        <View>

        <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center',}}>
        {`\nMÉDIA: ${this.state.materia.media}`}
        {`\n\nCONCEITO: ${this.state.materia.conceito}`}    
        {`\n\nNível de Faltas: ${this.props.nvl}`}</Text>  
      </View>



        </View>
    );
  }
}

const styles = StyleSheet.create({


  button:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    height: 60,
    width: 160,

},

buttonText:{
  fontWeight: 'bold',
  color: '#FFF',
  fontSize: 20,
},

});


