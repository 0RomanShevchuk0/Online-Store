import React, { FC } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/user-reducer';
import styled from 'styled-components';
import googleIcon from '../assets/icons/google-icon.svg'

const LoginWithGooglePopUp: FC = () => {
	const dispatch = useDispatch()

	const handleLoginWithGooglePopUp = async () => {
		try{
			const provider = new GoogleAuthProvider()
			const auth = getAuth()
			const response = await signInWithPopup(auth, provider)
			const user = response.user
			dispatch(setUser({
				name: user.displayName,
				email: user.email,
				id: user.uid
			}))
		} catch(err) {
				alert(err)
		}
	}

	return (
		<Container>
			<Border>
				or
			</Border>
			<div>
				<Icon src={googleIcon} onClick={handleLoginWithGooglePopUp} alt="google-icon" />
			</div>
		</Container>
	)
}

export default LoginWithGooglePopUp


const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Border = styled.div`
	position: relative;
	width: 360px;
	margin: 10px 0;
	text-align: center;

	&::before, 
	&::after {
		content: '';
		position: absolute;
		top: 50%;
		height: 1px;
		width: 46%;
		background-color: #c4afaf;
	}
	&::before {
		left: 0;
	}
	&::after {
		right: 0;
	}
`

const Icon = styled.img`
	cursor: pointer;
	border-radius: 12px;
	transition: .2s;

	&:hover {
		transform: translate(0px, -4px);
	}
`