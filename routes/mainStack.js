import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer,NavigationRoute} from 'react-navigation';
import main from '../screens/main';
import result from '../screens/result'

const screens={
    main: {
        screen: main
    },
    result: {
        screen: result
    }
}
const mainStack= createStackNavigator(screens);

export default createAppContainer(mainStack);
