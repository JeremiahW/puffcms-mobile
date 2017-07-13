import * as ActionType from '../constant/action-types';
import fetchData from "./fetch-data";
import {AsyncStorage} from "react-native";

export function getBatchOrder(page, clientName) {
    return function (dispatch) {
        console.log("getBatchOrder");
        let action = "index/order/get";
        fetchData(action, {}, 'POST').then((resp)=>{
            console.log(resp);
            dispatch({type:ActionType.GET_BATCH_ORDER_LIST});
        })
    }
}