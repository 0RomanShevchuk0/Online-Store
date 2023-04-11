import { createSlice } from '@reduxjs/toolkit';
import { getAuth } from 'firebase/auth';
import { Dispatch } from 'react';


type StateType = {
	name: string | null,
	email: string | null,
	id: string | null,
	isAuthorized: boolean,
	auth: any
}

const userSlice = createSlice({
	name: "user",
	initialState: {
		name: null,
		email: null,
		id: null,
		isAuthorized: false,
		auth: null,
	} as StateType,
	reducers: {
		setUser(state, action) {
			state.name = action.payload.name
			state.email = action.payload.email
			state.id = action.payload.id
			state.isAuthorized = true
		},
		removeUser(state) {
			const auth = getAuth()
			auth.signOut()

			state.name = null
			state.email = null
			state.id = null
			state.isAuthorized = false
		}
	}
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer