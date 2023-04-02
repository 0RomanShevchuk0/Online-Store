import { Dispatch } from 'react';
import { createSlice } from "@reduxjs/toolkit";
import fakeStoreAPI from '../services/fakeStoreAPI'
import { ProductType } from "../types/types";

const productSlice =  createSlice({
	name: "products",
	initialState: {
		products: [] as Array<ProductType>,
		currentProduct: {} as ProductType
	},
	reducers: {
		setAllProducts(state, action) {
			state.products = action.payload
		},
		setCurrentProduct(state, action) {
			state.currentProduct = action.payload
		}
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

export const { setAllProducts, setCurrentProduct } = productSlice.actions

export default productSlice.reducer
