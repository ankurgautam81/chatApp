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
    AsyncStorage,
    TextInput,
    Button,
    TouchableOpacity,
    TouchableHighlight

} from 'react-native';
import {isEmpty} from 'lodash';

export default class Login extends Component {
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

    render() {
        return (
            <View>
            {
                this.state.loginScreen ? <View>
                <Text>USERNAME</Text>
                <TextInput
                    style={{height: 40}}
                />
                <Text>PASSWORD</Text>
                <TextInput
                    style={{height: 40}}
                />
                    <TouchableOpacity>
                <Button
                    onPress={()=> this.toggleLoginRegister('login')}
                    title="Login"
                    color="#841584"
                    accessibilityLabel="Login to chat"
                />
                    </TouchableOpacity>
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

