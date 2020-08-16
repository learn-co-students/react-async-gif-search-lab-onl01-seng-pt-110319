import React, { Component } from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component{
  
    state = {
        gifs: []
    }


    render(){
        return (
            <div>
                < GifSearch fetchGif={this.fetchGif}/>
                < GifList results={this.state.gifs}/>
            </div>
        )
    }
    
    fetchGif = (query = 'dolphins') => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=Dc9RYBO02RM0qTDeH1AdgZIHH0guwXRx&limit=3`)
        .then(res => res.json())
        .then(data => {
            this.setState({gifs: data.data.map( entry => ({ url: entry.images.original.url}))})
        })
    }

    componentDidMount() {
        this.fetchGif()
    }


}

export default GifListContainer