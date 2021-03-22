import React, { Component } from 'react';
import ReactDom from 'react-dom';

import AppHeader from './componets/AppHeader';
import GoalsList from './componets/GoalsList';
import SearchPanel from './componets/SearchPanel';
import ItemStatusFilter from './componets/ItemStatusFilter';
import ItemAddForm from './componets/ItemAddForm'

import './index.css';

export default class App extends Component {

  maxId = 100;

  state = {
    goalsData: [
      { text: 'Do something', special: false, id: 1 },
      { text: '???', special: false, id: 2 },
      { text: 'Profit', special: true, id: 3 }
    ]
  };

  deleteItem = (id) => {
    this.setState(({ goalsData }) => {
      const idx = goalsData.findIndex((el) => el.id === id)

      const newGoalsData = [
        ...goalsData.slice(0, idx),
        ...goalsData.slice(idx + 1)
      ];

      console.log(newGoalsData);

      return {
        goalsData: newGoalsData
      }
    });
  };

  addItem = (text) => {
    
    const newItem = {
      text: text,
      special: false,
      id: this.maxId++
    }

    console.log(this.maxId);

    this.setState(({goalsData}) => {
      const newGoalsData = [...goalsData, newItem]

      return {
        goalsData: newGoalsData
      }
    })
  }

  render() {
    return (
      <div className="goals-app" >
        <AppHeader toDo={12} done={30} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <GoalsList
          goalsData={this.state.goalsData}
          onDeleted={this.deleteItem}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));