import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './componets/AppHeader';
import GoalsList from './componets/GoalsList';
import SearchPanel from './componets/SearchPanel';

const App = () => {
  return (
    <div>
      <span>{ (new Date()).toString() }</span>
      <AppHeader />
      <SearchPanel />
      <GoalsList />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('root'));