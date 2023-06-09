import { combineReducers, configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cart-reducer"
import productsReducer from "./products-reducer"
import userReducer from "./user-reducer"

const rootReducer = combineReducers({
	products: productsReducer,
	cart: cartReducer,
	user: userReducer
})

type RootReducerType = typeof rootReducer

export type GlobalStateType = ReturnType<RootReducerType>

export const store = configureStore({
	reducer: rootReducer
})