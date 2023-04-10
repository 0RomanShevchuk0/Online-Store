import React, { FC, useContext, useEffect, useMemo, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { GlobalStateType } from "../redux/store"
import { ProductType } from "../types/types"
import Preloader from "./layouts/Preloader"
import ProductItem from "./ProductItem"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { getCategories, setCurrentCategory }from "../redux/products-reducer"
import { ThemeContext } from "../providers/ThemeProvider"

const Home: FC = () => {
	const dispatch = useDispatch()
	const searchParams = useParams()

	const { theme } = useContext(ThemeContext)
  const products = useSelector(
    (state: GlobalStateType) => state.products.products
  )
  const categories = useSelector(
		(state: GlobalStateType) => state.products.categories
	)
  const currentCategory = useSelector(
		(state: GlobalStateType) => state.products.currentCategory
	)

	const [displayProducts, setDisplayProducts] = useState<ProductType[] | null>(null)

	useEffect(() => {
		dispatch(getCategories())
	}, [])

	// filter search and category
	useEffect(() => {
		const searchedProducts = products
			.filter((item) => {
				if(searchParams.search) {
					return item.title.toLocaleLowerCase()
						.includes(searchParams.search.toLocaleLowerCase())
				} else return item
			})
			.filter((item) => {
				if(currentCategory !== '') {
					return item.category.toLocaleLowerCase() === currentCategory.toLocaleLowerCase()
				} else return item
			})
		setDisplayProducts(searchedProducts)
	}, [products, searchParams.search, currentCategory])

	// set category from local storage
	useEffect(() => {
		const lsCurrentCategory = localStorage.getItem('currentCategory')
		if(currentCategory === '' && lsCurrentCategory) {
			dispatch(setCurrentCategory(lsCurrentCategory))
		}
	}, [])


	function handleCategorySelect(e: any) {
		const selectedCategory = e.target.textContent
		if(selectedCategory !== 'None') {
			localStorage.setItem('currentCategory', selectedCategory)
		} else {
			localStorage.removeItem('currentCategory')
		}
	}

	const menuCategories = categories?.map((item, id) => {
		return (
			<MenuItem 
				key={id} 
				value={item}
				onClick={handleCategorySelect}
			>
				{item}
			</MenuItem>
		)
	})	

	const ProductItems = displayProducts?.map((item) => (
    <ProductItem key={item.id} {...item} />
  ))
	

  if (products.length < 1) return <Preloader />

  return (
    <div>
			<MyFormControl id="category-form-control">
				<MyInputLabel 
					id="category-select-label" 
					mytheme={theme}
				>
					Category
				</MyInputLabel>
				<MySelect
					labelId="category-select-label"
					id="category-select"
					value={currentCategory}
					label="Category"
					onChange={(e) => dispatch(setCurrentCategory(e.target.value as string))}
					mytheme={theme}
				>
					<MenuItem 
						value={''}
						onClick={handleCategorySelect}
					>
						None
					</MenuItem>
					{menuCategories}
			</MySelect>
			</MyFormControl>
      
			{searchParams.search && !ProductItems?.length ?
				<NoItems>No items found</NoItems> :
				<Container>{ProductItems}</Container>
			}
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
const MyFormControl = styled(FormControl)`
	width: 240px;
	margin: 0px 20px 20px 20px !important;
	padding: 0px 20px !important;
	box-sizing: border-box;

	@media (max-width: 768px) {
		width: 100%;
		margin: 0px 0px 20px 0px !important;
	}
`

const MyInputLabel = styled(InputLabel)<{mytheme: 'light' | 'dark'}>`
	color: ${(props) => props.mytheme === 'light' ?
		'var(--dark)' : 'var(--light)'
	} !important;
	margin-left: 20px;
`

const MySelect = styled(Select)<{mytheme: 'light' | 'dark'}>`
	color: ${(props) => props.mytheme === 'light' ?
		'var(--dark)' : 'var(--light)'
	} !important;

	& svg {
		color: ${(props) => props.mytheme === 'light' ?
			'var(--dark)' : 'var(--light)'
		};
	}
	& fieldset {
		border-color: ${(props) => props.mytheme === 'light' ?
			'var(--dark)' : 'var(--light)'
		} !important;
	}
`

const NoItems = styled.div`
	text-align: center;
	margin: 20px 0px;
	font-size: 24px;
`
