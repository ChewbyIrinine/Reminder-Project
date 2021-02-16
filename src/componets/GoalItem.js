import React from 'react';

import './GoalItem.css'

const GoalItem = ({ text, special = false }) => {

    const itemStyle = {
        color: special ? 'steelblue' : 'black',
        fontWeight: special ? 'bold' : 'normal'
    };

    return (
        <span className="goal-item">
            <span className="goal-item-label"
                style={itemStyle}>
                {text}
            </span>

            <button type="button"
                className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation" />
            </button>

            <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
            </button>
        </span>
    );
};

export default GoalItem;