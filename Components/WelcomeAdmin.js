import React from 'react'; 
import {View, Text, StyleSheet, Button} from 'react-native'; 
import {StackNavigator} from 'react-navigation'; 

import {firebaseApp} from './db/DbConfig';

class WelcomeAdmin extends React.Component{
    static navigationOptions = {
        title: 'WelcomeAdmin', 
        headerStyle: {
            backgroundColor: 'yellow',
        }, 
        headerTintColor: 'black',
    }; 
    
    handleLogout = async () => {
        try{
            await firebaseApp.auth().signOut();
            this.props.navigation.navigate('Home');
        }catch(e){
            console.log(e);
        }
    }

    render(){
        const {params} = this.props.navigation.state; 
        console.log(params);
        const userEmail = params ? params.user : null;
        return(
            <View style={styles.container}>
                <Text>Welcome Admin</Text>
                <Text> Hello {JSON.stringify(userEmail)}</Text>
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