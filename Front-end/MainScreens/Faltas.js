import React from 'react';
import { View, Text, Button } from 'react-native';


export default class Faltas extends React.Component {

    static navigationOptions = {
        tabBarLabel : 'Faltas'
    }

    render(){
        return (
            <View>
            <Text>Aqui será a parte de faltas</Text>
            </View>
        );
    }

}