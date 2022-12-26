import React, { Component } from "react";
import "./Header.css";

export class Header extends Component {
	render() {
		const { toDo, done } = this.props;

		return (
			<div className="app-header">
				<h1 className="app-header-logo">Todo-List</h1>
				<span className="app-header-counter">
					{toDo} more to do, {done} done
				</span>
			</div>
		);
	}
}
