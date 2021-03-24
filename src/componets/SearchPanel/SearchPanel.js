import React, { Component } from "react";

import "./SearchPanel.css";

export default class SearchPanel extends Component {
	state = {
		term: "",
	};

	onSearchChange = (e) => {
		const term = e.target.value;
		this.setState({
			term: term,
		});
		this.props.onSearchChange(term);
	};

	render() {
		return (
			<input
				type="test"
				className="form-control search-input"
				placeholder="search..."
				onChange={this.onSearchChange}
				value={this.state.term}
			/>
		);
	}
}
