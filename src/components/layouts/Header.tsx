import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setIsCartOpened } from '../../redux/cart-reducer'
import cartIcon from '../../assets/icons/cart.svg'


const Header: FC = () => {
	const dispatch = useDispatch()

	return (
		<Container>
			Header
			<Button title='Open cart' onClick={() => dispatch(setIsCartOpened(true))}>
				<img src={cartIcon} alt="" />
			</Button>
		</Container>
	)
}

export default Header

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 80px;
	background: #8b7ba4;
	z-index: 10;

	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px 30px;
	box-sizing: border-box;
	padding: 0px 100px;
`

const Button = styled.button`
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: inherit;

	&:hover {
		background-color: #9585ae;
	}
`