
import React, {Component} from 'react';
import {View,Text, TextInput, Button,StyleSheet, TouchableHighlight} from 'react-native';
import * as ActionType from "../constant/action-types";
import {doLogin, logOff} from "../actions/login-action";
import { connect } from 'react-redux';

class Login extends Component{
    static navigationOptions = {
        title: '欢迎使用本系统-请登录',
    };
    constructor(props){
        super(props);
        this.state = {
            username:null,
            password:null,
            id:null,
        }
    }
    doLogin(){
        console.log("login-component doLogin");
        //console.log(this.state);
       // this.props.doLogin(this.state.username, this.state.password);
        let {dispatch} = this.props.navigation;
        dispatch(doLogin(this.state.username, this.state.password));


    }
    static componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps',nextProps);
        if(nextProps.user !== this.props.user){
            console.log("componentWillReceiveProps needs update");
        }
        // if (nextProps.selectedReddit !== this.props.selectedReddit) {
        //      const { dispatch, selectedReddit } = nextProps
        //     dispatch(fetchPostsIfNeeded(selectedReddit))
        //   }
    }

    handleChanged(value, property){
        switch (property){
            case "username":
                this.setState({username:value});
                break;
            case "password":
                this.setState({password:value});
                break;
            case "id":
                this.setState({id:value});
                break;
        }

        //console.log(this.state);
    }

    render(){
        return (
            <View >
                <TextInput style={styles.loginInput} onChangeText={(text)=>this.handleChanged(text, "username")} underlineColorAndroid="transparent"  placeholder="请输入用户名" />
                <TextInput style={styles.loginInput} onChangeText={(text)=>this.handleChanged(text, "password")} underlineColorAndroid="transparent" placeholder=""/>

                <TouchableHighlight onPress={()=>this.doLogin()} style={styles.button}  underlayColor='#99d9f4'>
                        <Text style={styles.buttonText}>添加</Text>
                </TouchableHighlight>

            </View>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
});
export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 10,
        flexDirection: 'column',
        flex: 1,
    },

    loginInput: {
        height: 42,
        borderColor: 'gray',
        borderWidth: 1,

        marginTop:2,
        marginLeft:5,
        marginRight:5,

    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',


    },
    button: {
        height: 36,

        flexDirection: 'row',
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop:10,
        marginLeft:5,
        marginRight:5,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },


});