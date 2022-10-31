import { Component } from "react";

import Palette from "./components/Palette";
import SeedColors from "./SeedColors";
import { generatePalette } from "./helpers/colorHeloer";
import "./App.css";

class App extends Component {
	render() {
		console.log(generatePalette(SeedColors[4]));
		return (
			<div>
				<Palette {...SeedColors[4]} />
			</div>
		);
	}
}

export default App;
