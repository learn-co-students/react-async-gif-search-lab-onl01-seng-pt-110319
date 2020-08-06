import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component{
        state = {
            gifs: []
        }
    

    fetchGifs = (search) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=D3MlHVypJSp4R06npx7AXj2IewJ3KDLr&rating=g`)
            .then(res => res.json())
            .then(({ data }) => {
                this.setState({
                    gifs: data.map(gif => ({
                        url: gif.images.original.url
                    })).slice(0, 3)
                })
            })
    }

    componentDidMount() {
        this.fetchGifs()
    }
    
    render() {
        return(
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch fetchGifs={this.fetchGifs}/>
            </div>
        )
    }
}