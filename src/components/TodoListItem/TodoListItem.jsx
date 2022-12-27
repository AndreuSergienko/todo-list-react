import { Component } from "react";
import "./TodoListItem.css";

export class TodoListItem extends Component {
	render() {
		const { label, onToggleControl, onDelete, isImportant, isCompleted } =
			this.props;

		return (
			<span
				className={`todo-list-item ${isCompleted ? "done" : ""} 
				${isImportant ? "important" : ""}`}
			>
				<span
					className="todo-list-item-label"
					onClick={() => onToggleControl("isCompleted")}
				>
					{label}
				</span>

				<span className="d-flex todo-btn-group">
					<button
						type="button"
						className="btn btn-outline-danger btn-sm"
						onClick={onDelete}
					>
						<i className="bi bi-trash3"></i>
					</button>

					<button
						type="button"
						className="btn btn-outline-danger btn-sm btn-important"
						onClick={() => onToggleControl("isImportant")}
					>
						<i className="bi bi-exclamation"></i>
					</button>
				</span>
			</span>
		);
	}
}
