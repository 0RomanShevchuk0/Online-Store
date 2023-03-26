import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setIsCartOpened } from '../../redux/cart-reducer'
import { GlobalStateType } from '../../redux/store'


const Overlay: FC = () => {
	const dispatch = useDispatch()
	const isCartOpened = useSelector((state: GlobalStateType) => state.cart.isCartOpened)

	return (
		<Container 
			onClick={() => dispatch(setIsCartOpened(false))}
			style={isCartOpened ? { height: '10000vh' } : {opacity: 0, visibility: 'hidden'}}>
		</Container>
	)
}

export default Overlay

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	background: rgba(0, 0, 0, 0.5);
	box-sizing: border-box;
	z-index: 20;
`