import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
    gifs: []
  }

  render() {
    return(
      <div>
          <GifList gifs={this.state.gifs}/>
          <GifSearch fetchGifs={this.gifsFetch}/>
      </div>
    )
  }

  gifsFetch = (search) => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=pOMAl0Nncliqp8V8qv0gulkSm2y9ibns&q=${search}&limit=3&offset=0&rating=pg-13&lang=en`)
    .then(res=>res.json())
    .then(({data})=>{
        this.setState({
            gifs: data.map(gif=> ({url: gif.images.original.url}))
        })
    })
  }

  componentDidMount() {
    this.gifsFetch()
  }
}

export default GifListContainer