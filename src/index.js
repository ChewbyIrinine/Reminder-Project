import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './componets/AppHeader';
import GoalsList from './componets/GoalsList';
import SearchPanel from './componets/SearchPanel';

const App = () => {

  const goalsData = [
    {text: 'Do something', special: false},
    {text: '???', special: false},
    {text: 'Profit', special: true}
  ]

  return (
    <div>
      <span>{ (new Date()).toString() }</span>
      <AppHeader />
      <SearchPanel />
      <GoalsList goalsData={goalsData} />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('root'));