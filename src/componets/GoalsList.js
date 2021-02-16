import React from 'react';

import GoalItem from './GoalItem';

const GoalsList = ({ goalsData }) => {

    const elements = goalsData.map((item) => {
        return (
            <li>
                <GoalItem {...item}/>
            </li>
        )
    });

    return (
      <ul>
        {elements}
      </ul>
    );
  };

  export default GoalsList;