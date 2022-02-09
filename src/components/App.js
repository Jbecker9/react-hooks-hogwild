import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";

function App() {
	const [isSelected, setSelected] = useState(false)
	const importedHogs = hogs.map((hog) => {
		return {...hog,isSelected: false}
	})
	const [pigs, setPigs] = useState(importedHogs)
	// console.log(hogs)
	return (
		<div className="App">
			<Nav />
			<HogList hogs={pigs} />
		</div>
	);
}

export default App;
