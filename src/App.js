import { Component } from "react";

import Palette from "./components/Palette";
// import SeedColors from "./SeedColors";
import "./App.css";
import SeedColors from "./SeedColors";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Palette {...SeedColors[4]} />
			</div>
		);
	}
}

export default App;
