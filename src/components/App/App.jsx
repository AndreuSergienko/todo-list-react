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
			initialTodoItems: [
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

	onAdd = (label) => {
		this.setState((state) => {
			return {
				...state,
				todoItems: [
					...state.todoItems,
					{
						label,
						id: state.todoItems.length + 1,
					},
				],
			};
		});
	};

	onToggleControl = (id, propName) => {
		this.setState((state) => {
			const currId = state.todoItems.findIndex((item) => item.id === id);
			return {
				...state,
				todoItems: state.todoItems.map((item, index) => ({
					...item,
					[propName]: index === currId ? !item[propName] : item[propName],
				})),
			};
		});
	};

	onSearch = ({ target: { value } }) => {
		this.setState(({ initialTodoItems, ...others }) => {
			return {
				...others,
				todoItems: initialTodoItems.filter(({ label }) =>
					label.toLowerCase().includes(value.toLowerCase())
				),
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
					<SearchPanel onSearch={this.onSearch} />
					<ItemStatusFilter />
				</div>
				<TodoList
					todoItems={this.state.todoItems}
					onDelete={this.onDelete}
					onToggleControl={this.onToggleControl}
				/>
				<AddItemForm onAdd={(label) => this.onAdd(label)} />
			</div>
		);
	}
}
