import React, { FC } from 'react'
import styled from 'styled-components';
import preloader from "../../assets/preloader.svg";

const Preloader: FC = () => {
	return (
		<Container>
			<img src={preloader} alt="" />
		</Container>
	)
}

export default Preloader

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: #e4e4e4;
`