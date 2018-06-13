import React from 'react';
import { AsyncStorage, View, Navigator, Button } from 'react-native';
import api from '../Networking/Api';
import MainScreen from './MainScreen';
import { createStackNavigator } from 'react-navigation';
import SituMat from './SituMat';
import Login from '../LoginScreen/Login';


export default class StackNavigator extends React.Component{


    render(){
        return ( 
            <RootStack/>
        );
    }
}



const RootStack = createStackNavigator(
    {
        Login: Login,
        Main: MainScreen,
        Situ: SituMat,
    },
    {
        initialRouteName: 'Main', //
    }
);