import { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import "./Navbar.css";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { format: "hex" };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({ format: e.target.value });
		this.props.handleChange(e.target.value);
	}

	render() {
		const { level, changeLevel } = this.props;
		const { format } = this.state;

		return (
			<header className="Navbar">
				<div className="logo">
					<a href="/">Hue Box</a>
				</div>
				<div className="slider-container">
					<span>Level: {level}</span>
					<div className="slider">
						<Slider
							defaultValue={level}
							min={100}
							max={900}
							step={100}
							onAfterChange={changeLevel}
						/>
					</div>
				</div>
				<div className="select-container">
					<FormControl variant="standard">
						<InputLabel id="demo-simple-select-standard-label">
							Color Format
						</InputLabel>
						<Select value={format} onChange={this.handleChange}>
							<MenuItem value="hex">HEX - #ffffff</MenuItem>
							<MenuItem value="rgb">
								RGB - rgb(255, 255, 255)
							</MenuItem>
							<MenuItem value="rgba">
								RGBA - rgb(255, 255, 255, 1.0)
							</MenuItem>
						</Select>
					</FormControl>
				</div>
			</header>
		);
	}
}

export default Navbar;
