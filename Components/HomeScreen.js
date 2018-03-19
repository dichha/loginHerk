import {
    Component, 
    React
} from 'react';

class HomeScreen extends Component{
    static navigationOptions = {
        title: 'Welcome',
    };
    render(){
        const {navigation} = this.props.navigation; 
        return{
            <Button 
                title="Go to Jane's profile"
                onPress={() => 
                navigate('Profile', {name: 'Jane'})
                }
            />
        };
    }
}