import React, { FC, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile, User } from "firebase/auth"
import { SubmitHandler } from 'react-hook-form';
import MyForm from './UI/MyForm';
import { AuthInputs } from '../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/user-reducer';
import { Navigate } from 'react-router-dom';
import { GlobalStateType } from '../redux/store';
import Preloader from './layouts/Preloader';


const SignUp: FC = () => {
	const dispatch = useDispatch()

	const [isLoading, setIsLoading] = useState(false)
	
	const handleSignUp: SubmitHandler<AuthInputs> = async (data) => {
		try {
			setIsLoading(true)
			const auth = getAuth()
			await createUserWithEmailAndPassword(auth, data.email, data.password).catch((err) => alert(err))
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
			<MyForm title="Sign up" onSubmit={handleSignUp} registration={true} />
		</>
	)
}

export default SignUp