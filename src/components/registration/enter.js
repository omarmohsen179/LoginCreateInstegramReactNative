import React, {Component} from 'react';
import {StyleSheet, View, Text,Image,Button,TouchableOpacity} from 'react-native';
import styles from '../../styles/styles'

export default class Inter extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <View style={styles.background}>
           <Image style={styles.logo}
               source={require('../../styles/logo.png')}
            />
            <TouchableOpacity style={styles.create} onPress={() =>this.props.navigation.navigate('create')}>
                <Text style={styles.textbutton}>Create New Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>this.props.navigation.navigate('login')}>
                <Text style={styles.textlogin}>Log in</Text>
            </TouchableOpacity>
           
        </View>
    );
  }
}