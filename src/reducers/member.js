import * as ActionType from "../constant/action-types";

export function member(state=[], action){
    switch (action.type){
        case ActionType.GET_MEMBER_LEVEL:
            return{...state, levels:action.levels}
            break;
        case ActionType.SAVE_MEMBER:
            return {...state, result:action.response};
        default:
            return state;
    }
}


/*
var index = state.findIndex((todo)=>{return todo.id == action.id});
var todo = state.find((todo)=>{return todo.id== action.id});

return[
    ...state.slice(0, index),
    Object.assign({}, todo, {status:!todo.status}),
    ...state.slice(index+1)
];*/