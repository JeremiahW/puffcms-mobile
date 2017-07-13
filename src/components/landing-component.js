/**
 * Created by wangji on 6/12/2017.
 */
import React, {Component} from 'react';
import {View, Text,StyleSheet,Button} from 'react-native';
import {doLogin, logOff, clientList} from "../actions/login-action";


export default class Landing extends Component{
    static navigationOptions = {
        title: '欢迎使用本系统',
    };
    constructor(props){
        super(props);
    }

    logOff(){
        console.log(this.props);
        let {dispatch} = this.props.navigation;
        dispatch(logOff("退出"));
    }

    toggle(){
        this.props.navigation.navigate('DrawerOpen'); // open drawer
     //   this.props.navigation.navigate('DrawerClose'); // close drawer
    }

    componentDidMount(){
        this.props.navigation.dispatch(clientList());
    }


    render(){
        return (
            <View>
                <Button onPress={()=>this.logOff()} title="退出" />
                <Button title="打开/关闭" onPress={()=>this.toggle()}/>
            </View>
        )
    }
}

