import { createStore, combineReducers } from 'redux';
import navbarReducers from './reducers/navbar';

const storeWrapper = createStore(combineReducers(navbarReducers));

export default storeWrapper;
