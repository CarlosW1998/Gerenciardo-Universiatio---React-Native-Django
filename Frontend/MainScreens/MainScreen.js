import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default class MainScreen extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      materias: []
    };
  }



  render() {
    return (
      <View style={styles.container} logged = {this.props.logged}>
        <Text>{"KK EAE LOGADO!\n\n\n"}</Text>
        <Button title="Deslogar" onPress={this.props.onPress}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
});
