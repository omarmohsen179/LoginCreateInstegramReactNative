import React, {Component} from 'react';
import {StyleSheet, View, Text,Button,Image,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from '../../styles/styles'
import staticlass from '../../styles/styles'
export default class Login extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <View style={styles.full}>
           
            <View style={styles.loginform}>
            <Image style={styles.logo}
               source={require('../../styles/logo.png')}
            />
           <TextInput placeholderTextColor = "#484444" theme={{colors: {text: 'white', primary: 'transparent'}}} style={styles.inputextlogin}  placeholder="Phone number, username or email"/>
           
           <TextInput placeholderTextColor = "#484444" 
           theme={{colors: {text: 'white', primary: 'transparent'}}} style={styles.inputextlogin} placeholder="password"
          secureTextEntry={true}
     
          />
      
           <TouchableOpacity style={styles.forget}>
                <Text style={{ color:"#3f729b"}}>Forgot password?</Text>
            </TouchableOpacity>
            
           <TouchableOpacity style={styles.create}>
                <Text style={styles.textbutton}>Log in</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.facebooklogin}>
            <Image style={styles.facebooklogo}
               source={require('../../styles/face.png')}
            />
            <Text style={styles.textlogin} >Log in with Facebook </Text>   
            </TouchableOpacity>


            <View>
            <Text style={styles.textbutton}>OR</Text>
            </View>
        </View>



         <View style={styles.signuplogin}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flex: 1, height: 1, backgroundColor: '#484444'}} />
            </View>
            <Text style={styles.alreadysignin}>
            Dont have an Account? <Text style={styles.textlogin} onPress={ ()=> this.props.navigation.navigate('create') }> Sign up </Text>
        </Text>
              
        </View>
           
        </View>
    );
  }
}