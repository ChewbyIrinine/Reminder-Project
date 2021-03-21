import React, { Component } from 'react';

import './GoalItem.css'

export default class GoalItem extends Component {

    constructor() {
        super();
    }

    state = {
        done: false
    }

    onLabelClick = () => {
        this.setState({
            done: true
        });
    }

    render() {

        const { text, special = false } = this.props;
        const { done } = this.state;

        let classNames = 'goal-item';
        if (done) {
            classNames += ' done';
        }

        const itemStyle = {
            color: special ? 'steelblue' : 'black',
            fontWeight: special ? 'bold' : 'normal'
        };

        return (
            <span className={classNames}>
                <span className="goal-item-label"
                    style={itemStyle}
                    onClick={this.onLabelClick}>
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
};