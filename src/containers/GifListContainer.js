import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {
    state = {
        gifs = []
    }

    fetchGifs = (searchTerm) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=ZHgrVdoa9jvi6ntR1LDG22GKh7ovgY0l&rating=g`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                gifs: data.map(gif => ({ url: gif.images.original.url }))
            })
        })
    }

    componentDidMount() {
        this.fetchGifs()
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.gifs} />
                <GifSearch fetchGifs={this.fetchGifs} />
            </div>
        )
    }

}

export default GifListContainer;