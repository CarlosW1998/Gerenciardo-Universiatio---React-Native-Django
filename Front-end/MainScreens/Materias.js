import React from 'react';
import { View, Text, Button } from 'react-native';


export default class Materias extends React.Component {

    static navigationOptions = {
        tabBarLabel : 'Matérias'
    }

    render(){
        return (
            <View>
            <Text>Aqui será a lista de matérias</Text>
            </View>
        );
    }

}