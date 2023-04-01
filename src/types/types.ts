export type ProductType = {
	category: string
	description: string
	id: number 
	image: string 
	price: number
	rating: {rate: number, count: number}
	title: string 
}

export type AuthInputs = {
	email: string,
	password: string
	name?: string
}