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
			term: "",
			filterBy: "all",
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

	onAdd = (value) => {
		this.setState((state) => {
			return {
				...state,
				todoItems: [
					...state.todoItems,
					{
						label: value,
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

	onFilter = (todoItems, filterBy) => {
		switch (filterBy) {
			case "active":
				return todoItems.filter((item) => !item.isCompleted);
			case "completed":
				return todoItems.filter((item) => item.isCompleted);
			default:
				return todoItems;
		}
	};

	onSearchChange = (term) => {
		this.setState((state) => {
			return {
				...state,
				term,
			};
		});
	};

	onFilterChange = (filterBy) => {
		this.setState((state) => {
			return {
				...state,
				filterBy,
			};
		});
	};

	onSearch = (todoItems, term) => {
		if (!term.length) return todoItems;
		return todoItems.filter((item) => {
			return item.label.toLowerCase().includes(term.toLowerCase());
		});
	};

	render() {
		const { todoItems, filterBy, term } = this.state;
		const displayItems = this.onFilter(
			this.onSearch(todoItems, term),
			filterBy
		);

		return (
			<div className="todo-app">
				<Header
					toDo={this.state.todoItems.filter((item) => !item.isCompleted).length}
					done={this.state.todoItems.filter((item) => item.isCompleted).length}
				/>
				<div className="d-flex gap-3">
					<SearchPanel onSearchChange={this.onSearchChange} />
					<ItemStatusFilter
						activeFilter={filterBy}
						onFilterChange={this.onFilterChange}
					/>
				</div>
				<TodoList
					todoItems={displayItems}
					onDelete={this.onDelete}
					onToggleControl={this.onToggleControl}
				/>
				<AddItemForm onAdd={this.onAdd} />
			</div>
		);
	}
}
