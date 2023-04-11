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

export type HeaderPartType = {
	theme: 'light' | 'dark'
	setNewTheme: () => void
	isAuthorized: boolean,
	userName?: string | null
}