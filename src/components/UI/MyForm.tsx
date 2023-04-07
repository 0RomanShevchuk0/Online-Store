import React, { FC, useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../../providers/ThemeProvider";
import { AuthInputs } from "../../types/types";
import LoginWithGooglePopUp from "../LoginWithGooglePopUp";

type PropsType = {
  title: string;
  onSubmit: SubmitHandler<AuthInputs>;
  registration?: boolean;
};

const MyForm: FC<PropsType> = ({ title, onSubmit, registration }) => {
	const { theme } = useContext(ThemeContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInputs>()

    return (
      <Container>
        <Title>{title}</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
					{registration &&
						<div>
							<Input
								type="text"
								placeholder="Name"
								{...register("name", { required: true })}
							/>
							{errors.name?.type === "required" && (
								<ErrorMessage>Name is required</ErrorMessage>
							)}
						</div>
					}
					<div>
						<Input
							type="email"
							placeholder="Email"
							{...register("email", { required: true })}
						/>
						{errors.email?.type === "required" && (
							<ErrorMessage>Email is required</ErrorMessage>
						)}
					</div>
					<div>
						<Input
							type="password"
							placeholder="Password"
							{...register("password", { required: true, minLength: 6 })}
						/>
						{errors.password?.type === "required" && (
							<ErrorMessage>Password is required</ErrorMessage>
						)}
						{errors.password && errors.password.type === "minLength" && (
							<ErrorMessage>Password must be at least 6 characters long</ErrorMessage> 
						)}
					</div>
          <Button type="submit" mytheme={theme}>{title}</Button>
					{registration ? 
						<div>Already a user? <Link to="/login">Log In</Link></div> :
						<div>Don't have an account? <Link to="/sign-up">Sign up</Link></div> 
					}
        </Form>
				<LoginWithGooglePopUp />
      </Container>
    )
}

export default MyForm;

const Container = styled.div`
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

const Input = styled.input`
  height: 53px;
  width: 360px;
  border-radius: 50px;
  border: none;
  padding: 20px;
  box-sizing: border-box;
  background-color: rgb(232, 240, 254);
  font-size: 20px;
`

const Button = styled.button<{mytheme?: 'light' | 'dark'}>`
  height: 53px;
  width: 360px;
  border-radius: 50px;
  background-color: ${(props) => props.mytheme === 'light' ? 
		'var(--light-accent)' : 'var(--dark-accent)'
	};
  color: ${(props) => props.mytheme === 'light' ? 
		'var(--dark)' : 'var(--light)'
	};
  font-size: 20px;

	&:hover {
		background-color: ${(props) => props.mytheme === 'light' ? 
			'var(--light-accent-hover)' : 'var(--dark-accent-hover)'
		};
	}
`

const ErrorMessage = styled.div`
	margin-left: 10px;
	color: #ce1d1d;
`
