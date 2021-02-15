import React from 'react';

const GoalItem = ( { text, special = false } ) => {

    const itemStyle = {
        color: special ? 'tomato' : 'black'
    };

    return <span style={itemStyle}>{ text }</span>
}

export default GoalItem;