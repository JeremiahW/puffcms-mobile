

import React, {Component} from 'react';
import {View, Text,TouchableHighlight, ListView,TextInput, RefreshControl} from 'react-native';
import {logOff, clientList} from "../actions/login-action";
import * as ActionType from "../constant/action-types";
import { connect } from 'react-redux';
import {Styles} from '../common/style';

class ClientList extends Component {
    static navigationOptions = {
        title: '我是客户列表页面',
    };
    constructor(props){
        super(props);

        const ds = new ListView.DataSource({rowHasChanged:(r1, r2)=> r1 !== r2});
        this.state = {
            dataSource:ds.cloneWithRows(this.props.clients),
            page:1,
            pageSize:3,
            records:[],
            refreshing:false,
            search_name:"",
        }

    }
    componentDidMount(){
        console.log("ClientList componentDidMount");
        //console.log(this.props.clients);
        this.props.navigation.dispatch(clientList(this.state.page, this.state.pageSize,this.state.search_name ));
    }

     componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps',nextProps);
       // console.log(nextProps.clients);
         //onst newData=[1,2,3];
         //const data = [...this.state.data, newData];
        if (nextProps.clients !== this.props.clients && nextProps.clients.length > 0) {

            let newClients;
            if(this.state.page > 1 ) {
                newClients = [...this.state.records, ...nextProps.clients];
                console.log("this.props.clients:" + this.props.clients.length + ", nextProps.clients:"+ nextProps.clients.length);
                console.log("newClients:" + newClients.length);
            }
            else{
                newClients = nextProps.clients
                console.log("newClients page equals to 1:" + newClients.length);
            }

            this.setState({records:newClients, refreshing:false}, function () {
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(this.state.records),
                });
            });


        }
    }
    logOff(){
        let {dispatch} = this.props.navigation;
        dispatch(logOff("退出"));
    }
    handleChanged(value, property){
        switch (property){
            case "search_name":
                this.setState({search_name:value, page:1}, function () {
                    this.props.navigation.dispatch(clientList(this.state.page, this.state.pageSize, this.state.search_name));
                });
                break;
        }
    }

    onRefresh(){
        this.setState({refreshing:true, page:1}, function () {
            this.props.navigation.dispatch(clientList(this.state.page, this.state.pageSize, this.state.search_name));
        })
    }

    onEndReached(){
        let page = this.state.page + 1;
        this.setState({"page":page}, function () {
            console.log("onEndReached:" + this.state.page);
            this.props.navigation.dispatch(clientList(this.state.page, this.state.pageSize, this.state.search_name));
        });
    }
    renderSeparator(sectionId,rowId){
        return(
            <View
                style={Styles.rowSeparator}
                key={sectionId+rowId}></View>
        );
    }
    onPressButton(rowData){
        console.log("row is clicked");
        this.props.navigation.dispatch({type:ActionType.CLIENT_DETAILS, clientDetails:rowData})
    }

    renderRow(rowData){
        if(rowData === null){
            return (<View><Text>No Data Available</Text></View>);
        }

        return(
        <TouchableHighlight  underlayColor = '#008b8b' onPress = {()=>this.onPressButton(rowData)}>
            <View style={Styles.rowItem}>
                <View style={Styles.rowInsideItem}>
                    <Text>姓名:{rowData.Name}</Text>
                    <Text>性别:{rowData.Gender}</Text>
                    <Text>联系电话:{rowData.Phone}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text>余额:{rowData.PrepaidBalance}</Text>
                    <Text>总消费:{rowData.Total}</Text>
                    <Text>上次购物日期:{rowData.LastShoppedDate}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text>送货地址{rowData.DeliveryAddress}</Text>
                </View>
            </View>
        </TouchableHighlight>
        )
    }

    render(){
        return (
            <View style={{flex:1, flexDirection:"column"}}>
                <TextInput style={Styles.loginInput}  onChangeText={(text)=>this.handleChanged(text, "search_name")} underlineColorAndroid="transparent"  placeholder="请输入查询条件" />
                <ListView dataSource={this.state.dataSource}
                          pageSize = {this.state.pageSize}
                          renderRow={(rowData) => this.renderRow(rowData)}
                          enableEmptySections={true}
                          onEndReached ={()=>this.onEndReached()}
                          renderSeparator = {(sectionId,rowId)=>this.renderSeparator(sectionId,rowId)}
                          onEndReachedThreshold={10}
                          refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={()=>this.onRefresh()}/>}/>
                <TouchableHighlight onPress={()=>this.logOff()} style={Styles.button}  underlayColor='#99d9f4'>
                    <Text style={Styles.buttonText}>退出登录</Text>
                </TouchableHighlight>

            </View>
        )
    }
}

const mapStateToProps = state => ({
    clients: state.client,
});

export default connect(mapStateToProps)(ClientList);
