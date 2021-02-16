import React from 'react';

import './GoalItem.css'

const GoalItem = ( { text, special = false } ) => {

    const itemStyle = {
        color: special ? 'tomato' : 'black'
    };

    return (
        <span
            className="goal-item"
            style={itemStyle}
        >{ text }</span>
    );
};

export default GoalItem;