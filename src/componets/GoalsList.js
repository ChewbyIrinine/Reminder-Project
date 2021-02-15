import React from 'react';

import GoalItem from './GoalItem';

const GoalsList = () => {
    const items = ['Do something', '???', 'Profit'];

    return (
      <ul>
        <li><GoalItem text='Buy cheese' special /></li>
        <li><GoalItem text='Buy tomatoes' special /></li>
        <li><GoalItem text='Make pizza'  /></li>
      </ul>
    );
  };

  export default GoalsList;