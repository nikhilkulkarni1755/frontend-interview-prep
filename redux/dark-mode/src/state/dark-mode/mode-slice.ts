import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

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
	extraReducers: (builder) => {
		builder
			.addCase(toggleAsync.pending, () => {
				console.log("promise pending")
			})
			.addCase(toggleAsync.fulfilled, (state) => {
				console.log("promise fulfilled")
				state.darkMode = !state.darkMode
			})
	},
})

export const toggleAsync = createAsyncThunk(
	"async/toggle",
	async (state: boolean) => {
		await new Promise((resolve) => setTimeout(resolve, 1000))
		return state
	}
)

export const { toggle } = modeSlice.actions

export default modeSlice.reducer
