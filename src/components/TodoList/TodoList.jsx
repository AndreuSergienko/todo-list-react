import React, { Component } from "react";
import { TodoListItem } from "../TodoListItem";
import "./TodoList.css";

export class TodoList extends Component {
	render() {
		const { todoItems } = this.props;
		return (
			<ul className="list-group todo-list">
				{todoItems.map((item) => {
					const { id, ...itemOthers } = item;
					return (
						<li
							key={id}
							className="list-group-item"
						>
							<TodoListItem
								{...itemOthers}
								onDelete={() => this.props.onDelete(id)}
								onToggleControl={(propName) =>
									this.props.onToggleControl(id, propName)
								}
							/>
						</li>
					);
				})}
			</ul>
		);
	}
}
