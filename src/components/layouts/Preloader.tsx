import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import preloaderDark from "../../assets/preloader-dark.svg"
import preloaderLight from "../../assets/preloader-light.svg"
import { ThemeContext } from '../../providers/ThemeProvider'

const Preloader: FC = () => {
	const {theme} = useContext(ThemeContext)

	return (
		<Container mytheme={theme}>
		{theme === 'light' ? 
			<img src={preloaderDark} alt="preloader" /> :
			<img src={preloaderLight} alt="preloader" />
		}
		</Container>
	)
}

export default Preloader

const Container = styled.div<{mytheme: 'light' | 'dark'}>`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: ${(props) => props.mytheme === 'light' ? 
		'var(--light)' : 'var(--dark)'
	};
`