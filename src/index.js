import React from 'react';
import ReactDom from 'react-dom';

const AppHeader = () => {
  return (
    <h1>My Goals List</h1>
  )
};

const SearchPanel = () => {
  const searchText = 'search...'
  const searchStyle = {
    fontSize: '20px'
  };
  
  return <input
  style={searchStyle}
  placeholder={searchText}
  />
};

const items = ['Do something', '???', 'Profit'];

const GoalsList = () => {
  return (
    <ul>
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
      <li>{ items[2] }</li>
    </ul>
  );
};

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