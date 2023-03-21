import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { numberToUSD } from '../helpers/NumberToUSD'
import { removeFromCart } from '../redux/cart-reducer'
import { ProductType } from '../types/types'
import trashIcon from '../assets/icons/trash.svg'


const CartProduct: FC<ProductType> = (props) => {
	const dispatch = useDispatch()

	return (
		<Container>
			<UpperBlock>
				<Main>
						<Image src={props.image} alt="" />
						<Info>
							<Title>{props.title}</Title>
							<Price>
								{numberToUSD(props.price)}
							</Price>
							<ItemCount>
								<MiniButton>-</MiniButton> 1 <MiniButton>+</MiniButton>
							</ItemCount>
						</Info>
				</Main>
				<Button 
					onClick={() => dispatch(removeFromCart(props.id))} 
					title='Remove'
				>
					<img src={trashIcon} alt="" />
				</Button>
			</UpperBlock>
		</Container>
	)
}
export default CartProduct

	
const Container = styled.div`
	padding: 20px;
`

const UpperBlock = styled.div`
	display: flex;
	gap: 40px;
	justify-content: space-between;
`

const Main = styled.div`
	display: flex;
	gap: 20px;
`

const Info = styled.div`
`
const Image = styled.img`
	display: block;
	width: 110px;
	height: 160px;
	object-fit: contain;
	flex-shrink: 0;
`

const Title = styled.div`
	color: black;
	font-size: 20px;
	line-height: 24px;
	font-weight: 400;
`

const Price = styled.div`
	margin-top: 16px;
	justify-self: flex-end;
	font-size: 24px;
	line-height: 29px;
	font-weight: 500;
`

const ItemCount = styled.div`
	display: flex;
	align-items: center;
	gap: 25px;

	padding: 35px 0px;

	font-size: 14px;
	line-height: 17px;
	font-weight: 500;
`

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background: none;
	width: 40px;
	height: 40px;

	&:hover {
		background: none;
	}
`

const MiniButton = styled.button`
	width: 24px;
	height: 24px;
	color: black;
	font-size: 24px;

	display: flex;
	align-items: center;
	justify-content: center;

	border: 1px solid black;
	border-radius: 10px;
	background: none;
	&:hover {
		background: none;
	}
`