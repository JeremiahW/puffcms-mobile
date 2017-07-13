/**
 * Created by wangji on 6/21/2017.
 */
import React, {Component} from 'react';
import {View, Text,TouchableHighlight} from 'react-native';
import {Styles} from '../common/style';
import * as ActionType from '../constant/action-types';
import {logOff} from "../actions/login-action";

class SideBar extends Component{
    static navigationOptions = {
        title: '导航',
    };

    constructor(props){
        super(props)
    }

    navigate(actionType){
        let {dispatch} = this.props.navigation;

        switch (actionType){
            case ActionType.LANDING:
                dispatch({type:ActionType.LANDING});
                break;
            case ActionType.CLIENT_LIST:
                dispatch({type:ActionType.CLIENT_LIST});
                break;
            case ActionType.BATCH_ORDER_LIST:
                dispatch({type:ActionType.BATCH_ORDER_LIST});
                break;
            case ActionType.LOGOUT:
                dispatch(logOff("退出"));
                break;
            default:
                dispatch({type:ActionType.LANDING});
        }
    }



    render(){
        return (
            <View style={{flex:1, flexDirection:"column"}}>

                    <TouchableHighlight onPress={()=>this.navigate(ActionType.LANDING)} style={Styles.button}  underlayColor='#99d9f4'>
                        <Text  style={Styles.buttonText}>首页</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={()=>this.navigate(ActionType.CLIENT_LIST)} style={Styles.button}  underlayColor='#99d9f4'>
                    <Text  style={Styles.buttonText}>客户列表</Text>
                    </TouchableHighlight>

                <TouchableHighlight onPress={()=>this.navigate(ActionType.BATCH_ORDER_LIST)} style={Styles.button}  underlayColor='#99d9f4'>
                    <Text  style={Styles.buttonText}>订单列表</Text>
                </TouchableHighlight>


                    <TouchableHighlight onPress={()=>this.navigate(ActionType.LOGOUT)} style={Styles.button}  underlayColor='#99d9f4'>
                        <Text  style={Styles.buttonText}>退出</Text>
                    </TouchableHighlight>

            </View>
        )
    }
}
export default SideBar;