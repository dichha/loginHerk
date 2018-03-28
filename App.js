import React, {Component} from 'react';
import { StyleSheet, Button, Text, View, AsyncStorage, ActivityIndicator, StatusBar } from 'react-native';
import * as firebase from 'firebase';  
import { StackNavigator, TabNavigator, TabBarBottom, SwitchNavigator} from 'react-navigation';
import { Ionicons } from "@expo/vector-icons";

import  Login  from './Components/LoginForm';  
import WelcomeAdmin from './Components/WelcomeAdmin';

class AuthLoadingScreen extends React.Component{
  constructor(props){
    super(props);
    this._bootstrapAsync();
  }
  // Fetch the token from storage then navigate to appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log(AsyncStorage.getAllKeys());
     // This will switch to the App screen or Auth screen and this loading screen will be unmounted and thrown away

    console.log("userToken: " + userToken);
    this.props.navigation.navigate(userToken? 'Auth': 'App');
  }
  // render any loading content that you like here
  render(){
    return (
      <View style={styles.container}>
        <ActivityIndicator/>
        <StatusBar barStyle="default"/>
      </View>
    );
  }
};

class Home extends Component{
  static navigationOptions = {
    title: 'Home', 
    headerStyle: {
        backgroundColor: 'yellow',
    }, 
      headerTintColor: 'black',
  };

  render(){
    return(
      <View style={styles.container}>
        <Text>Home!</Text>
        <Button
          title = "Go to Login"
          onPress = {() => this.props.navigation.navigate('Login')}
        />
        {/*
         <Button
          title = "Go to WelcomeAdmin"
          onPress = {() => this.props.navigation.navigate('WelcomeAdmin')}
        />
        */}
      </View>
    );
  }
}
const AppStack = StackNavigator({Home: Home,Login: Login});
const AuthStack = StackNavigator({WelcomeAdmin: WelcomeAdmin});

export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen, 
    App: AppStack, 
    Auth: AuthStack,
  }, 
  {
    initialRouteName: 'AuthLoading',
  }
);

/*
const RootStack = StackNavigator(
  {
    Home: {screen: Home}, 
    Login: {screen: Login}, 
    WelcomeAdmin: {screen: WelcomeAdmin},
  }
); 

export default class App extends React.Component{
  render(){
    return <RootStack/>
  }
}
*/
/*
const HomeStack = StackNavigator({
  Home: {screen: Home}, 
  Login: {screen: Login},

});

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
/*
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
        
        //}else if(routeName === 'Settings'){
        //  iconName = `ios-options${focused ? '': '-outline'}`;
        //}
        
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
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
