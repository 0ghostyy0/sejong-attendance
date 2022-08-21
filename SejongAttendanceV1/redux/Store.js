import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

let modules = require('./RootReducer').default;

const Store = createStore(modules, composeWithDevTools(applyMiddleware()));

export default Store;
