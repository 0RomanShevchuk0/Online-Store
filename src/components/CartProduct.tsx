import React, { FC, useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { numberToUSD } from '../helpers/NumberToUSD'
import { removeFromCart, setTotalPrice } from '../redux/cart-reducer'
import { ProductType } from '../types/types'
import trashIcon from '../assets/icons/trash.svg'
import { GlobalStateType } from '../redux/store'
import { ThemeContext } from '../providers/ThemeProvider'
import DeleteIcon from '@mui/icons-material/Delete';
import { useMUIIconSettings } from '../hooks/useMUIIconSettings'



const CartProduct: FC<ProductType> = (props) => {
	const dispatch = useDispatch()
	const totalPrice = useSelector((state: GlobalStateType) => state.cart.totalPrice)
	
	const [itemsAmount, setItemsAmount] = useState(1)
	const {theme} = useContext(ThemeContext)
	const [muiIconSettings] = useMUIIconSettings()

	function removeProduct() {
		dispatch(setTotalPrice(totalPrice - props.price * itemsAmount))
		dispatch(removeFromCart(props.id))
	}

	function increaseAmount() {
		setItemsAmount((prev:number) => prev + 1)
		dispatch(setTotalPrice(totalPrice + props.price))
	}
	function decreaseAmount() {
		setItemsAmount((prev:number) => prev - 1)
		dispatch(setTotalPrice(totalPrice - props.price))
	}

	return (
		<Container>
			<UpperBlock>
				<Main>
					<ImageContainer>
						<Image src={props.image} alt="" />
					</ImageContainer>
					<Info>
						<Title>{props.title}</Title>
						<Price>
							{numberToUSD(props.price)}
						</Price>
						<TotalCount>
							<MiniButton 
								onClick={decreaseAmount}
								disabled={itemsAmount === 1} 
								theme={theme}
								>
								-
							</MiniButton>
							{itemsAmount} 
							<MiniButton
								onClick={increaseAmount}
								theme={theme}
							>
								+
							</MiniButton>
						</TotalCount>
					</Info>
				</Main>
				<Button 
					onClick={removeProduct} 
					title='Remove'
				>
					<DeleteIcon sx={{...muiIconSettings}} />
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
	gap: 40px;
`

const Info = styled.div`
`

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 40%;
	max-width: 130px;
	height: 160px;

	background: #fff;
	border-radius: 12px;
`
const Image = styled.img`
	display: block;
	width: 90%;
	
	object-fit: contain;
	flex-shrink: 0;
`

const Title = styled.div`
	font-size: 20px;
	line-height: 24px;
	font-weight: 400;

	overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
`

const Price = styled.div`
	margin-top: 16px;
	justify-self: flex-end;
	font-size: 24px;
	line-height: 29px;
	font-weight: 500;
`

const TotalCount = styled.div`
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
	color: ${(props) => props.theme === 'light' ? 'var(--dark)' : 'var(--light)'};
	font-size: 24px;

	display: flex;
	align-items: center;
	justify-content: center;

	border: 1px solid ${(props) => props.theme === 'light' ? 'var(--dark)' : 'var(--light)'};
	border-radius: 10px;
	background: none;

	&:disabled {
		color: #989595;
		border-color: #989595;
		cursor: default;
	}

	&:hover {
		background: none;
	}
`