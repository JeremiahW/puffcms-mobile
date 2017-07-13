/**
 * Created by wangji on 6/15/2017.
 */

import {DrawerNavigator,addNavigationHelpers}from 'react-navigation';
import ClientList from '../components/client-list-component';
import Landing from '../components/landing-component';
import BatchOrderList from '../components/batch-order-list-component';
import ClientDetails from '../components/client-details-component';
import TabNav from "../containers/tab-navigator";
import SideBar from '../common/sidebar-component';


const DrawerNav = DrawerNavigator({
    ClientList:{screen:ClientList},
    Landing:{screen:Landing},
    BatchOrderList:{screen:BatchOrderList},
    ClientDetails:{screen:ClientDetails},

},{
    drawerWidth: 200, // 抽屉宽
    drawerPosition: 'left', // 抽屉在左边还是右边
    contentComponent: SideBar,  // 自定义抽屉组件

    contentOptions: {
       // initialRouteName: Landing, // 默认页面组件
        activeTintColor: 'white',  // 选中文字颜色
        activeBackgroundColor: '#ff8500', // 选中背景颜色
        inactiveTintColor: '#666',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {  // 样式

        }
    }
});

export default DrawerNav;