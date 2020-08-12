import React, { Component } from 'react'
import GifList from '../compoents/Giflist'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }
    render() {
        return (
            <div>
                <GifSearch grabGifs={this.grabGifs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    grabGifs = ( query =  "dogs" ) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(res => res.json())
        .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
        })
    }
 componetDidMount() {
     this.grabgifs()
 }
}

export default GifListContainer


