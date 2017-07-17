/**
 * Created by wangji on 7/3/2017.
 */
import React, {Component} from 'react';
import {View, Text,TextInput,TouchableHighlight, Picker} from 'react-native';
import * as ActionType from "../constant/action-types";

import {getLevels, saveMember} from '../actions/member-action';

import { connect } from 'react-redux';
import {Styles} from '../common/style';

class ClientDetails extends Component{
    static navigationOptions = {
        title: '客户详情',
    };

    constructor(props){
        super(props);
        this.state ={
            id: "",
            name:"",
            age:"",
            phone:"",
            gender:"",
            deliverAddress:"",
            wechatId:"",
            qq:'',
            lastShopDate:"",
            total:"",
            prepaidBalance:"",
            levelId:"",
            level:"",
            levels:[],
        }
        this.initLevels = this.initLevels.bind(this);
    }

    componentDidMount(){
        console.log("componentDidMount ClientDetails");
         console.log(this.props.client);
        let newState = {
            id:this.props.client.Id,
            name:this.props.client.Name,
            age:this.props.client.Age,
            phone:this.props.client.Phone,
            gender:this.props.client.Gender,
            deliverAddress:this.props.client.DeliveryAddress,
            wechatId:this.props.client.WeChatID,
            qq:this.props.client.QQ,
            lastShopDate:this.props.client.LastShoppedDate,
            total:this.props.client.Total,
            prepaidBalance:this.props.client.PrepaidBalance,
            levelId:this.props.client.LevelId,
            level:this.props.client.LevelSubject,
            levels:[],
        }

        this.setState(newState, function () {
            this.props.navigation.dispatch(getLevels());
        });
    }

    initLevels() {
        console.log("initLevels");

        var levels = new Array();

          if(this.state.levels.length>0) {
              console.log("initLevels greater than 0");
              console.log(this.state.levels);
              //TODO 注意返回字符串的格式。JSON获取会有麻烦。
              this.state.levels.map((s, i) => {
                  levels.push(
                      <Picker.Item label={s.Subject} value={s.Id} key={i}/>
                  );
              })
          }
         return levels;
    }

    componentWillReceiveProps(nextProps){

        if( nextProps.response !== this.props.response){
            console.log("State is updating");
            console.log(nextProps.response);
            this.setState({levels:nextProps.response.levels}, function () {
                console.log("State is updated");
                //console.log(this.state.levels);
            })
        }
    }

    handleChanged(value, property){
        switch (property){
            case "name":
                this.setState({name:value});
                break;
            case "age":
                this.setState({age:value});
                break;
            case "phone":
                this.setState({phone:value});
                break;
            case "deliverAddress":
                this.setState({deliverAddress:value});
                break;
            case "wechatId":
                this.setState({wechatId:value});
                break;
            case "qq":
                this.setState({qq:value});
                break;
            case "gender":
                this.setState({qq:gender});
                break;
        }

        //console.log(this.state);
    }
    save(){
        console.log("需要保存了");
         this.props.navigation.dispatch(
            saveMember(this.state.id,
                this.state.name,
                this.state.phone,
                this.state.deliverAddress,
                this.state.age,
                this.state.wechatId,
                this.state.qq,
                this.state.levelId,
                this.state.gender)
        );
    }

    render(){
        return (<View stlye={{flex:1, flexDirection:"column"}}>
            <Text>我是Client Details</Text>

            <TextInput style={Styles.loginInput}  placeholder="姓名" value={this.state.name}  onChangeText={(text)=>this.handleChanged(text, "name")}  />
             <TextInput style={Styles.loginInput}  placeholder="电话" value={this.state.phone} onChangeText={(text)=>this.handleChanged(text, "phone")} />
            <TextInput style={Styles.loginInput}  placeholder="寄送地址" value={this.state.deliverAddress} onChangeText={(text)=>this.handleChanged(text, "deliverAddress")} />
            <TextInput style={Styles.loginInput}  placeholder="年龄" value={this.state.age} onChangeText={(text)=>this.handleChanged(text, "age")}/>
            <TextInput style={Styles.loginInput}  placeholder="微信号" value={this.state.wechatId}  onChangeText={(text)=>this.handleChanged(text, "wechatId")}/>
            <TextInput style={Styles.loginInput}  placeholder="QQ号" value={this.state.qq}  onChangeText={(text)=>this.handleChanged(text, "qq")}/>
            <Picker selectedValue={this.state.gender} onValueChange={(value)=>this.setState({gender:value})}>
                <Picker.Item label="男" value="男"/>
                <Picker.Item label="女" value="女" />
            </Picker>
            <Picker
                selectedValue={this.state.levelId}
                onValueChange={(value) => this.setState({levelId: value})}>
                {
                    this.initLevels()
                }
            </Picker>
            <View>
                <Text>{this.state.LastShoppedDate}</Text>
            </View>
            <Text>{this.state.Total}</Text>
            <Text>{this.state.PrepaidBalance}</Text>
            <TouchableHighlight onPress={()=>this.save()} style={Styles.button}  underlayColor='#99d9f4'>
                <Text style={Styles.buttonText}>保存</Text>
            </TouchableHighlight>
        </View>)
    }
}


const mapStateToProps = state => ({
    client: state.client,
    response:state.member,
});

export default connect(mapStateToProps)(ClientDetails);