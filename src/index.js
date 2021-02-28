import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './componets/AppHeader';
import GoalsList from './componets/GoalsList';
import SearchPanel from './componets/SearchPanel';
import ItemStatusFilter from './componets/ItemStatusFilter';

import './index.css';

const App = () => {

  const goalsData = [
    { text: 'Do something', special: false, id: 1 },
    { text: '???', special: false, id: 2 },
    { text: 'Profit', special: true, id: 3 }
  ]

  return (
    <div className="goals-app">
      <AppHeader toDo={12} done={30} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <GoalsList goalsData={goalsData} />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('root'));