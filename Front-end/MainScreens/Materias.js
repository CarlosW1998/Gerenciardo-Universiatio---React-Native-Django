import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import api from '../Networking/Api';


export default class Materias extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            token : this.props.token
        }
    }

    static navigationOptions = {
        tabBarLabel : 'Matérias'
    }

    getMaterias = async () => {
        try{
          const response = await api.get('/materias/', {
            token: "JWT " + this.state.token
          });
          const {materias} = response.data;
          console.warn("materias");
          //await AsyncStorage.setItem(["token", token]);
          //console.warn("token: " + token);
          this.setState({
            isLogged: true
          });
        }catch (response){
          console.warn("VISH");
        }
      }


    render(){
        return (
            <View>
            <Text>Aqui será a lista de matérias</Text>


            <FlatList
                data={this.state.dataSource}
                renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                keyExtractor={(item, index) => index}
            />
             

            </View>
        );
    }

}