import React, { FC, useContext, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { GlobalStateType } from "../../redux/store"
import CartProduct from "../CartProduct"
import { emptyCart, setIsCartOpened, setIsPurchaseSuccessVisible, setTotalPrice } from "../../redux/cart-reducer"
import { numberToUSD } from "../../helpers/NumberToUSD"
import MyButton from "../UI/MyButton"
import emptyCartImg from "../../assets/empty-cart.png"
import CloseIcon from '@mui/icons-material/Close'
import { useMUIIconSettings } from "../../hooks/useMUIIconSettings"
import { Alert } from "@mui/material"
import { ThemeContext } from "../../providers/ThemeProvider"

const Cart: FC = () => {
  const dispatch = useDispatch()
	const { theme } = useContext(ThemeContext)

  const cartProducts = useSelector(
    (state: GlobalStateType) => state.cart.cartProducts
  )
  const isCartOpened = useSelector(
    (state: GlobalStateType) => state.cart.isCartOpened
  )
  const isAlertVisible = useSelector(
    (state: GlobalStateType) => state.cart.isPurchaseSuccessVisible
  )
	const [muiIconSettings] = useMUIIconSettings()

  const cartProductItems = cartProducts.map((item) => (
    <CartProduct key={item.id} {...item} />
  ))

  const totalPrice = useSelector(
    (state: GlobalStateType) => state.cart.totalPrice
  )

  const ref = useRef<any>()
  const [cartTopOffset, setCartTopOffset] = useState<number>(0)
  useEffect(() => {
    if (isCartOpened) {
      if (window.innerWidth > 768) {
        setCartTopOffset(
          -ref?.current?.getBoundingClientRect().top +
            ref?.current?.getBoundingClientRect().height / 30
        )
      } else {
        setCartTopOffset(-ref?.current?.getBoundingClientRect().top)
      }
      setTimeout(() => {
        ref.current.style.opacity = 1
        ref.current.style.visibility = "visible"
      }, 100)
    } else {
      ref.current.style.opacity = 0
      ref.current.style.visibility = "hidden"
      setCartTopOffset(0)
    }
  }, [isCartOpened])


	function handleCheckout() {
		dispatch(emptyCart())
		dispatch(setTotalPrice(0))
		dispatch(setIsPurchaseSuccessVisible(true))
	}

	function handleCloseCart() {
		dispatch(setIsCartOpened(false))
		dispatch(setIsPurchaseSuccessVisible(false))
	}

  return (
    <Container
      className="cart"
      ref={ref}
      style={isCartOpened ? { marginTop: cartTopOffset } : {}}
    >
      <Button onClick={handleCloseCart} title="Close">
				<CloseIcon sx={{...muiIconSettings}} />
      </Button>
      <Title>Cart</Title>
      <Products
        style={
          cartProducts.length < 1
            ? {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }
            : {}
        }
      >
				<MyAlert mytheme={theme} isvisible={`${isAlertVisible}`} severity="success">
					Thank you for the purchase
				</MyAlert>
        {cartProducts.length < 1 && <div><img src={emptyCartImg} alt="emptyCartImg" /></div>}
        {cartProductItems}
      </Products>
      <Summary>
        Total: {numberToUSD(totalPrice)}
				<MyButton clickHandler={handleCheckout} disabled={cartProducts.length < 1}>
					Checkout
				</MyButton>
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
  height: 94%;
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
  opacity: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding: 0px 0px;
  }
`;

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
	color: red;

  &:hover {
    background: none;
  }

  @media screen and (max-width: 768px) {
    top: 15px;
    right: 15px;
  }
`;
const Title = styled.h1`
  margin: 20px 0px;
  font-size: 36px;
  line-height: 44px;
  font-weight: 500;
`;

const Products = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  padding: 46px 0px;
  box-sizing: border-box;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 15%;
    width: 70%;
    height: 1px;
    background-color: #d6d6d6;
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
`;
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 30px 0px;
    gap: 20px;
  }
`

const MyAlert = styled(Alert)<{isvisible: string, mytheme: 'light' | 'dark'}>`
	width: 100%;
	position: absolute;
	top: 10px;
	box-sizing: border-box;

	display: ${(props) => props.isvisible === 'true' ? 'flex' : 'none'} !important;	
	background-color: ${(props) => props.mytheme === 'dark' && '#88de86'} !important;
`
