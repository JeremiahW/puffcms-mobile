
import * as ActionType from '../constant/action-types';
import fetchData from "./fetch-data";
import {AsyncStorage} from "react-native";

export function doLogin(username, password){
    console.log("login-action doLogin, username is :" + username + " password is :" +password);
    return function (dispatch) {
        console.log("login-action-return ");
        let action = "index/user/login";
         fetchData(action, {username:username, password:password}, 'POST').then((resp)=>{
            console.log(action);
             console.log(resp);
            if(resp.result === true){
                //TODO resp.data需要写入存储.
                AsyncStorage.setItem('user',JSON.stringify(resp),(error)=>{
                    if (error) {
                        console.log(error);
                    } else  {
                        dispatch({type:ActionType.LOGIN, status:username, password:password});
                    }
                });

            }
        });

    };
}

export function logOff(username){
    return function (dispatch) {
        //TODO 向服务器发送请求,注销登录,服务器操作成功后,dispatch LOGOUT事件, 跳转到登录窗口.
        console.log("login-action-return ");
        dispatch({type:ActionType.LOGOUT, username:username});
    };
}

//TODO 修改参数, pageSize,  searchCondition etc...
export function clientList(page, pageSize, searchName){
    console.log("clientList");
    return function (dispatch){
        console.log("clientList has been executed");
            AsyncStorage.getItem('user',(error,result)=>{
                if (!error) {
                    //测试用的token 永不过期, 可以直接请求数据.
                    let obj = JSON.parse(result);
                    let token = obj.data; //获得token.
                    console.log(obj.data);
                    let action = "index/client/get";
                    fetchData(action, {"token":token, "page":page, "pageSize":pageSize, search_name:searchName}, 'POST').then((data)=>{
                        console.log("fetchData: ");
                        console.log(data.data);
                        let clients = data.data;
                        dispatch({type:ActionType.GET_CLIENT_LIST,clients});
                    });
                }
            })
        }
}