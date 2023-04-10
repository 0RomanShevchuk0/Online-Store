import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../providers/ThemeProvider'

type PropsType = {
	children: string
	clickHandler?: () => void
	type?: "button" | "submit" | "reset" | undefined 
	disabled?: boolean
}

const MyButton: FC<PropsType> = ({children, clickHandler, type, disabled}) => {
	const {theme} = useContext(ThemeContext)

	return (
		<Button 
			onClick={clickHandler} 
			type={type}
			mytheme={theme}
			disabled={disabled}
		>
			{children}
		</Button>
	)
}

export default MyButton

const Button = styled.button<{mytheme: 'light' | 'dark'}>`
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

	&:disabled {
		background-color: #dcdbdb;
		color: #fff;
		cursor: default;
	}

	@media screen and (max-width: 1100px) {
		width: 250px;
	}
`