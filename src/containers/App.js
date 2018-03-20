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
  View
} from 'react-native';
import { DrawerNavigator, NavigationActions, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import Routes from './Routes'
import routes from '../Route/index'
const RootStack = StackNavigator(routes, {initialRouteName: 'Home',})

export default class App extends Component {
  render() {
    return (
        <Provider store={createStore(reducers)}>
          <RootStack />
        </Provider>
    );
  }
}

