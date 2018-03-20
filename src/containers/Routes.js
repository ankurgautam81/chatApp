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
import routes from '../Route/index'
const userId = '';
/*const App = StackNavigator(routes);*/
const RootStack = StackNavigator(routes, {initialRouteName: 'Home',}
);

 class Routes extends Component {


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
                /*{
                    !isEmpty(userId) ? <View>
                        <Text>get user id</Text>
                    </View>
                    :<LoginPage/>
                }*/
                <RootStack/>
            </View>
        );
    }
}
export default Routes;


