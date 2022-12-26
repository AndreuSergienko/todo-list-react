import React, { Component } from "react";
import "./AddItemForm.css";

export class AddItemForm extends Component {
	render() {
		return (
			<div className="add-item-form">
				<button
					onClick={this.props.onAdd}
					className="add-item-form-button"
				>
					AddItemForm
				</button>
			</div>
		);
	}
}
