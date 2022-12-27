import React, { Component } from "react";
import "./AddItemForm.css";

export class AddItemForm extends Component {
	constructor() {
		super();
		this.state = {
			inputValue: "",
		};
	}

	onValueChange = ({ target: { value } }) => {
		this.setState((state) => {
			return {
				...state,
				inputValue: value,
			};
		});
	};

	onSubmit = (evt) => {
		evt.preventDefault();
		if (!this.state.inputValue) {
			alert('The field shouldn"t be empty');
		} else {
			this.props.onAdd(this.state.inputValue);
			this.setState((state) => {
				return {
					...state,
					inputValue: "",
				};
			});
		}
	};

	render() {
		return (
			<form
				onSubmit={this.onSubmit}
				className="add-item-form d-flex gap-4"
			>
				<input
					name="label"
					onChange={this.onValueChange}
					type="text"
					className="add-item-form-control form-control"
					value={this.state.inputValue}
				/>
				<button
					type="submit"
					className="add-item-form-button"
				>
					AddItemForm
				</button>
			</form>
		);
	}
}
