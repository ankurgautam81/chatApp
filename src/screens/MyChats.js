/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToastAndroid from 'react-native-simple-toast';
import store from 'react-native-simple-store';
import { TabNavigator } from 'react-navigation';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    TextInput,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    Image

} from 'react-native';
import {isEmpty} from 'lodash';
import {loginDetails} from '../actions/Login'
import { users } from '../constants/index'
import {helper}  from "../helpers/index";


class MyChats extends Component {
    state = {
        loginScreen:true,
        user: '',
        password:'',
    };
    /*componentWillMount= async() =>{
        store.get('user').then(user => {this.setState({user:user})})
        console.log('***home user i=', this.state.user)
        if (isEmpty(this.state.user)){
            this.props.navigation.navigate('Login', {screen:'Login'})
        }
    }*/
    logoutClick = async() =>{
        store.delete('user')
        store.get('user').then(user => {this.setState({user:user})})
        console.log('***home user i2=', userId)
        if (isEmpty(this.state.user)){
            this.props.navigation.navigate('Login', {screen:'Login'})
        }

    }

    render() {
        return (
            <View>
                <Image source={require('../images/bg2.jpeg')}
                       style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, ...helper.getImageDimensionsByDeviceWidth(750, 1200)}}/>

                <Text>My chats </Text>

            </View>
        );
    }
}


function mapDispatchToProps (dispatch) {
    return {
        loginDetails: async (loginParameters) => {
            return await dispatch(loginDetails(loginParameters))
        },
    }
}

export default connect(null, mapDispatchToProps)(MyChats);