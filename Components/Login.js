import React, {Component} from 'react'; 
import { StyleSheet, View, Text} from 'react-native'; 
import LoginForm from './LoginForm';


class Login extends Component{
    render(){
    return(
        <View style={styles.container}>
        <LoginForm/>
        </View>
    );
    }
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default Login; 
