import { createSlice } from '@reduxjs/toolkit';


type StateType = {
	name: string | null,
	email: string | null,
	id: string | null,
	isAuthorized: boolean
}

const userSlice = createSlice({
	name: "user",
	initialState: {
		name: null,
		email: null,
		id: null,
		isAuthorized: false
	} as StateType,
	reducers: {
		setUser(state, action) {
			state.name = action.payload.name
			state.email = action.payload.email
			state.id = action.payload.id
			if(action.payload.email) state.isAuthorized = true
		},
		removeUser(state) {
			state.name = null
			state.email = null
			state.id = null
			state.isAuthorized = false
		}
	}
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer