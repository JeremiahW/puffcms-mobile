import {TabNavigator,addNavigationHelpers}from 'react-navigation';
import ClientList from '../components/client-list-component';
import Landing from '../components/landing-component';
import {Image} from 'react-native';

const TabNav = TabNavigator({
    Home:{screen:Landing},
    ClientList:{screen:ClientList},
},{
    tabBarOptions:{
        activeTintColor: '#e91e63',
        tabBarPosition: 'bottom',
    },
});

export default TabNav;