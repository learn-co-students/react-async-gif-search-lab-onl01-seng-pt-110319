import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends React.Component {

	constructor(props) {
		super()
		this.state = {
			gifList: []
		}
	}

	handleSearch = (searchTerm) => {
  	fetch(`https://api.giphy.com/v1/gifs/search?api_key=9al3lRQFtMMR8TtHWFax9iA9Vua8DpF8&q=${searchTerm}&limit=3`)
  		.then(resp => resp.json())
  		.then(json => {
  			this.setState({
  				gifList: json.data.map(gif=>gif.images.original.url)
  			})
  		})
  }	

	render() {
		return(
			<div>
				<GifList gifs={this.state.gifList} />
				<GifSearch handleSearch={this.handleSearch}/>
			</div>
		)
	}

	componentDidMount() {
		fetch('https://api.giphy.com/v1/gifs/search?api_key=9al3lRQFtMMR8TtHWFax9iA9Vua8DpF8&q=dog&limit=3')
			.then(response => response.json())
			.then(json => {
				this.setState({
					gifList: json.data.map(gif => gif.images.original.url)
				})
			})
	}

}