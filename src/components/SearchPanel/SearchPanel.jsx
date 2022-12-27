import React, { Component } from "react";
import "./SearchPanel.css";

export class SearchPanel extends Component {
	render() {
		return (
			<input
				onChange={this.props.onSearch}
				className="search-panel"
				type="search"
				placeholder="search something..."
			/>
		);
	}
}
