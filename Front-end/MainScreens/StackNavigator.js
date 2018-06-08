import React from 'react';
import { AsyncStorage, View, Navigator } from 'react-native';
import api from '../Networking/Api';
import MainScreen from './MainScreen';
import { createStackNavigator } from 'react-navigation';
import SituMat from './SituMat';


export default class StackNavigator extends React.Component{
    render(){
        return <RootStack deslog={this.deslog}/>
    }
}



const RootStack = createStackNavigator(
    {
        Main: MainScreen,
        Situ: SituMat,
    },
    {
        initialRouteName: 'Main',
    }
);