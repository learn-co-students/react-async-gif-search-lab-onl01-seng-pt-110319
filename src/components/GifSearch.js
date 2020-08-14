import React from 'react';

export default class GifSearch extends React.Component {

	constructor(props) {
		super()
		this.state = {
			search: ""
		}
	}

	handleChange = (event) => {
		event.preventDefault()
		this.setState({
			search: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.handleSearch(this.state.search)
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
				Enter a Search Term:
				<input id="search" name="search" onChange={this.handleChange} value={this.state.search}/>
				</label>

				<button type="submit">Search</button>
			</form>
		)
	}
	
}

