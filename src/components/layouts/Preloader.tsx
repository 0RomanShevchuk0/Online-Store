import React, { FC, useContext } from 'react'
import styled from 'styled-components';
import preloader from "../../assets/preloader.svg";
import { ThemeContext } from '../../providers/ThemeProvider';

const Preloader: FC = () => {
	const {theme} = useContext(ThemeContext)

	return (
		<Container mytheme={theme}>
			<img src={preloader} alt="" />
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