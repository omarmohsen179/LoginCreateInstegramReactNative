import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registiration from './src/components/registration/registration'
const Mainstack = createStackNavigator();
export default class App extends Component {
  constructor() {
    super();
    console.log('Constructor Called.');
  }

  render() {
    return (
        <NavigationContainer>
        <Mainstack.Navigator mode="modal" headerMode="none" >
        <Mainstack.Screen name={'Registiration'} component={Registiration} />
    </Mainstack.Navigator>
    </NavigationContainer>
  );
  }
}