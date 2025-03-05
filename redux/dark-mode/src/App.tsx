import { RootState } from "./state/store"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggle } from "./state/dark-mode/mode-slice"

function App() {
	// const [darkMode, setDarkMode] = useState(false)

	// function handleSubmit() {
	// setDarkMode(!darkMode)
	// }

	const darkMode = useSelector((state: RootState) => state.modeSlice.darkMode)
	const dispatch = useDispatch()

	return (
		<div className={darkMode ? "bg-black" : "bg-white"}>
			<h2 className={darkMode ? "text-blue-200" : "text-black"}>
				Interactive Website
			</h2>
			<button
				className={darkMode ? "text-blue-200" : "text-black"}
				onClick={() => dispatch(toggle())}
			>
				Toggle Dark Mode
			</button>
		</div>
	)
}

export default App
