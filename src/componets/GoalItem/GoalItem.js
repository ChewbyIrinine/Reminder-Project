import React, { Component } from 'react';

import './GoalItem.css'

export default class GoalItem extends Component {

    constructor() {
        super();
    }

    state = {
        done: false,
        special: false
    }

    onLabelClick = () => {
        this.setState(({ done }) => {
            return {
                done: !done
            }
        })
    }

    onMarkSpecial = () => {
        this.setState(({ special }) => {
            return {
                special: !special
            }
        })
    }

    render() {

        const { text } = this.props;
        const { done, special } = this.state;

        let classNames = 'goal-item';

        if (done) {
            classNames += ' done';
        }

        if (special) {
            classNames += ' special';
        }

        return (
            <span className={classNames}>
                <span className="goal-item-label"
                    onClick={this.onLabelClick}>
                    {text}
                </span>

                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={this.onMarkSpecial}>
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