import { combineReducers } from 'redux'

import  cartReducer  from "./components/Cart/cartReducer";


const reducers = combineReducers({
	cart: cartReducer,
})

export default reducers;