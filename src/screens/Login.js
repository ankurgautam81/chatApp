/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
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

class Login extends Component {
    state = {
            loginScreen:true,
            userName: '',
            password:'',
        };

    toggleLoginRegister = (screen) => {
        if(screen == 'login'){
            this.setState({loginScreen:false})
        }
        else{
            this.setState({loginScreen:true})
        }
    }
    loginClick = async () => {
        let userId = this.refs.userId._lastNativeText
        let password = this.refs.password._lastNativeText
        console.log(this.refs.password._lastNativeText)
        if(!isEmpty(userId) && !isEmpty(password)){
            const loginParameters=  {events : "login", uname : userId, password:password}

            let loginRes = await this.props.loginDetails(loginParameters)
            console.log(loginRes)

        }else {
            console.log('id or password is missing')
        }


        /* {
        "events":"login",
            "uname":"ankur2",
            "email":"ankur.gr93@gmail",
            "password":"165guhj"
    }*/


    }

    render() {
        return (
            <View>
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
                    onPress={()=> this.loginClick()}
                    title="Login"
                    color="#841584"
                    accessibilityLabel="Login to chat"
                />

                <TouchableOpacity  style={{height: 40, alignSelf:'center',marginTop:20}}
                                   onPress={()=>this.toggleLoginRegister('login')} >
                    <Text>Register? hbhijk</Text>
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