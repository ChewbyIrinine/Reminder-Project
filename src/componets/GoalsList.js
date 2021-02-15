import React from 'react';

import GoalItem from './GoalItem';

const GoalsList = () => {
    const items = ['Do something', '???', 'Profit'];

    return (
      <ul>
        <li><GoalItem /></li>
        <li><GoalItem /></li>
        <li><GoalItem /></li>
      </ul>
    );
  };

  export default GoalsList;