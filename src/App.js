import { Component } from "react";
import { Routes, Route, BrowserRouter, useParams } from "react-router-dom";

import PaletteList from "./components/PaletteList";
import Palette from "./components/Palette";
import SeedColors from "./SeedColors";
import { generatePalette } from "./helpers/colorHeloer";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { palettes: SeedColors };
		this.findPalette = this.findPalette.bind(this);
		this.paletteRoute = this.paletteRoute.bind(this);
	}

	findPalette(id) {
		return this.state.palettes.find(function (palette) {
			return palette.id === id;
		});
	}

	paletteRoute() {
		const { id } = useParams;
		return generatePalette(this.findPalette(id));
	}

	render() {
		return (
			<BrowserRouter>
				<Routes>
					<Route
						exact
						path="/"
						element={<PaletteList palettes={SeedColors} />}
					/>
					<Route
						exact
						path="/palette/:id"
						element={<Palette palette={this.paletteRoute()} />}
					/>
				</Routes>
			</BrowserRouter>
			/* <div>
				<Palette palette={generatePalette(SeedColors[4])} />
			</div> */
		);
	}
}

export default App;
