/**
 * Created by wangji on 6/16/2017.
 */
import * as ActionType from "../constant/action-types";

export function client(state=[], action) {
    console.log("reducers-client");

    switch (action.type){
        case ActionType.GET_CLIENT_LIST:
           // console.log(action.clients);
            return (action.clients);
         case ActionType.CLIENT_DETAILS:
            // console.log(action.clientDetails);
            return (action.clientDetails);
        default:
            return state;
    }
}