import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import settings from 'config';
import * as AUTH_TYPES from 'modules/Authentication/Types';
import { BrowserHistory } from 'routes/history';
import rootReducer from './rootReducer';


let createStoreMiddleware = null;

// store is required while defining the middleware
// eslint-disable-next-line no-unused-vars
const authenticationMiddleware = store => next => (action) => {
  switch (action.type) {
    case AUTH_TYPES.LOGOUT:
      BrowserHistory.push('/login');
      break;
    default:
  }
  next(action);
};

if (settings.ENABLE_LOGGER_MIDDLEWARE && settings.LOGGING_ENABLED) {
  createStoreMiddleware = applyMiddleware(thunk, authenticationMiddleware, createLogger());
}
else {
  createStoreMiddleware = applyMiddleware(thunk, authenticationMiddleware);
}


const store = createStore(rootReducer, composeWithDevTools(createStoreMiddleware));

export default store;
