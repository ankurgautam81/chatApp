/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    AsyncStorage
} from 'react-native';
import { DrawerNavigator, NavigationActions, StackNavigator } from 'react-navigation';
import {isEmpty} from 'lodash';
import LoginPage from '../screens/Login'
const userId = '';
import Login from '../screens/Login'

/*const App = StackNavigator({
    Login: { screen: Login },
});*/
export default class Routes extends Component {


    componentDidMount = async ()=>{
        const value = await AsyncStorage.getItem('userId');
        if (value !== null){
            // We have data!!
            console.log(value);
        }
    }
    render() {
        return (
            <View>
                {
                    !isEmpty(userId) ? <View>
                        <Text>get user id</Text>
                    </View>
                    :<LoginPage/>
                }
            </View>
        );
    }
}

