import React, { FC, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { GlobalStateType } from '../../redux/store'
import CartProduct from '../CartProduct'
import xMarkIcon from "../../assets/icons/x-mark.svg";
import { setIsCartOpened } from '../../redux/cart-reducer'


const Cart: FC = () => {
	const dispatch = useDispatch()
	const cartProducts = useSelector((state: GlobalStateType) => state.cart.cartProducts)
	const isCartOpened = useSelector((state: GlobalStateType) => state.cart.isCartOpened)

	const cartProductItems = cartProducts.map((item) => <CartProduct key={item.id} {...item} />)

	const ref: any = useRef()
	const [cartTopOffset, setCartTopOffset] = useState<number>(0)

	useEffect(() => {
		if(isCartOpened) {
			setCartTopOffset(-ref?.current?.getBoundingClientRect().top + ref?.current?.getBoundingClientRect().height / 30)
			setTimeout(() => {
				ref.current.style.opacity=1
				ref.current.style.visibility='visible'
			}, 100)
		} else {
			ref.current.style.opacity=0
			ref.current.style.visibility='hidden'
			setCartTopOffset(0)
		}
	}, [isCartOpened])

	return (
		<Container ref={ref} style={isCartOpened ? {marginTop: cartTopOffset} : {}}>
			<Button onClick={() => dispatch(setIsCartOpened(false))} title='Close' >
				<img src={xMarkIcon} alt="" />
			</Button>
			<Title>Cart</Title>
			<Products
				style={cartProducts.length < 1 ? 
					{display: 'flex', justifyContent: 'center', alignItems: 'center'} : {}
				}
			>
				{cartProducts.length < 1 && <div>Cart is empty</div>}
				{cartProductItems}
			</Products>
			<Summary>
				Total: 329
				<button>Checkout</button>
			</Summary>
		</Container>
	)
}

export default Cart

const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%; 
	transform: translate(-50%, -50%);	
	width: 70%;
	height: 800px;
	background-color: #fff;
	z-index: 50;
	overflow: auto;
	box-sizing: border-box;
	padding: 0px 60px;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-x: hidden;
	transition: 0.2s;
	border-radius: 30px;
`

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background: none;
	width: 40px;
	height: 40px;
	position: absolute;
	top: 30px;
	right: 30px;

	&:hover {
		background: none;
	}
`
const Title = styled.h1`
	margin: 20px 0px;
	font-size: 36px;
	line-height: 44px;
	font-weight: 500;
`

const Products = styled.div`
	position: relative;
	width: 100%;
	flex: 1;
	padding: 46px 0px;
	box-sizing: border-box;

	&::before, &::after {
		content: '';
		position: absolute;
		left: 15%;
		width: 70%;
		height: 1px;
		background: #D6D6D6;
	}
	&::before {
		top: 0;
	}
	&::after {
		bottom: 0;
	}
`

const Summary = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 70px 20px;
	box-sizing: border-box;

	font-size: 36px;
	line-height: 44px;
	font-weight: 500;
`