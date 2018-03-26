import React, {Component} from 'react'; 
import { StyleSheet, View, Text} from 'react-native'; 
import LoginForm from './LoginForm';


class Login extends Component{
    static navigationOptions = {
        title: 'Login', 
        headerStyle: {
            backgroundColor: 'yellow',
        },
        headerTintColor: 'black',
    };
    
    printNav = () =>{
        console.log(this.props.navigation.state.routeName);
    }
    render(){
        return(
            <View style={styles.container}>
            {this.printNav()}
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
