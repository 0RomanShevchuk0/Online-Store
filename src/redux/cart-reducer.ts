import { createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../types/types';


const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cartProducts: [] as Array<ProductType>,
		isCartOpened: false,
		totalPrice: 0,
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
		},
		setTotalPrice(state, action) {
			state.totalPrice = action.payload
		},
	}
})

export const { addToCart, removeFromCart,
	setIsCartOpened, setTotalPrice } = cartSlice.actions

export default cartSlice.reducer