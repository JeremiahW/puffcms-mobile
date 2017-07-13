/**
 * Created by wangji on 6/23/2017.
 */
import React, {Component} from 'react';
import {View, Text,TouchableHighlight} from 'react-native';
import {Styles} from '../common/style';

export default class BatchOrderList extends Component{
    static navigationOptions = {
        title: '订单列表',
    };
    constructor(props){
        super(props)
    }
    render(){
        return (<View>
            <Text>我是订单列表</Text>
        </View>)
    }
}