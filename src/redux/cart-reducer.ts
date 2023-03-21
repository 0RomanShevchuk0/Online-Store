import { createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../types/types';


const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cartProducts: [] as Array<ProductType>,
		isCartOpened: false
	},
	reducers: {
		addToCart(state, action) {
			state.cartProducts.push(action.payload)
		},
		removeFromCart(state, action) {
			state.cartProducts = state.cartProducts
				.filter((product) => product.id !== action.payload)
		},
		setIsCartOpened(state, action) {
			state.isCartOpened = action.payload
		}
	}
})

export const { addToCart, removeFromCart, setIsCartOpened } = cartSlice.actions

export default cartSlice.reducer