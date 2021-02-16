import React, {Component} from 'react';
import {
    StyleSheet,
  } from 'react-native';
  const styles = StyleSheet.create({
    background:{
      backgroundColor:"black",
      width:"100%",
      height:"100%",
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginform:{
      width:"100%",
      height:"90%",
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo:{
      width: "40%",
      height: "10%",
      
    },
    datelogo:{
      width: "40%",
      height: "30%", 
      alignSelf:"center"
      , alignItems: 'center'
      
    },
    facebooklogo:{
      width: 20,
      height:20,
     
    },
    facebooklogin:{
      flexDirection:'row',
     margin:"10%",
     alignItems: 'center',
     justifyContent: 'center',
    },
    create:{
      borderWidth:20,
      backgroundColor: "#3f729b",
      width:"97%"
      ,height:80,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:25,
      alignSelf:"center"
         
    },
    textbutton:{
      color:"#FFFFFF",
    },
    textlogin:{
      color:"#3f729b",
      marginLeft:"1%"
    },

    inputextlogin:{
      margin: 5,
      height: 45,
      width:370,
      backgroundColor: "#1C1C1C",
      borderWidth: 0,
      color:"#FFFFFF",
      borderRadius:5,
      borderTopEndRadius:5,
      borderTopLeftRadius:5,
      justifyContent: 'center',
      

      
    },
    forget:{
      width:"90%",
      alignItems:"flex-end"
     
    },
    loginfacebook:{
      width:"100%",
      marginTop:"10%",
      alignItems: 'center',
    },
    full:{
      backgroundColor:"black",
      width:"100%",
      height:"100%",
    },
    tabscom:{
      backgroundColor:"black",
      width:"77%",
      height:"90%",
      
      alignSelf:"center"
    }
  ,
    centerlargtext:{
      color:"#FFFFFF",
      alignSelf:"center"
      , alignItems: 'center'
      ,fontSize:22
    },
    centerlargtextsmall:{
         color: "#484444",
      alignSelf:"center"
      ,fontSize:15,
      justifyContent: 'center',
    },
    parent: {
     
      borderColor: 'gray',
      borderRadius: 5,
      borderWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop:"10%",
      backgroundColor:"#1C1C1C",
      width:"85%",
      alignSelf:"center"
    },
    checkboxview:{

      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop:"1%",
      width:"85%",
      alignSelf:"center"
    },
    textInput: {
      height: 40,
      
      backgroundColor: "#1C1C1C",
      borderWidth: 0,
      color:"#FFFFFF",
      borderRadius:5,
      borderTopEndRadius:5,
      borderTopLeftRadius:5,
    },
    checkboxsavepassword:{

       color:'#900', 
       borderRadius: 5,
      borderWidth: 2, margin: 10
    },
    textInputmail: {
      height: 40,
      width: '90%',
      backgroundColor: "#1C1C1C",
      borderWidth: 0,
      color:"#FFFFFF",
      borderRadius:5,
      borderTopEndRadius:5,
      borderTopLeftRadius:5,
      justifyContent: 'center',
    },
    closeButton: {
      height: 16,
      width: 16,
      backgroundColor: "#1C1C1C",
      borderWidth: 0,
  
   
    },
    teButton: {
      height: 16,
      width: 75,
      color: "#484444",
      fontSize:13,
    },
    closeButtonParent: {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 5,
      marginLeft:5
   
    },
    textbutton:{
      color:"#FFFFFF",
      justifyContent: 'center',
      alignItems: 'center',

    },
    verticalline:{
      fontSize:20
      ,marginLeft:20,
      color: "#484444",
    },
    alreadysignin:{
      color: "#484444",
      justifyContent: 'center',
      alignSelf:"center",
      marginTop:"5%"
    },
    signuplogin:{
     width:"100%",
    }
  });

  export default styles;
