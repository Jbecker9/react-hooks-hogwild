import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";

function App() {

	const importedHogs = hogs.map((hog) => {
		return {...hog, isSelected: false}
	})
	const [pigs, setPigs] = useState(importedHogs)
	// console.log(pigs)
	return (
		<div className="App">
			<Nav/>
			<HogList pigs={pigs}
			setPigs={setPigs}
			/>
		</div>
	);
}

export default App;
