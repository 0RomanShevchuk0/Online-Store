import React, { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styled from 'styled-components'


type Inputs = {
	login: string,
	password: string
}

const Login: FC = () => {

	const {register, handleSubmit, watch, formState: { errors }} = useForm<Inputs>()

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data)
	}

	return (
		<Container>
			<Title>Login</Title>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input type="text" {...register("login")} />
				<Input type="password" {...register("password")} />
				<Button type="submit">Sign In</Button>
			</Form>
		</Container>
	)
}

export default Login

export const Container = styled.div`
	height: 70vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Title = styled.h1`
	font-size: 36px;
	margin: 20px 0px;
`

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`

export const Input = styled.input`
	height: 53px;
	width: 360px;
	border-radius: 50px;
	border: none;
	padding: 12px 12px;
	box-sizing: border-box;
	background-color: #e5e1e1;

	font-size: 20px;
`

export const Button = styled.button`
	height: 53px;
	width: 360px;
	border-radius: 50px;
	background-color: violet;
`