import React, { FC } from 'react'
import styled from 'styled-components'
import page404Img from '../assets/404.svg'

const Page404: FC = () => {
	return (
		<Container>
			<Image src={page404Img} alt="pageNotFound" />
		</Container>
	)
}

export default Page404

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const Image = styled.img`
	max-width: 600px;
	width: 100%;
	min-height: 0;
`