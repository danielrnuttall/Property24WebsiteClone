import React from 'react';
import {combineReducers, createStore} from 'redux';


//Reducers used
import PropertyReducer from './Reducers/PropertyReducer';
import UserReducer from './Reducers/UserReducer';

const allReducers = combineReducers({
    property: PropertyReducer,
    user: UserReducer
});


const store = createStore(allReducers, {
    //Pass in initial state or data.
});

export default store