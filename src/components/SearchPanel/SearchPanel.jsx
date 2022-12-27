import React, { Component } from "react";
import "./SearchPanel.css";

export class SearchPanel extends Component {
	constructor() {
		super();
		this.state = {
			term: "",
		};
	}

	onValueChange = ({ target: { value } }) => {
		this.setState((state) => {
			return {
				...state,
				term: value,
			};
		});
		this.props.onSearchChange(value);
	};

	render() {
		return (
			<input
				onChange={this.onValueChange}
				className="search-panel"
				value={this.state.term}
				type="search"
				placeholder="search something..."
			/>
		);
	}
}
