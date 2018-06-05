import React from 'react';
import { View, Text } from 'react-native';


export default class Notas extends React.Component {

    static navigationOptions = {
        tabBarLabel : 'Notas'
    }

    render(){
        return (
            <View>
            <Text>Aqui será a parte das notas</Text>
            </View>
        );
    }

}