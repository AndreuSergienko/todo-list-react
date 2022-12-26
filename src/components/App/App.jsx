import "./App.css";
import { Component } from "react";
import {
	Header,
	SearchPanel,
	TodoList,
	ItemStatusFilter,
	AddItemForm,
} from "..";

export class App extends Component {
	constructor() {
		super();
		this.state = {
			todoItems: [
				{
					label: "Drink Coffee",
					isCompleted: false,
					isImportant: false,
					id: 1,
				},
				{
					label: "Build Awesome React App",
					isCompleted: false,
					isImportant: false,
					id: 2,
				},
				{
					label: "Go to sleep",
					isCompleted: false,
					isImportant: false,
					id: 3,
				},
			],
		};
	}

	onDelete = (id) => {
		this.setState((state) => {
			return {
				...state,
				todoItems: state.todoItems.filter((item) => item.id !== id),
			};
		});
	};

	onAdd = () => {
		this.setState((state) => {
			return {
				...state,
				todoItems: [
					...state.todoItems,
					{
						label: "New Item",
						id: state.todoItems.length + 1,
					},
				],
			};
		});
	};

	onToggleCompleted = (id) => {
		this.setState((state) => {
			const currId = state.todoItems.findIndex((item) => item.id === id);
			return {
				...state,
				todoItems: state.todoItems.map((item, index) => ({
					...item,
					isCompleted: index === currId ? !item.isCompleted : item.isCompleted,
				})),
			};
		});
	};

	onToggleImportant = (id) => {
		this.setState((state) => {
			const currId = state.todoItems.findIndex((item) => item.id === id);
			return {
				...state,
				todoItems: state.todoItems.map((item, index) => ({
					...item,
					isImportant: index === currId ? !item.isImportant : item.isImportant,
				})),
			};
		});
	};

	render() {
		return (
			<div className="todo-app">
				<Header
					toDo={this.state.todoItems.filter((item) => !item.isCompleted).length}
					done={this.state.todoItems.filter((item) => item.isCompleted).length}
				/>
				<div className="d-flex gap-3">
					<SearchPanel />
					<ItemStatusFilter />
				</div>
				<TodoList
					todoItems={this.state.todoItems}
					onDelete={this.onDelete}
					onToggleCompleted={this.onToggleCompleted}
					onToggleImportant={this.onToggleImportant}
				/>
				<AddItemForm onAdd={() => this.onAdd()} />
			</div>
		);
	}
}
