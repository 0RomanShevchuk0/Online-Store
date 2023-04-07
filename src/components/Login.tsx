import React, { FC, useState } from 'react'
import { set, SubmitHandler } from 'react-hook-form'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import MyForm from './UI/MyForm'
import { AuthInputs } from '../types/types'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../redux/user-reducer'
import { GlobalStateType } from '../redux/store'
import { Link, Navigate } from 'react-router-dom'
import Preloader from './layouts/Preloader'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { Alert } from '@mui/material'
import styled from 'styled-components'


const Login: FC = () => {	
	const dispatch = useDispatch()
	const [isLoading, setIsLoading] = useState(false)
	const [myError, setMyError] = useState<string | null>(null)


	let isError = null
	const handleLogin: SubmitHandler<AuthInputs> = async (data) => {
		try {
			setIsLoading(true)
			isError = false
			const auth = getAuth()
			await signInWithEmailAndPassword(auth, data.email, data.password).catch((error) => {
				isError = true
				setMyError(error.code)
			})
			if(isError) {
				setIsLoading(false)
				return 
			}
			dispatch(setUser({ 
				name: auth.currentUser?.displayName, 
				email: auth.currentUser?.email, 
				id: auth.currentUser?.uid 
			}))
			setIsLoading(false)
		} catch(error) {
				alert(error)
		}
	}

	const isAuthorized = useSelector((state: GlobalStateType) => state.user.isAuthorized)
	if(isAuthorized) return <Navigate to="/" />

	if(isLoading) return <Preloader />

	return (
		<>
			<Link to='/'><ArrowBackIosIcon sx={{fontSize: '28px'}} /></Link>
			<MyAlert myerror={myError} severity="error">{myError}</MyAlert>
			<MyForm title="Log In" onSubmit={handleLogin}/>
		</>
	)
}

export default Login

const MyAlert = styled(Alert)<{myerror: string | null}>`
	width: 70%;
	display: ${(props) => props.myerror ? 'flex' : 'none'} !important;
	margin: 0px auto;
`
