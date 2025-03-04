import { useState } from "react"

function App() {
	const [darkMode, setDarkMode] = useState(true)

	function handleSubmit() {
		setDarkMode(!darkMode)
	}

	return (
		<div id="body" className={darkMode ? "bg-gray-500" : "bg-white"}>
			<h2>dark mode w redux</h2>
			<button
				className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
				onClick={handleSubmit}
				id="submit"
			>
				Submit
			</button>
		</div>
	)
}

export default App
