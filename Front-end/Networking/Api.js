import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default class App extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      materias: []
    };
  }

  // componentDidMount(){
  //   fetch("http://127.0.0.1:8000/materias/", 
  //   {
  //     method: 'GET',
  //     headers: {
  //       credentials: 'include' ,
  //       'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkJsdWUiLCJ1c2VyX2lkIjoxMiwiZW1haWwiOiIiLCJleHAiOjE1MjgxMzQyMzR9.3Q_xqaCBvyLqBhYc-4MKUPUjuGOoGNd_l9UEzKpQlFs',

  //       'content-type': 'application/json'
  //     }
  //   }
  //   )
  //   //fetch("https://facebook.github.io/react-native/movies.json")
  //   .then((res) => res.json()).then( resJson => {
  //     this.setState({
  //       materias: resJson.movies
  //     })
  //   }).catch((error) => console.error(error))
  // }


  // async teste(){
  //   const call = await fetch("http://127.0.0.1:8000/materias/");
  //   const response = await call.json();

  //   console.warn("kk eae men");
  //   console.warn(response);


  // }

  render() {
    return (
      <View style={styles.container}>

      <Text>Kk EAE MEN</Text>

        <FlatList
          data={this.state.materias}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={(item, index) => index}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textinputs :{
    backgroundColor : '#ffffff',
    height: 30,
    width: 200,
  },


});
