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
	const [isError, setIsError] = useState(false)

	const handleLogin: SubmitHandler<AuthInputs> = async (data) => {
		try {
			setIsLoading(true)
			const auth = getAuth()
			const user = auth.currentUser
			await signInWithEmailAndPassword(auth, data.email, data.password).catch((err) => {
				alert(err)
				setIsError(true)
				debugger
			})
			if(isError) {
				setIsLoading(false)
				return
			}
			debugger
			dispatch(setUser({ 
				name: user?.displayName, 
				email: user?.email, 
				id: user?.uid 
			}))
			
			setIsLoading(false)
		} catch(err) {
				alert(err)
		}
	}

	const userEmail = useSelector((state: GlobalStateType) => state.user.email)
	if(userEmail) return <Navigate to="/" />

	if(isLoading) return <Preloader />

	return (
		<>
			<MyForm title="Log In" onSubmit={handleLogin}/>
		</>
	)
}

export default Login
