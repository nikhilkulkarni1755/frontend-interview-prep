import { configureStore } from "@reduxjs/toolkit"
import modeSlice from "./dark-mode/mode-slice"

export const store = configureStore({
	reducer: {
		modeSlice: modeSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
