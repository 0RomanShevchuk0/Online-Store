import React, { FC, useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { GlobalStateType } from "../redux/store"
import { ProductType } from "../types/types"
import Preloader from "./layouts/Preloader"
import ProductItem from "./ProductItem"

const Home: FC = () => {
  const products = useSelector(
    (state: GlobalStateType) => state.products.products
  )
  const ProductItems = products?.map((item: ProductType) => (
    <ProductItem key={item.id} {...item} />
  ))
	
  const searchParams = useParams()
	const searchProducts = products.filter((item: ProductType) => {
		if(searchParams.search) {
			return item.title.toLocaleLowerCase()
				.includes(searchParams.search.toLocaleLowerCase())
		}
	})
	const searchProductItems = searchProducts.map((item: ProductType) => (
		<ProductItem key={item.id} {...item} />
	))
	
  if (products.length < 1) return <Preloader />

  if (searchParams.search) {
    return (
      <div>
        <Container>{searchProductItems}</Container>
      </div>
    )
  }

  return (
    <div>
      <Container>{ProductItems}</Container>
    </div>
  )
}

export default Home;

const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;

  @media screen and (max-width: 768px) {
    grid-template-columns: 50% 50%;
  }
`
