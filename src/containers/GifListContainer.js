import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    componentDidMount() {
        this.fetchGifs()
    }

    componentDidUpdate() {

        console.log("Good job your search worked!")
    }

    fetchGifs = (term = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${term}&api_key=mmFBjJEU7SuRK5LPD57Kh4BrshLjOuCH&rating=g&limit=3`)
            .then(resp => resp.json())
            .then(data => {
                console.log ({ data })
                this.setState({ gifs: data.data })
            })
    }

    handleSubmit = (searchTerm) => {
        this.fetchGifs(searchTerm)
    }

    render() {
        return (
            <React.Fragment>
                <GifSearch handleSubmit={this.handleSubmit} />
                <GifList gifs={this.state.gifs} />
            </React.Fragment>
        )
    }
}

export default GifListContainer