import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen';
import MainScreen from '../screens/MainScreen';
import Colors from '../constants/Colors';
import AddItemScreen from '../screens/AddItemScreen';


const navigationOptions = {
    headerTitle: 'To Do List',
    headerTitleStyle: { color: Colors.primary }
}

const ToDoNavigator = createStackNavigator({
    Welcome: {
        screen: WelcomeScreen,
        navigationOptions
    },
    Main: {
        screen: MainScreen,
        navigationOptions
    },
    AddItem: {
        screen: AddItemScreen,
        navigationOptions
    }
},  { headerLayoutPreset: 'center' });

export default createAppContainer(ToDoNavigator);
