import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import CartReducer from '../reducers/CartReducer'
import AuthReducer from '../reducers/AuthReducer'




const rootReducer = combineReducers({
    CartReducer,
    AuthReducer
})

export const store = createStore(rootReducer, devToolsEnhancer())