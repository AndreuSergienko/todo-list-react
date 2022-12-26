import React, { Component } from "react";
import "./SearchPanel.css";

export class SearchPanel extends Component {
	render() {
		return (
			<input
				className="search-panel"
				type="search"
				placeholder="search something..."
			/>
		);
	}
}
