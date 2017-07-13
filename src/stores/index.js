import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/reducers';

const initState = {

};

const finalCreateStore = applyMiddleware(thunk)(createStore);
export default store = finalCreateStore(reducers, initState);