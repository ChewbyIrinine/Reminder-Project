import React, { Component } from "react";

import AppHeader from "../AppHeader";
import GoalsList from "../GoalsList";
import SearchPanel from "../SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter";
import ItemAddForm from "../ItemAddForm";

import "./App.css";

export default class App extends Component {
	maxId = 100;

	state = {
		goalsData: [
			this.createGoalItem("Do something"),
			this.createGoalItem("???"),
			this.createGoalItem("Profit"),
		],
		term: "",
		filter: "all", // all, active, done
	};

	createGoalItem(text) {
		return {
			text,
			special: false,
			done: false,
			id: this.maxId++,
		};
	}

	deleteItem = (id) => {
		this.setState(({ goalsData }) => {
			const idx = goalsData.findIndex((el) => el.id === id);

			const newGoalsData = [
				...goalsData.slice(0, idx),
				...goalsData.slice(idx + 1),
			];

			console.log(newGoalsData);

			return {
				goalsData: newGoalsData,
			};
		});
	};

	addItem = (text) => {
		this.setState(({ goalsData }) => {
			const newGoalsData = [...goalsData, this.createGoalItem(text)];

			return {
				goalsData: newGoalsData,
			};
		});
	};

	toggleProperty(arr, id, propName) {
		// 1. Update object
		const idx = arr.findIndex((el) => el.id === id);
		const newItem = { ...arr[idx], [propName]: !arr[idx][propName] };

		// 2. Construct new array
		return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
	}

	onToggleSpecial = (id) => {
		this.setState(({ goalsData }) => {
			return {
				goalsData: this.toggleProperty(goalsData, id, "special"),
			};
		});
		console.log("toggle special ", id);
	};

	onToggleDone = (id) => {
		this.setState(({ goalsData }) => {
			return {
				goalsData: this.toggleProperty(goalsData, id, "done"),
			};
		});

		console.log("toggle done ", id);
	};

	search(items, term) {
		if (term === 0) {
			return items;
		}

		return items.filter((el) => {
			return el.text.toLowerCase().indexOf(term.toLowerCase()) > -1;
		});
	}

	onSearchChange = (term) => {
		this.setState({ term });
	};

	filter(items, filter) {
		switch (filter) {
			case "all":
				return items;
			case "active":
				return items.filter((el) => !el.done);
			case "done":
				return items.filter((el) => el.done);
			default:
				return items;
		}
	}

	onFilterChange = (filter) => {
		this.setState({ filter });
	};

	render() {
		const { goalsData, term, filter } = this.state;

		const visibleItems = this.filter(this.search(goalsData, term), filter);

		const doneCount = goalsData.filter((el) => el.done).length;
		const toDoCount = goalsData.length - doneCount;

		return (
			<div className="goals-app">
				<AppHeader toDo={toDoCount} done={doneCount} />
				<div className="top-panel d-flex">
					<SearchPanel onSearchChange={this.onSearchChange} />
					<ItemStatusFilter
						filter={filter}
						onFilterChange={this.onFilterChange}
					/>
				</div>
				<GoalsList
					goalsData={visibleItems}
					onDeleted={this.deleteItem}
					onToggleSpecial={this.onToggleSpecial}
					onToggleDone={this.onToggleDone}
				/>
				<ItemAddForm onItemAdded={this.addItem} />
			</div>
		);
	}
}
