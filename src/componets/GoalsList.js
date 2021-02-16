import React from 'react';

import GoalItem from './GoalItem';
import './GoalsList.css'

const GoalsList = ({ goalsData }) => {

    const elements = goalsData.map((item) => {

        const {id, ...itemProps} = item;

        return (
            <li key = {id} className="list-group-item">
                <GoalItem {...itemProps}/>
            </li>
        );
    });

    return (
      <ul className="list-group goals-list">
        {elements}
      </ul>
    );
  };

  export default GoalsList;