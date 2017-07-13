import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import * as ActionType from "../constant/action-types";
import Login from "../components/login-component";
import {doLogin, logOff} from "../actions/login-action";
import ClientList from "../components/client-list-component";
import Landing from "../components/landing-component";
import App from "../common/App";


 class HomeContainer extends Component{
    constructor(props){
        super(props)
    }

    doLogin(username, password){
        let {dispatch} = this.props;
        console.log("username:" + username);
        dispatch(doLogin(username, password));
    }

    logOff(username){
        let {dispatch} = this.props;
        dispatch(logOff(username));
    }

    isLoggedIn(){
        console.log("isLoggedIn");

        if(this.props.users.length > 0){
            if(this.props.users[0].id !== null){
                console.log("isLoggedIn: Login Successful");
                return true;
            }
        }

        return false;
    }

    render(){
        if(this.isLoggedIn()){
            return (<View>
                <Landing logOff={(username)=>this.logOff(username)}/>

            </View>);
        }
        else{
            return (<View>
                <Login doLogin={(username, password)=>this.doLogin(username, password)} />
                <View><Text>这里是要显示的文本:</Text>
                    {this.props.users.map((u, index)=>{
                        return (<Text key={index}>{u.username}</Text>);
                    })}
                </View>
            </View>)
        }
    }
}

function mapStateToProps(state){
     console.log("mapStateToProps");
     console.log(state.user);
    return{
        users:state.user,
    }
}

export default connect(mapStateToProps)(HomeContainer);