import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Materias from './Materias';
import Notas from './Notas';
import Faltas from './Faltas';

var msNav = TabNavigator({
  Materias: {screen : Materias},
  Notas: {screen: Notas},
  Faltas: {screen: Faltas}
});

msNav.navigationOptions = { title : 'Main Screen'}

export default msNav;

// export default class MainScreen extends React.Component {

//   constructor (props){
//     super(props);
//     this.state = {
//       materias: []
//     };
//   }



//   render() {
//     return (
//       <View style={styles.container} logged = {this.props.logged}>
//         <Text>{"Aqui será a tela principal (em breve... eu espero)\n\n\n"}</Text>
//         <Button title="Deslogar" onPress={this.props.onPress}/>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#3498db',
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
    
// });
