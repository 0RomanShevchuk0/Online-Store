import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import ProductDetails from "./components/ProductDetails"
import Header from "./components/layouts/Header"
import Home from "./components/Home"
import Cart from "./components/layouts/Cart"
import Overlay from "./components/layouts/Overlay"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "./redux/products-reducer"
import { GlobalStateType } from "./redux/store"


//? Light/Dark theme
//? Table/List products view

const App = () => {
	const dispatch = useDispatch()
	const isCartOpened = useSelector((state: GlobalStateType) => state.cart.isCartOpened)

	useEffect(() => {
		dispatch(getAllProducts())
	}, [])

	useEffect(() => {
		const body = document.querySelector('body')
		if(isCartOpened) {
			body?.classList.add('removedScroll')
		} else {
			body?.classList.remove('removedScroll')
		}
	}, [isCartOpened])
	
  return (
    <AppContainer className="qq">
			<Header />
			<MainContent>	
				<Routes>
					<Route element={<Home />} path='/' />
					<Route element={<ProductDetails />} path='/products/:id' />
				</Routes>
				<Cart />
				<Overlay />
			</MainContent>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
	width: 100%;
	max-width: 1400px;
	margin: 0px auto;
`
const MainContent = styled.div`
	width: 100%;
	box-sizing: border-box;
	margin-top: 130px;
`