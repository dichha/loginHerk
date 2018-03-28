import React from 'react'; 
import {View, Text, StyleSheet, Button, AsyncStorage} from 'react-native'; 
import {StackNavigator} from 'react-navigation'; 

import {firebaseApp} from './db/DbConfig';

class WelcomeAdmin extends React.Component{
    constructor(props){
        super(props);
        this.state = { userEmail: ''};
        this._getUserEmail();
      }
    
    static navigationOptions = {
        title: 'WelcomeAdmin', 
        headerStyle: {
            backgroundColor: 'yellow',
        }, 
        headerTintColor: 'black',
    }; 
    
    _getUserEmail = async () => {
        try{
            let email = await AsyncStorage.getItem('userEmail');
            console.log("userEmail in WelcomeAdmin: " + email);
            this.setState({userEmail: email});
            console.log("email from state: "+ this.state.userEmail);
            
        }catch(e){
            console.log(e);
        }
    }
    handleLogout = async () => {
        try{
            await firebaseApp.auth().signOut();
            await AsyncStorage.clear(); 
            let userToken = await AsyncStorage.getItem('userToken');
            console.log("userToken after clearing: " + userToken);
            let userEmail = await AsyncStorage.getItem('userEmail');
            console.log("userEmail after clearing: " + userEmail);
            
            this.props.navigation.navigate('App');
        }catch(e){
            console.log(e);
        }
    }
    

    

    render(){
        /*
        const {params} = this.props.navigation.state; 
        console.log("props of navbar? " + this.props);
        console.log('po')
        console.log("userEmail in WelcomAdmin.js: " + params);
        const userEmail = params ? params.user : null;
        */ 
        return(
            <View style={styles.container}>
                <Text>Welcome Admin</Text>
                
                <Text> Hello {this.state.userEmail}</Text>
                {console.log("userEmail in render: " + this.state.userEmail)}

                <Button onPress={this.handleLogout} title='Logout'/>
            </View>
        )

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
});

export default WelcomeAdmin; 