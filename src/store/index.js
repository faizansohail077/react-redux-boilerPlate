import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import { CartReducer, AuthReducer } from './reducers'

const rootReducer = combineReducers({
    CartReducer,
    AuthReducer
})

export const store = createStore(rootReducer, devToolsEnhancer())