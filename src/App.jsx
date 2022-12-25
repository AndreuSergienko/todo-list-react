import './App.css';
import { Component } from 'react';
import { Header, SearchPanel, TodoList } from './components';

export class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<SearchPanel />
				<TodoList />
			</div>
		);
	}
}
