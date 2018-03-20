/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToastAndroid from 'react-native-simple-toast';

import store from 'react-native-simple-store';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    TextInput,
    Button,
    TouchableOpacity,
    TouchableHighlight

} from 'react-native';
import {isEmpty} from 'lodash';
import {loginDetails} from '../actions/Login'
import { users } from '../constants/index'

class Login extends Component {

    state = {
            loginScreen:true,
            user: '',
            password:'',
        };
    componentWillMount= async() =>{
        store.get('user').then(user => {this.setState({user:user})})

        console.log('****login****',this.state.user)
        if (!isEmpty(this.state.user)){
            this.props.navigation.navigate('Home', {screen:'Home'})
        }
    }

    toggleLoginRegister = (screen) => {
        if(screen == 'login'){
            this.setState({loginScreen:false})
        }
        else{
            this.setState({loginScreen:true})
        }
    }
    loginClick = async(navigate) => {
        let userId = this.refs.userId._lastNativeText
        let password = this.refs.password._lastNativeText
        store.get('user').then(user => {this.setState({user:user})})
        console.log('*****login***',this.state.user)

        if(!isEmpty(userId) && !isEmpty(password)){
            /*this is important line for apiCall
            const loginParameters=  {events : "login", uname : userId, password:password}
            let loginRes = await this.props.loginDetails(loginParameters)*/

            if(userId === users.userName && password === users.password){
                store.save('user',{id:users.uId})
              //  store.get('user').then(user => {this.setState({user:user})})
                store.get('user').then(user => {console.log(user)})
                console.log('*****',this.state.user)

                if(!isEmpty(this.state.user)){
                    ToastAndroid.show('Login Successfully', ToastAndroid.SHORT);
                    navigate('Home', {screen:'Home'})
                }else {
                    ToastAndroid.show('Login Failed', ToastAndroid.SHORT);
                }

            }else {
                ToastAndroid.show('Username or password is wrong !', ToastAndroid.SHORT);
            }
        }else {
            ToastAndroid.show('Username or password is missing !', ToastAndroid.SHORT);
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{padding:20}}>
            {
                this.state.loginScreen ? <View>
                <Text>USERNAME</Text>
                <TextInput
                    ref="userId"
                    style={{height: 40}}
                />
                <Text>PASSWORD</Text>
                <TextInput
                    ref="password"
                    style={{height: 40}}
                />

                <Button
                    onPress={()=> this.loginClick(navigate)}
                    title="Login"
                    color="#841584"
                    accessibilityLabel="Login to chat"
                />

                <TouchableOpacity  style={{height: 40, alignSelf:'center',marginTop:20}}
                                   onPress={()=>this.toggleLoginRegister('login')} >
                    <Text>Register?</Text>
                </TouchableOpacity>
            </View>
                :<View>
                    <Text>register</Text>
                    <TouchableOpacity  style={{height: 40, alignSelf:'center',marginTop:20}}
                                           onPress={()=>this.toggleLoginRegister('register')} >
                            <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            }
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

export default connect(null, mapDispatchToProps)(Login);