/**
 * Created by wangji on 6/12/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {addNavigationHelpers, StackNavigator} from 'react-navigation';
import ClientList from "../components/client-list-component";
import DrawerNav from '../containers/drawer-navigator';
import Landing from '../components/landing-component';
import  Login from "../components/login-component"

export const AppNavigator = StackNavigator({
    Login:{screen:Login},
    Home:{screen:DrawerNav},
    ClientList:{screen:ClientList},
    Landing:{screen:Landing},
});

class App extends Component {
    render(){
        console.log("App");
        console.log(this.props.nav);
        console.log(this.props.users);
        console.log(this.props.clients);
        return(
            <AppNavigator navigation={addNavigationHelpers({dispatch:this.props.dispatch,
                                    state: this.props.nav,
                                    users:this.props.users,
                                  //  clients:this.props.clients,
                                    })}  />
        )
    }
}

/*
App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    clients: PropTypes.object.isRequired,
};
*/

function mapStateToProps(state){
    console.log("mapStateToProps");
    console.log(state);
    return{
        nav:state.nav,
        users:state.user,
        //clients:state.client,
    }
}


const AppWithNavigationState = connect(mapStateToProps)(App);
export default AppWithNavigationState;
