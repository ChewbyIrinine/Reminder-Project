import React from 'react';

import GoalItem from '../GoalItem';
import './GoalsList.css'

const GoalsList = ({
  goalsData,
  onDeleted,
  onToggleSpecial,
  onToggleDone }) => {

  const elements = goalsData.map((item) => {

    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <GoalItem {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleSpecial={() => onToggleSpecial(id)}
          onToggleDone={() => onToggleDone(id)} />
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