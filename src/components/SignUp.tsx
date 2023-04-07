import React, { FC, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile, User } from "firebase/auth"
import { SubmitHandler } from 'react-hook-form';
import MyForm from './UI/MyForm';
import { AuthInputs } from '../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/user-reducer';
import { Link, Navigate } from 'react-router-dom';
import { GlobalStateType } from '../redux/store';
import Preloader from './layouts/Preloader';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'


const SignUp: FC = () => {
	const dispatch = useDispatch()

	const [isLoading, setIsLoading] = useState(false)
	
	const handleSignUp: SubmitHandler<AuthInputs> = async (data) => {
		try {
			let isError = false
			setIsLoading(true)
			const auth = getAuth()
			await createUserWithEmailAndPassword(auth, data.email, data.password).catch((err) => {
				isError = true
				alert(err)
			})
			if(isError) {
				setIsLoading(false)
				return
			}
			await updateProfile(auth.currentUser as User, {displayName: data.name}).catch((err) => alert(err))
			const user = auth.currentUser
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
			<Link to='/'><ArrowBackIosIcon sx={{fontSize: '28px'}} /></Link>
			<MyForm title="Sign up" onSubmit={handleSignUp} registration={true} />
		</>
	)
}

export default SignUp