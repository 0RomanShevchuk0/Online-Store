import { async } from "@firebase/util";
import { createSlice } from "@reduxjs/toolkit";
import fakeStoreAPI from '../services/fakeStoreAPI'
import { ProductType } from "../types/types";

const productSlice =  createSlice({
	name: "products",
	initialState: {
		products: [] as Array<ProductType>,
		currentProduct: {} as ProductType,
		categories: [] as string[],
		search: ''
	},
	reducers: {
		setAllProducts(state, action) {
			state.products = action.payload
		},
		setCurrentProduct(state, action) {
			state.currentProduct = action.payload
		},
		setCategories(state, action) {
			state.categories = action.payload
		},
	}
})

export const getAllProducts = (): any => {
	return async (dispatch: any) => {
		const data = await fakeStoreAPI.getAllProducts()
		dispatch(setAllProducts(data))
	}
}

export const getCurrentProduct = (id: string | null | undefined): any => {
	return async (dispatch: any) => {
		if(id) {
			const data = await fakeStoreAPI.getProductItem(id)
			dispatch(setCurrentProduct(data))
		} else {
			dispatch(setCurrentProduct(null))
		}
	}
}

export const getCategories =  (): any => {
	return async (dispatch: any) => {
		const data = await fakeStoreAPI.getAllCategories()
		dispatch(setCategories(data))
	}
}

export const { setAllProducts, setCurrentProduct,
	setCategories } = productSlice.actions

export default productSlice.reducer
