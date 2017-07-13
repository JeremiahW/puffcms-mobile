import * as ActionType from "../constant/action-types";


export function user(state=[], action) {
    switch (action.type) {
        case ActionType.LOGIN:
            console.log("reducers-user");
            console.log(action);
            return[
                { ...state, id:"1", username:action.username, password:action.password}
            ]
        case ActionType.LOGOUT:
            return [
                    { ...state, id:null, username:null,}
            ]
        default:
            return state;
    }
 }