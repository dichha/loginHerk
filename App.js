import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import Config from 'react-native-config'; 
import firebase from 'firebase'; 
import LoginForm from './Components/LoginForm'; 

export default class App extends React.Component {
  componentWillMount(){
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyBN0_cWZog746XQiSrGUijvjbNPNewfmN4",
      authDomain: "loginherk.firebaseapp.com",
      databaseURL: "https://loginherk.firebaseio.com",
      projectId: "loginherk",
      storageBucket: "loginherk.appspot.com",
      messagingSenderId: "363493939543"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
