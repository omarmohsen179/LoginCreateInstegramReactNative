import React, {Component} from 'react';
import {StyleSheet, View, Text,SafeAreaView,Button,Image,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from '../../styles/styles'
import staticlass from '../../styles/styles'
import DatePicker from 'react-native-datepicker';
import CheckBox from '@react-native-community/checkbox'
import Checkbox from 'react-native-custom-checkbox';
export default class Createcontinue extends Component {
    constructor() {
        super();
      }
      state = {
        username:"",
        password:"",
        datetext:"",
        date:"",
        n:true,
        p:false,
        d:false,
        usernamebutton:true,
        passwordbutton:true,
        savepassword:false,
      };
      
 
      next =  ()=> {
       
        this.setState({n:false});
        this.setState({p:true});
      };
      nextpassword =  ()=> {
        this.setState({d:true});
        this.setState({n:false});
        this.setState({p:false});
      };
      nextdate=  ()=> {l
        this.setState({d:true});
        this.setState({n:false});
        this.setState({p:false});
      };
      handleusername = (text) => {
        if(text.length>0){
          this.setState({usernamebutton: false});
        }
        this.setState({username: text});
        staticlass.createuser.name=text
      };
      handlepassword= (text) => {
        if(text.length>5){
          this.setState({passwordbutton: false});
        }
        this.setState({password: text});
        staticlass.createuser.password=text
      };
      handledate= (text) => {
        var today = new Date();
        var age=text.substring(6,10);
        console.log(age)
        age=Number(today.getFullYear())-Number(age)
        this.setState({date:text});
        this.setState({datetext:age+" years old"});
        staticlass.createuser.dateofbirth=text
      };
     clear =  ()=> {
        this.setState({name: ''});
      
      };
      render() {
   
        return (
            <View style={styles.full}>
  < SafeAreaView  style={styles.tabscom}>
        
<this.inputsfile></this.inputsfile>
</ SafeAreaView>
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


      inputsfile =  ()=> {
          if(this.state.n){
        return (

  
        <View>
        <Text style={styles.centerlargtext}>Add Your Name</Text>
        <Text style={styles.centerlargtextsmall}>Add your name so your friend can find you</Text>
        <View style={styles.parent}>
           <TextInput
           placeholderTextColor = "#484444" 
           placeholder="Full Name"
              style={styles.textInput}
              controlled={true}
              textColor="white" 
              value={this.state.name} 
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
              <TouchableOpacity style={styles.create} onPress={this.next}    disabled={this.state.usernamebutton}>
                  <Text style={styles.textbutton}>Next</Text>
              </TouchableOpacity>
              </View> 
    


        )
    }
    if(this.state.p){
        return(
               <View>
        <Text style={styles.centerlargtext}>Create Password</Text>
        <Text style={styles.centerlargtextsmall}>we can remember the bassword so you won't</Text> 
        <Text style={styles.centerlargtextsmall}>need to enter it on your iCloud device</Text>
        <View style={styles.parent}>
           <TextInput
           placeholderTextColor = "#484444" 
           placeholder="password"
              style={styles.textInput}
              controlled={true}
              value={this.state.password} 
              onChangeText={this. handlepassword}
              theme={{colors: {text: 'white', primary: 'transparent'}}}
              secureTextEntry={true}
            />
       


             <TouchableOpacity
            style={styles.closeButtonParent}
             onPress={this.clear}
           >
               <Image
               style={styles.closeButton}
               source={require('../../styles/cancel.png')}
              />
              </TouchableOpacity>

              </View>
              <View style={styles.checkboxview}>
        <CheckBox
          size={30}
          value={this.state.savepassword}
          style={styles.checkboxsavepassword}
        />
        <Checkbox
  checked={true}
  style={{backgroundColor: '#f2f2f2', color:'#900', borderRadius: 5}}
  onChange={(name, checked) => _myFunction(name, checked)}/>
        <Text style={styles.textlogin}>save password</Text>
        </View>
              <TouchableOpacity style={styles.create} onPress={this.nextpassword}
                disabled={this.state.passwordbutton}
              >

                  <Text style={styles.textbutton}>Next</Text>
              </TouchableOpacity>
              </View> 
        )
    }
    if(this.state.d){
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      return (
      <View>
           <Image style={styles.datelogo}
               source={require('../../styles/birth.png')}
            />
      <Text style={styles.centerlargtext}>Add Your BirthDay</Text>
      <Text style={styles.centerlargtextsmall}>this won't be part of your public profile</Text> 
      <Text style={styles.centerlargtextsmall}>why do i need to provide my birthday?</Text>
      <View style={styles.parent}>
         <DatePicker
         style={{   color:"#FFFFFF",}} 
            customStyles={{
              dateIcon: {
                width:0,
                height:0
              },
              dateInput: {
                  width:"100%",
                  borderWidth:0,
                  colors:"white"
              }
            }}
            maxDate="2016-06-01"
            mode="date"
            format="DD-MM-YYYY"
            date={this.state.date}
            onDateChange={this.handledate}

          />
     

           <TouchableOpacity
          style={styles.closeButtonParent}>
             <Text
             style={styles.teButton}>
               {this.state.datetext}
             </Text>
            </TouchableOpacity>

            </View>
            <TouchableOpacity style={styles.create} onPress={this.nextdate}
             disabled={this.state.passwordbutton}
            >
                <Text style={styles.textbutton}>Next</Text>
            </TouchableOpacity>
            </View> 
            )

    }
    
  
  
  }


    
}