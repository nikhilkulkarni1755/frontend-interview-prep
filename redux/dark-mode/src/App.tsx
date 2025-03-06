import { AppDispatch, RootState } from "./state/store"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggle, toggleAsync } from "./state/dark-mode/mode-slice"
import { createSelector } from "@reduxjs/toolkit"

function App() {
	// const [darkMode, setDarkMode] = useState(false)

	// function handleSubmit() {
	// setDarkMode(!darkMode)
	// }

	// const selectIsPending = createSelector(
	// 	(state: RootState) => state.modeSlice,
	// 	(modeSlice) =>
	// 		modeSlice.darkMode !== undefined && modeSlice.darkMode.isPending
	// )

	const darkMode = useSelector((state: RootState) => state.modeSlice.darkMode)
	// const isPending = useSelector((state: RootState) =>
	// 	state.modeSlice?.loading !== undefined ? state.modeSlice.loading : false
	// )
	// const isPending = useSelector((state: RootState) => state.modeSlice.isPending)
	const dispatch = useDispatch<AppDispatch>()

	return (
		<div className={darkMode ? "bg-black" : "bg-white"}>
			<h2 className={darkMode ? "text-blue-200" : "text-black"}>
				Interactive Website
			</h2>
			<button
				className={darkMode ? "text-blue-200" : "text-black"}
				onClick={() => dispatch(toggleAsync(darkMode))}
			>
				Toggle Dark Mode
			</button>
		</div>
	)
}

export default App
