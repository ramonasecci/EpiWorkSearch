// Nello store si dichiara la costruzione del Redux Store
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import prefReducer from '../reducers/preferiti';
import worksReducer from '../reducers/works'; 
// chiamando il file del reducer index.js, 
//questo import punta alla cartella reducers, che per prima cosa va a cercare un file index

const bigReducer = combineReducers({
	pref: prefReducer,
	works: worksReducer
});

const store = configureStore({
	reducer: bigReducer,
})

export default store;