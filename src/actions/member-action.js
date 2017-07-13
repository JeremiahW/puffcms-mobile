import * as ActionType from '../constant/action-types';
import fetchData,{postForm} from "./fetch-data";

import {AsyncStorage} from "react-native";

export function getLevels() {
    return function (dispatch) {
        console.log("getLevels");

        AsyncStorage.getItem('user',(error,result)=>{
            if (!error) {
                //测试用的token 永不过期, 可以直接请求数据.
                let obj = JSON.parse(result);
                let token = obj.data; //获得token.
                let action = "index/client/getLevels";
                fetchData(action, {"token":token}, 'POST').then((data)=>{
                    console.log("fetchData: ");
                    console.log(data.data);
                    let levels = data.data;
                    dispatch({type:ActionType.GET_MEMBER_LEVEL,levels});
                });
            }
        })
    }
}

export function saveMember(id, name, phone, deliverAddress, age, wechatId, qq, levelid, gender) {
    return function (dispatch) {
        console.log("saveMember");
        AsyncStorage.getItem('user', (error, result)=>{
            if(!error){
                let obj = JSON.parse(result);
                let token = obj.data; //获得token.
                let action = "index/client/save";
                fetchData(action, {form:{"token":token, "Name":name, "Gender":gender, "Phone":phone,
                                    "Age":age, "DeliveryAddress":deliverAddress, "WeChatID":wechatId,
                                    "QQ":qq, "LevelId":levelid, "Id":id}}, 'POST').then((response)=>{

                    console.log("fetchData: ");
                    console.log(response);
                    dispatch({type:ActionType.GOBACK,"response":response});
                });
            }
        });
    }
}