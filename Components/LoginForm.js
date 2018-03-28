
import React, { Component } from 'react';
import { View, Button, Text, AsyncStorage } from 'react-native';
import { TitledInput } from './TitledInput';
import Spinner from './Spinner';
import WelcomeAdmin from './WelcomeAdmin'; 
import {firebaseApp} from './db/DbConfig';

class LoginForm extends Component {
    static navigationOptions = {
        title: 'Login', 
        headerStyle: {
            backgroundColor: 'yellow',
        },
        headerTintColor: 'black',
    };
    state = { email: '', password: '', error: '', loading: false };

    
    _signInAsync = async (email) => {
        const userTokenValue = Math.round((Math.random()*1000));
        await AsyncStorage.setItem('userToken', userTokenValue.toString());
        let userToken = await AsyncStorage.getItem('userToken');
       
        await AsyncStorage.setItem('userEmail', email);
        
        console.log("userToken after setting: " + userToken);
        //let userEmail = await AsyncStorage.getItem('userEmail');
        //console.log("User's email in loginform: " + userEmail);
        this.props.navigation.navigate('Auth');
        //this.props.navigation.navigate({routeName: 'Auth', key: 'Auth', params: {user: email}});
    };
    onLoginPress = () =>{
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then(() => { this.setState({ error: '', loading: false });
                        console.log("Logged in successfully");
                        //console.log({email});
                        this._signInAsync(email);
                       
                        })
            .catch(() => {
                //Login was not successful, let's create a new account
                firebaseApp.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => { this.setState({ error: '', loading: false }); })
                    .catch(() => {
                        this.setState({ error: 'Authentication failed.', loading: false });
                    });
            });
    }
    renderButtonOrSpinner(){
        if (this.state.loading) {
            return <Spinner />;    
        }
        return <Button onPress={this.onLoginPress} title="Log in" />;
    }
 
    render() {
        
        return (
            <View style={styles.container}>
                   
                    <TitledInput 
                        label='Email Address'
                        placeholder='you@domain.com'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <TitledInput 
                        label='Password'
                        autoCorrect={false}
                        placeholder='*******'
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                    <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                    {this.renderButtonOrSpinner()}
            </View>
        );
    }
}
const styles = {
    errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
};

export default LoginForm;
