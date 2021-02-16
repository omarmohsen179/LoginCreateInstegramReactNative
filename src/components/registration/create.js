import React, { Component} from 'react';
import {StyleSheet, View, Text,ScrollView,TouchableOpacity,Image,SafeAreaView} from 'react-native';
import styles from '../../styles/styles'
import { TextInput } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TransferWithinAStationOutlined } from '@material-ui/icons';
import staticlass from '../../styles/styles'
import user from '../../classes/user';

const Tab = createMaterialTopTabNavigator();

export default class CreateAccount extends Component {
  constructor() {
    super();
    staticlass.createuser=new user;
  }
  state = {
    phmail:false,
  };

  render() {
    return (
      <View style={styles.full}>

        <View  style={styles.tabscom}>
        <Text style={styles.centerlargtext}>Enter Phone or Email</Text>
      <ScrollView>
      <Tabnavigator></Tabnavigator>
      </ScrollView>
      </View>
      
      <View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flex: 1, height: 1, backgroundColor: '#484444'}} />
      </View>
        <Text style={styles.alreadysignin}>
          Already have an Accountt?<Text style={styles.textlogin} onPress={ ()=> this.props.navigation.navigate('login') }> Sign In </Text>
        </Text> 
      </View>

      </View>
  
    );
  }


}
 class Tabnavigator extends Component {
  render() {
    return (
      <Tab.Navigator
      
      tabBarOptions={{
      
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#484444',
        style: {
          backgroundColor: 'black',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#FFFFFF',
          borderBottomWidth:2,
        },
      }} >
        
      <Tab.Screen
        name="FirstPage"
      
        component={phonenumber}
        options={{
          
          tabBarLabel: 'Phone',
        }}  />
      <Tab.Screen
        name="SecondPage"
       
        component={email}
        options={{
          tabBarLabel: 'Email',
        }} />
    </Tab.Navigator>
    );
  }
}
 class phonenumber extends Component {
  constructor() {
    super();
  }
  state = {
    phonenumber:'',
  };
  next =  ()=> {
    this.props.navigation.navigate('createc');
  };
  handleusername = (text) => {
    this.setState({phonenumber: text});
    staticlass.createuser.phonenumber=text
  };
 clear =  ()=> {
    this.setState({phonenumber: ''});
  
  };
  render() {
    
    return (
      <SafeAreaView style={styles.background}>
      <View style={styles.parent}>
      <TouchableOpacity
    style={styles.closeButtonParent}
    onPress={this.clear}>
  <Text style={styles.textbutton}><Text style={styles.textlogin}> EG +20 </Text><Text style={styles.verticalline}> | </Text>  </Text>
  
</TouchableOpacity>
         <TextInput
            style={styles.textInput}
            controlled={true}
            value={this.state.phonenumber} 
            onChangeText={this.handleusername}
            theme={{colors: {text: 'white', primary: 'transparent'}}}
            keyboardType={'numeric'}
            
          />
     

           <TouchableOpacity
          style={styles.closeButtonParent}
           onPress={this.clear}>
             <Image
             style={styles.closeButton}
             source={require('../../styles/cancel.png')}
            />
            </TouchableOpacity>

            </View>
            <TouchableOpacity style={styles.create} onPress={this.next}>
                <Text style={styles.textbutton}>Next</Text>
            </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

class email extends Component {
  constructor() {
    super();

  }
  state = {
    email:'',
  };
  handleusername = (text) => {
    this.setState({email: text});
    staticlass.createuser.email=text
  };
  next =  ()=> {
    this.props.navigation.navigate('createc');
  };
 clear =  ()=> {
    this.setState({email: ''});
  };
  render() {
    return (
      <SafeAreaView style={styles.background}>
      <View style={styles.parent}>
         <TextInput
            style={styles.textInputmail}
            controlled={true}
            value={this.state.email} 
            onChangeText={this.handleusername}
            theme={{colors: {text: 'white', primary: 'transparent'}}}
   
          />
     

          <TouchableOpacity
          style={styles.closeButtonParent}
         onPress={this.clear}>
    <Image
        style={styles.closeButton}
        source={require('../../styles/cancel.png')}
    />
</TouchableOpacity>

</View>
<TouchableOpacity style={styles.create}>
                <Text style={styles.textbutton} onPress={this.next}>Next</Text>
            </TouchableOpacity>
      </SafeAreaView>
    );
  }
}