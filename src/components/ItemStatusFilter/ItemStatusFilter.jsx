import React, { Component } from "react";
import "./ItemStatusFilter.css";

export class ItemStatusFilter extends Component {
	constructor() {
		super();
		this.state = {
			buttons: [
				{
					name: "all",
					label: "All",
				},
				{
					name: "active",
					label: "Active",
				},
				{
					name: "completed",
					label: "Completed",
				},
			],
		};
	}

	render() {
		const { onFilterChange, activeFilter } = this.props;

		return (
			<div className="btn-group">
				{this.state.buttons.map(({ name, label }) => {
					return (
						<button
							onClick={() => onFilterChange(name)}
							key={name}
							className={`btn ${
								name === activeFilter ? "btn-info" : "btn-outline-secondary"
							}`}
						>
							{label}
						</button>
					);
				})}
			</div>
		);
	}
}
