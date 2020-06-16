import {createStore, applyMiddleware} from 'redux';
import AppReducer from './reducer';

export const store = createStore(
    AppReducer,
);
