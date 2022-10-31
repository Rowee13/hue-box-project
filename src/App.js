import { Component } from "react";

import Palette from "./components/Palette";
import SeedColors from "./SeedColors";
import { generatePalette } from "./helpers/colorHeloer";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div>
				<Palette palette={generatePalette(SeedColors[4])} />
			</div>
		);
	}
}

export default App;
