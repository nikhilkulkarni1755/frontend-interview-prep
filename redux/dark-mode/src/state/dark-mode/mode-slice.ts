import { createSlice } from "@reduxjs/toolkit"

interface ModeState {
	darkMode: boolean
}

const initialState: ModeState = {
	darkMode: false,
}

const modeSlice = createSlice({
	name: "dark-mode",
	initialState,
	reducers: {
		toggle: (state) => {
			state.darkMode = !state.darkMode
		},
	},
})

export const { toggle } = modeSlice.actions

export default modeSlice.reducer
