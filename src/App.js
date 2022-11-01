import { Component } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Palette from "./components/Palette";
import SeedColors from "./SeedColors";
import { generatePalette } from "./helpers/colorHeloer";
import "./App.css";

class App extends Component {
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
						element={<h1>INDIVIDUAL PALETTE</h1>}
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
