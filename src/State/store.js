import {applyMiddleware,combineReducers,legacy_createStore} from "redux"
import {thunk} from "redux-thunk"
import authReducer from "./Auth/Reducer"
import { customProductReducer } from "./Product/Reducer"
import cartReducer from "./Cart/Reducer"
import { orderReducer } from "./Order/Reducer"


const rootReducers=combineReducers({
 auth:authReducer,
 product:customProductReducer,
 cart:cartReducer,
 order:orderReducer
})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))