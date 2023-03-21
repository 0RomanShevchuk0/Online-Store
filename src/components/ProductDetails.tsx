import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { numberToUSD } from '../helpers/NumberToUSD'
import { addToCart, setIsCartOpened } from '../redux/cart-reducer'
import { getCurrentProduct } from '../redux/products-reducer'
import { GlobalStateType } from '../redux/store'
import { ProductType } from '../types/types'
import checkMarkIcon from '../assets/icons/check-mark.svg'
import deliveryParcelIcon from '../assets/icons/delivery-parcel.svg'
import deliveryTruckIcon from '../assets/icons/delivery-truck.svg'
import storeSearchIcon from '../assets/icons/store-search.svg'
import BackArrowIcon from '../assets/icons/back-arrow.svg'


const ProductDetails: FC = () => {
	const dispatch = useDispatch()
	const searchParams = useParams<{id: string}>()
	const productItem = useSelector((state: GlobalStateType) => state.products.currentProduct)
	const cartProducts: Array<ProductType> = useSelector((state: GlobalStateType) => state.cart.cartProducts)

	const isProductInCart = cartProducts.some((cardProduct) => cardProduct.id === productItem?.id)
	
	useEffect(() => {
		dispatch(getCurrentProduct(searchParams.id))

		return () => dispatch(getCurrentProduct(null))
	}, [])
	
	function addProductToCart() {
		if(!isProductInCart) {
			dispatch(addToCart(productItem))
		}
	}
	
	return (
		<div>
			<Link to='/'><Icon src={BackArrowIcon} alt='' /></Link>
			<Container>
				<div>
					<Image src={productItem?.image} alt="" />
				</div>
				<Content>
					<Title>{productItem?.title}</Title>
					<Price>
						{numberToUSD(productItem?.price as number)}
					</Price>
					<Rating>{productItem?.rating?.rate}</Rating>
					<IsAvailable>
						<Icon src={checkMarkIcon} alt="" />{productItem?.rating?.count ? 'In stock' : 'Out of stock'}
					</IsAvailable>
					{isProductInCart ?
						<button onClick={() => dispatch(setIsCartOpened(true))}>To cart</button> :
						<button onClick={addProductToCart}>Add to Cart</button>
					}
					<AdditionalInfo>
						<InfoItem><Icon src={deliveryParcelIcon} /> Free delivery on orders over 20$</InfoItem>
						<InfoItem><Icon src={deliveryTruckIcon} /> Estimated delivery in United Kingdom on Apr 17</InfoItem>
						<InfoItem><Icon src={storeSearchIcon} /> Find in-store</InfoItem>
					</AdditionalInfo>
				</Content>
					{/* <Description>
						{productItem?.description}
					</Description> */}
			</Container>
		</div>
	)
}

export default ProductDetails

const Container = styled.div`
	width: 1400px;
	display: grid;
	grid-template-columns: 40% 50%;
	box-sizing: border-box;
	padding: 10px 0px;
	gap: 80px;
	justify-content: space-between;
`

const Image = styled.img`
	width: 100%;
	min-width: 550px;
	height: 500px;
	object-fit: contain;
`

const Icon = styled.img`
	margin-right: 20px;
`

const Content = styled.div`
	/* max-width: 80%; */
`

const Title = styled.div`
	font-size: 32px;
	line-height: 39px;
	font-weight: 400;
`

const Price = styled.div`
	margin-top: 20px;
	font-size: 32px;
	line-height: 39px;
	font-weight: 500;
`

const Rating = styled.div`
	margin-top: 30px;
	font-size: 24px;
	line-height: 18px;
	font-weight: 500;
`

const IsAvailable = styled.div`
	margin-top: 44px;
	margin-bottom: 84px;
	font-size: 24px;
	line-height: 18px;
	font-weight: 500;
`

const AdditionalInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-top: 45px;
`

const InfoItem = styled.div`
	display: flex;
	align-items: center;
	font-size: 20px;
	line-height: 18px;
	font-weight: 400;
`

const Description = styled.div`
	
`