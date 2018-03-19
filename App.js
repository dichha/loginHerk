import React, {Component} from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import * as firebase from 'firebase';  
import { StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import { Ionicons } from "@expo/vector-icons";

import  Login  from './Components/Login';  
class Home extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Home!</Text>
        <Button
          title = "Go to Login"
          onPress = {() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}

const HomeStack = StackNavigator({
  Home: {screen: Home}, 
  Login: {screen: Login},
});
/*
export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <LoginForm></LoginForm>
      </View>
    );
  }
}*/
export default TabNavigator(
  {
    Home: {screen: HomeStack},
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state; 
        let iconName; 
        if(routeName === 'Home'){
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        }
        /*
        }else if(routeName === 'Settings'){
          iconName = `ios-options${focused ? '': '-outline'}`;
        }
        */
        // You can return any component that you like here. We usually use an icon component from react-native-vector-icons
        
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }), 
    tabBarOptions: {
      activeTintColor: 'tomato', 
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom, 
    tabBarPosition: 'bottom', 
    animationEnabled: false, 
    swipeEnable: false,

  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
