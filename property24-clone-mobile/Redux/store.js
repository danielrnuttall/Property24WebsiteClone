import React from 'react';
import {combineReducers, createStore} from 'redux';


//Reducers used
import PropertyReducer from './Reducers/PropertyReducer';
import UserReducer from './Reducers/UserReducer';
import LoginReducer from './Reducers/LoginReducer';

const rootReducer = combineReducers({
    properties: PropertyReducer,
    users: UserReducer,
    user: LoginReducer
});


const store = createStore(rootReducer);

export default store