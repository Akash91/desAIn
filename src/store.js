import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

let createStoreMiddleware = null;

const store = createStore(rootReducer, composeWithDevTools(createStoreMiddleware));

export default store;
