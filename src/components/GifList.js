import React from 'react';

export default class GifList extends React.Component {

	constructor(props) {
		super()
	}

	render() {
		return (
			<div>
			<ul>
				<li><img src={this.props.gifs[0]}/></li>
				<li><img src={this.props.gifs[1]}/></li>
				<li><img src={this.props.gifs[2]}/></li>
			</ul>
			</div>
		)
	}

}