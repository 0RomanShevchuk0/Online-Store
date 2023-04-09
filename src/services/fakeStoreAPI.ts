import axios from "axios"

const fakeStoreAPI = {
	async getAllProducts() {
		const response = await axios.get('https://fakestoreapi.com/products')
		return response.data
	},

	async getProductItem(id: string) {
		const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
		return response.data
	},

	async getAllCategories() {
		const response = await axios.get('https://fakestoreapi.com/products/categories')
		return response.data
	}
}

export default fakeStoreAPI