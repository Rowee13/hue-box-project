import { Component } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

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

	paletteRoute(routeProps) {
		return generatePalette(this.findPalette(routeProps.match.params.id));
	}

	render() {
		return (
			<BrowserRouter>
				<Routes>
					<Route
						exact
						path="/"
						element={
							<Palette palette={generatePalette(SeedColors[4])} />
						}
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
