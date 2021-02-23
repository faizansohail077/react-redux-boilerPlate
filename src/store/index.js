import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { CartReducer, AuthReducer } from './reducers'

const rootReducer = combineReducers({
    CartReducer,
    AuthReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))