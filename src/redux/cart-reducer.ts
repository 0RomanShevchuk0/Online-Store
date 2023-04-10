import { createSlice } from '@reduxjs/toolkit';
import { ProductType } from '../types/types';


const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cartProducts: [] as Array<ProductType>,
		isCartOpened: false,
		totalPrice: 0,
		isPurchaseSuccessVisible: false
	},
	reducers: {
		addToCart(state, action) {
			state.cartProducts.push(action.payload)
		},
		emptyCart(state) {
			state.cartProducts = []
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
		setIsPurchaseSuccessVisible(state, action) {
			state.isPurchaseSuccessVisible = action.payload
		},
	}
})

export const { addToCart, removeFromCart,
	setIsCartOpened, setTotalPrice, emptyCart,
	setIsPurchaseSuccessVisible } = cartSlice.actions

export default cartSlice.reducer