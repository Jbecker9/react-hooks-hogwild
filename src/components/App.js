import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";

function App() {
	const [isSelected, setSelected] = useState(false)
	// console.log(hogs)
	return (
		<div className="App">
			<Nav />
			<HogList hogs={hogs} 
			isSelected={isSelected} 
			setSelected={setSelected}/>
		</div>
	);
}

export default App;
