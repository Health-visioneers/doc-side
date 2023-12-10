
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';

import appointmentReducer from "./reducers/appointmentReducer";

const rootReducer = combineReducers({
    appointment:appointmentReducer
})


export const store = configureStore({
    reducer:rootReducer,

    // middleware: [thunk],
   
  });
  


