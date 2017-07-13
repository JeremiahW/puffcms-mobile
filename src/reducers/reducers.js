import {combineReducers} from 'redux';
import {user} from './user';
import {client} from './client';
import {member} from './member';
import { NavigationActions } from 'react-navigation';
import * as ActionType from '../constant/action-types';
import { AppNavigator } from '../containers/app-navigator';

//const LandingAction =AppNavigator.router.getActionForPathAndParams('Landing');
//const tempNavState = AppNavigator.router.getStateForAction(LandingAction);
//const LoginAction =AppNavigator.router.getActionForPathAndParams('Login');
//const initialNavState = AppNavigator.router.getStateForAction(tempNavState, LoginAction)

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));
const navReducer = (state = initialState, action) => {

    console.log("navReducer" );
    console.log(action.type);
    console.log(state);
    let nextState;
    switch (action.type){
        case ActionType.LOGIN:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Home'})
                    ]
                }),
                state
            );
            break;
        case ActionType.LOGOUT:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'Login'})
                    ]
                }),
                state
            );
            break;
        case ActionType.CLIENT_LIST:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'ClientList' }),
                state
            );
            break;
        case ActionType.LANDING:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Landing' }),
                state
            );
            break;
        case ActionType.BATCH_ORDER_LIST:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'BatchOrderList' }),
                state
            );
            break;
        case ActionType.CLIENT_DETAILS:
            console.log("reducer CLIENT_DETAILS");
            console.log(action.clientDetails);
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'ClientDetails'}),
                state
            );
            break;
        case ActionType.GOBACK:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        default:
            console.log("default");
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    //const nextState = NavigationActions.navigate("Home");
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};


const reducers = combineReducers({
    nav:navReducer,
    user:user,
    client:client,
    member:member,
});

export default reducers;
