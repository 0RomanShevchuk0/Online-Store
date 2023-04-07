import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../providers/ThemeProvider'

type PropsType = {
	children: string
	clickHandler?: () => void
	type?: "button" | "submit" | "reset" | undefined 
}

const MyButton: FC<PropsType> = ({children, clickHandler, type}) => {
	const {theme} = useContext(ThemeContext)

	return (
		<ButtonContainer 
			onClick={clickHandler} 
			type={type}
			mytheme={theme}
		>
			{children}
		</ButtonContainer>
	)
}

export default MyButton

const ButtonContainer = styled.button<{mytheme: 'light' | 'dark'}>`
	cursor: pointer;
	width: 362px;
	height: 53px;
	font-size: 24px;
	background-color: ${(props) => props.mytheme === 'light' ?
		'var(--light-accent)' : 'var(--dark-accent)'
	};
	color: ${(props) => props.mytheme === 'light' ?
		'var(--dark)' : 'var(--light)'
	};
	border-radius: 16px;
	transition: .1s;
	border: none;

	&:hover {
		background-color: ${(props) => props.mytheme === 'light' ?
		'var(--light-accent-hover)' : 'var(--dark-accent-hover)'
	};
	}

	@media screen and (max-width: 1100px) {
		width: 250px;
	}
`