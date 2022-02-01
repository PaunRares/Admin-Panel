import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import colorReducer from './reducers/colorReducer';
import postReducer from './reducers/postReducer';
import viewReducer from './reducers/viewReducer';
import userReducer from './reducers/userReducer';

const rootReducers = combineReducers({
    users: userReducer,
    posts: postReducer,
    color: colorReducer,
    view: viewReducer
})
const middleware = [thunk];
if(process.env.NODE_ENV === 'development') {
    middleware.push(logger)
}

const store = createStore(rootReducers, applyMiddleware(...middleware));

export default store;
