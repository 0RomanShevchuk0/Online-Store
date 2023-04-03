import React, { FC, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { numberToUSD } from '../helpers/NumberToUSD'
import { addToCart, setIsCartOpened, setTotalPrice } from '../redux/cart-reducer'
import { getCurrentProduct } from '../redux/products-reducer'
import { GlobalStateType } from '../redux/store'
import { ProductType } from '../types/types'
import checkMarkIcon from '../assets/icons/check-mark.svg'
import deliveryParcelIcon from '../assets/icons/delivery-parcel.svg'
import deliveryTruckIcon from '../assets/icons/delivery-truck.svg'
import storeSearchIcon from '../assets/icons/store-search.svg'
import BackArrowIcon from '../assets/icons/back-arrow.svg'
import Preloader from './layouts/Preloader'
import MyButton from './UI/MyButton'
import StarRating from '@mui/material/Rating'


const ProductDetails: FC = () => {
	const dispatch = useDispatch()
	const searchParams = useParams<{id: string}>()
	const navigate = useNavigate()
	
	const productItem = useSelector((state: GlobalStateType) => state.products.currentProduct)
	const cartProducts: Array<ProductType> = useSelector((state: GlobalStateType) => state.cart.cartProducts)
	const totalPrice = useSelector((state: GlobalStateType) => state.cart.totalPrice)
	const isAuthorized = useSelector((state: GlobalStateType) => state.user.isAuthorized)

	const isProductInCart = cartProducts.some((cardProduct) => cardProduct.id === productItem?.id)
	
	useEffect(() => {
		dispatch(getCurrentProduct(searchParams.id))

		return () => dispatch(getCurrentProduct(null))
	}, [])
	
	function addProductToCart() {
		if(!isProductInCart) {
			dispatch(setTotalPrice(totalPrice + productItem.price))
			dispatch(addToCart(productItem))
		}
	}


	const upperTitle = useRef<any>()
	const lowerTitle = useRef<any>()
	useEffect(() => {
		function onResize() {
			if(window.innerWidth > 768) {
				if(upperTitle.current && lowerTitle.current) {
					upperTitle.current.style.display = 'none'
					lowerTitle.current.style.display = 'block'
				}
			} else {
				if(upperTitle.current && lowerTitle.current) {
					upperTitle.current.style.display = 'block'
					lowerTitle.current.style.display = 'none'
				}
			}
		}
		onResize()
		window.addEventListener('resize', onResize)

		return () => window.removeEventListener('resize', onResize)
	}, [productItem])

	if(!productItem) return <Preloader />	
	
	return (
		<div>
			<Link to='/'><Icon src={BackArrowIcon} alt='' /></Link>
			<Container>
				<div>
					<Title ref={upperTitle}>{productItem?.title}</Title>
					<ImageContainer>
						<Image src={productItem?.image} alt="" />
					</ImageContainer>
				</div>
				<Content>
					<Title ref={lowerTitle}>{productItem?.title}</Title>
					<Price>
						{numberToUSD(productItem?.price as number)}
					</Price>
					<Rating>
						<StarRating 
							value={productItem?.rating?.rate}
							precision={0.1}
							readOnly
						/>
						{productItem?.rating?.rate}
					</Rating>
					<IsAvailable>
						<Icon src={checkMarkIcon} alt="" />{productItem?.rating?.count ? 'In stock' : 'Out of stock'}
					</IsAvailable>
					{isAuthorized ? 
						(isProductInCart ?
							<MyButton clickHandler={() => dispatch(setIsCartOpened(true))}>To cart</MyButton> :
							<MyButton clickHandler={addProductToCart}>Add to Cart</MyButton>
						) :
							<MyButton clickHandler={() => navigate('/login')}>Add to Cart</MyButton>
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
	display: grid;
	grid-template-columns: 1fr 1fr;
	box-sizing: border-box;
	padding: 10px 30px;
	gap: 80px;
	justify-content: space-between;
	box-sizing: border-box;
	height: 100%;

	@media screen and (max-width: 1100px) {
		grid-template-columns: 1fr 1fr ;
		gap: 40px;
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 0;
	}
`

const ImageContainer = styled.div`
	width: 100%;
	background: #fff;
	border-radius: 12px;
`

const Image = styled.img`
	width: 100%;
	height: 500px;
	padding: 20px;
	box-sizing: border-box;
	object-fit: contain;
`

const Icon = styled.img`
	margin-right: 20px;
`

const Content = styled.div`
`

const Title = styled.div`
	font-size: 32px;
	line-height: 39px;
	font-weight: 400;

	@media screen and (max-width: 1100px) {
		font-size: 28px;
	}
`

const Price = styled.div`
	margin-top: 20px;
	font-size: 32px;
	line-height: 39px;
	font-weight: 500;

	@media screen and (max-width: 1100px) {
		font-size: 28px;
	}
`

const Rating = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;

	margin-top: 30px;
	font-size: 24px;
	line-height: 18px;
	font-weight: 500;

	@media screen and (max-width: 1100px) {
		font-size: 20px;
	}
`

const IsAvailable = styled.div`
	margin-top: 44px;
	margin-bottom: 84px;
	font-size: 24px;
	line-height: 18px;
	font-weight: 500;

	@media screen and (max-width: 1100px) {
		font-size: 20px;
		margin-top: 24px;
		margin-bottom: 44px;
	}
`

const AdditionalInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-top: 45px;

	@media screen and (max-width: 1100px) {
		img {
			width: 28px;
		}
	}
`

const InfoItem = styled.div`
	display: flex;
	align-items: center;
	font-size: 20px;
	line-height: 18px;
	font-weight: 400;

	@media screen and (max-width: 1100px) {
		font-size: 16px;
	}
`

const Description = styled.div`
	
`