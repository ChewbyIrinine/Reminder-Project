import React, { Component } from "react";

import "./GoalItem.css";

export default class GoalItem extends Component {
	render() {
		const {
			text,
			onDeleted,
			onToggleSpecial,
			onToggleDone,
			special,
			done,
		} = this.props;

		let classNames = "goal-item";

		if (done) {
			classNames += " done";
		}

		if (special) {
			classNames += " special";
		}

		return (
			<span className={classNames}>
				<span className="goal-item-label" onClick={onToggleDone}>
					{text}
				</span>

				<button
					type="button"
					className="btn btn-outline-success btn-sm float-right"
					onClick={onToggleSpecial}
				>
					<i className="fa fa-exclamation" />
				</button>

				<button
					type="button"
					className="btn btn-outline-danger btn-sm float-right"
					onClick={onDeleted}
				>
					<i className="fa fa-trash-o" />
				</button>
			</span>
		);
	}
}
