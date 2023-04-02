import React, { FC, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import MyForm from './UI/MyForm'
import { AuthInputs } from '../types/types'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../redux/user-reducer'
import { GlobalStateType } from '../redux/store'
import { Navigate } from 'react-router-dom'
import Preloader from './layouts/Preloader'


const Login: FC = () => {	
	const dispatch = useDispatch()
	const [isLoading, setIsLoading] = useState(false)

	const handleLogin: SubmitHandler<AuthInputs> = async (data) => {
		try {
			let isError = false
			setIsLoading(true)
			const auth = getAuth()
			await signInWithEmailAndPassword(auth, data.email, data.password).catch((error) => {
				isError = true
				alert(error)
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
			<MyForm title="Log In" onSubmit={handleLogin}/>
		</>
	)
}

export default Login
