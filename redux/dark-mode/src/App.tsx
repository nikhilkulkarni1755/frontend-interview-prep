import { useState } from "react"

function App() {
	const [darkMode, setDarkMode] = useState(false)

	function handleSubmit() {
		setDarkMode(!darkMode)
	}

	return (
		<div className={darkMode ? "bg-black" : "bg-white"}>
			<h2 className={darkMode ? "text-blue-200" : "text-black"}>
				Interactive Website
			</h2>
			<button
				className={darkMode ? "text-blue-200" : "text-black"}
				onClick={handleSubmit}
			>
				Toggle Dark Mode
			</button>
		</div>
	)
}

export default App
