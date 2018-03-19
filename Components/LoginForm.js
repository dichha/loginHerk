
import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { TitledInput } from './TitledInput';
import Spinner from './Spinner';

import * as firebase from 'firebase';

// Initialize Firebase
// you can move this config to env variable or some place else safe.
const firebaseConfig = {
    apiKey: "AIzaSyBN0_cWZog746XQiSrGUijvjbNPNewfmN4",
    authDomain: "loginherk.firebaseapp.com",
    databaseURL: "https://loginherk.firebaseio.com",
    projectId: "loginherk",
    storageBucket: "loginherk.appspot.com",
    messagingSenderId: "363493939543"

}
export const firebaseApp = firebase.initializeApp(firebaseConfig);

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };
    onLoginPress() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then(() => { this.setState({ error: '', loading: false });
                        console.log("Logged in successfully");
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
    renderButtonOrSpinner() {
        if (this.state.loading) {
            return <Spinner />;    
        }
        return <Button onPress={this.onLoginPress.bind(this)} title="Log in" />;
    }
    render() {
        return (
            <View>
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
    }
};

export default LoginForm;

/*
class LoginForm extends Component {
    state = { email: '', password: '' };

    render() {
        return (
            <View>
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
                    <Button title="Log in" />
            </View>
        );
    }
};

export default LoginForm;
*/