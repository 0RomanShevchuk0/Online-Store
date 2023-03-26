import React, { FC } from 'react'
import styled from 'styled-components'

type PropsType = {
	children: string
	clickHandler?: () => void
}

const MyButton: FC<PropsType> = ({children, clickHandler}) => {
	return (
		<ButtonContainer onClick={clickHandler}>
			{children}
		</ButtonContainer>
	)
}

export default MyButton

const ButtonContainer = styled.button`
	cursor: pointer;
	width: 362px;
	height: 53px;
	font-size: 24px;
	background-color: #323232;
	color: #fff;
	border-radius: 16px;
	transition: .1s;
	border: none;

	&:hover {
		background-color: #3f3f3f;
	}

	@media screen and (max-width: 1100px) {
		width: 250px;
	}
`