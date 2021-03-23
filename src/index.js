import React, { Component } from "react";
import ReactDom from "react-dom";

import AppHeader from "./componets/AppHeader";
import GoalsList from "./componets/GoalsList";
import SearchPanel from "./componets/SearchPanel";
import ItemStatusFilter from "./componets/ItemStatusFilter";
import ItemAddForm from "./componets/ItemAddForm";

import "./index.css";

export default class App extends Component {
    maxId = 100;

    state = {
        goalsData: [
            this.createGoalItem("Do something"),
            this.createGoalItem("???"),
            this.createGoalItem("Profit"),
        ],
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

    onToggleSpecial = (id) => {
        console.log("toggle special ", id);
    };

    onToggleDone = (id) => {
        this.setState(({ goalsData }) => {
            // 1. Update object
            const idx = goalsData.findIndex((el) => el.id === id);
            const newItem = { ...goalsData[idx], done: !goalsData[idx].done };

            // 2. Construct new array
            const newArray = [
                ...goalsData.slice(0, idx),
                newItem,
                ...goalsData.slice(idx + 1),
            ];

            return {
                goalsData: newArray,
            };
        });

        console.log("toggle done ", id);
    };

    render() {
        return (
            <div className="goals-app">
                <AppHeader toDo={12} done={30} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <GoalsList
                    goalsData={this.state.goalsData}
                    onDeleted={this.deleteItem}
                    onToggleSpecial={this.onToggleSpecial}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById("root"));
