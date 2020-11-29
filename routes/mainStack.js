import {createStackNavigator,NavigationStackOptions} from 'react-navigation-stack';
import { createAppContainer,NavigationComponent} from 'react-navigation';
import main from '../screens/main';
import result from '../screens/result'

const screens={
    main: {
        screen: main,
        navigationOptions: {title: "Discount Calculator",headerStyle: {backgroundColor: "#ff781f"}}
    },
    result: {
        screen: result,
        navigationOptions: {title: "Discount Calculator",headerStyle: {backgroundColor: "#ff781f"}}
    }
}
const mainStack= createStackNavigator(screens);

export default createAppContainer(mainStack);
