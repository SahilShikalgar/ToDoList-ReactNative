import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen';
import MainScreen from '../screens/MainScreen';

const ToDoNavigator = createStackNavigator({
    Welcome: {
        screen: WelcomeScreen
    },
    Main: {
        screen: MainScreen
    }
});

export default createAppContainer(ToDoNavigator);
