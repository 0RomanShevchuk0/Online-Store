import React, { FC, useContext, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { ThemeContext } from "../../providers/ThemeProvider"
import { GlobalStateType } from "../../redux/store"
import { Link, useNavigate, useParams } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search'
import HeaderMobileMenu from "../HeaderMobileMenu"
import HeaderDesktopMenu from "../HeaderDesktopMenu"
import logoImg from "../../assets/logo.svg"
import logoMobileImg from "../../assets/logo-mobile.svg"
import { setCurrentCategory } from "../../redux/products-reducer"


const Header: FC = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
  const isAuthorized = useSelector(
    (state: GlobalStateType) => state.user.isAuthorized
  )
  const userName = useSelector((state: GlobalStateType) => state.user.name)
  const { theme, setTheme } = useContext(ThemeContext)
	const [searchValue, setSearchValue] = useState('')
	const [isMobile, setIsMobile] = useState(false)
	
	const logo = useRef<any>()
	const logoMobile = useRef<any>()

	useEffect(() => {
		function onResize() {
			if(window.innerWidth > 768) {
				setIsMobile(false)
				
				logo.current.style.display = 'block'
				logoMobile.current.style.display = 'none'
				
			}
			else {
				setIsMobile(true)

				logo.current.style.display = 'none'
				logoMobile.current.style.display = 'block'
			}
		}
		onResize()

		window.addEventListener('resize', onResize)

		return () => window.removeEventListener('resize', onResize)
	}, [])

	useEffect(() => {
		if(searchValue === '') {
			const lsSearch = localStorage.getItem('search')
			if(lsSearch) setSearchValue(lsSearch)
		}
	}, [])

	const  handleSearch = () => {
		localStorage.setItem('search', searchValue)
		navigate(`/${searchValue}`)
	}

	function handleLogoClick() {
		localStorage.removeItem('search')
		localStorage.removeItem('currentCategory')
		dispatch(setCurrentCategory(''))
		setSearchValue('')
		navigate('/')
	}

  return (
    <Container mytheme={theme}>
			<Logo ref={logo} src={logoImg} onClick={handleLogoClick} alt="logo"/>
			<Logo ref={logoMobile} src={logoMobileImg} onClick={handleLogoClick} alt="logo" />

			<SearchBlock>
				<Search 
					value={searchValue} 
					onChange={(e) => setSearchValue(e.target.value)} 
					onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
					type="text" 
					placeholder="Search..."
				/>
				<button onClick={() => handleSearch()}>
					<SearchIcon sx={{color: '#808d9a'}} />
				</button>
			</SearchBlock>

			{!isMobile ? (
				<HeaderDesktopMenu
					isAuthorized={isAuthorized}
					theme={theme}
					setTheme={setTheme}
					userName={userName}
				/>
			) : (
				<HeaderMobileMenu 
					isAuthorized={isAuthorized}
					theme={theme}
					setTheme={setTheme}
				/>
			)}
    </Container>
  )
}

export default Header;


const Container = styled.div<{mytheme: 'light'| 'dark'}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.mytheme === 'light' ?
		'var(--light-accent)' : 'var(--dark-accent)'
	};
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;
	gap: 20px;

  box-sizing: border-box;
  padding: 0px 100px;

  @media (max-width: 1400px) {
    padding: 0px 20px;
  }
`

const Logo = styled.img`
	width: clamp(4.375rem, -0.625rem + 20vw, 15.625rem);
	max-height: 60px;
	cursor: pointer;
`

const SearchBlock = styled.div`
	position: relative;
	max-width: 500px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	padding: 0px 4px;

	&>button {
		width: 50px;
		position: absolute;
		right: 10px;
		height: 70%;

		background: none;
		border-left: 1px solid #808d9a;

		&:hover {
			background: none;
		}
	}

	@media (max-width: 768px) {
		&>Button {
			display: none;
		}
	}
`

const Search = styled.input`
	width: 100%;
	padding: 10px 16px;
	border-radius: 50px;
	font-size: 18px;
	border: none;
	box-sizing: border-box;

	&:focus {
		border: 2px solid #8b7ba4;
		outline: 1px solid #fff;
	}
`

export const Button = styled.button<{mytheme?: 'light' | 'dark'}>`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  border-radius: 12px;

	&:hover {
    background-color: ${(props) => props.mytheme === 'light' ? 
			'var(--light-accent-hover)' : 'var(--dark-accent-hover)'
		};
  }
`


