import React, {Component} from 'react';
import {StyleSheet, View, Text,Image,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login'
import CreateAccount from './create'
import Inter from './enter'
import Createcontinue from './createcontinue'
const Mainstack = createStackNavigator();
export default class Registiration extends Component {
  constructor() {
    super();
    console.log('Constructor Called.');
  }

  render() {
    return (
      
        <Mainstack.Navigator>
            <Mainstack.Screen 
              options={{ headerShown: false }}  
              name={'enter'} component={Inter} />
          <Mainstack.Screen 
               options={{ headerShown: false }}  name={'login'} component={Login} />
          <Mainstack.Screen 
               screenOptions={{headerLeft: () => <ActionBarImage />}}
               options={{
                 title: '',
                 headerLeft: () => (
                   <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>
                     <Image
                     style={{width: 20, height: 20,margin:20}}
                     source={require('../../styles/left.png')}
                    
                     />
           </TouchableOpacity>
                 ),
                 headerStyle: {
                   backgroundColor: 'black',
             
                 },  
                 }}
                 name={'createc'} component={Createcontinue} />
          <Mainstack.Screen 
            screenOptions={{headerLeft: () => <ActionBarImage />}}
            options={{
              title: '',
              headerLeft: () => (
                <TouchableOpacity  onPress={() => this.props.navigation.goBack()}>
                  <Image
                  style={{width: 20, height: 20,margin:20}}
                  source={require('../../styles/left.png')}
                 
                  />
        </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: 'black',
          
              },  
              }}
          name={'create'} component={CreateAccount} />
        </Mainstack.Navigator>
 
    );
  }
}








const ActionBarImage = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
      source={require('../../styles/left.png')} 
        style={{
          width: 100,
          height: 100,
          borderRadius: 40 / 2,
          marginLeft: 15,
        }}
      />
    </View>
  );
};