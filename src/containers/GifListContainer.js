import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {
    state = {
        gifs: []
    }
    render() {
        return (
            <div>
                < GifSearch fetchGIFs={this.fetchGIFs}/>
                < GifList gifs={this.state.gifs}/>
            </div>
        )
    }

    fetchGIFs() {
        const baseURL = "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=6ZLJ81Gc14qQEtEGUxiPyVi5D7ZX2R8L&rating=g";
        fetch(baseURL)
        .then(res => res.json())
        .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }))})
        })
    }
    // fetchGIFs() {
    //     const baseURL = "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=6ZLJ81Gc14qQEtEGUxiPyVi5D7ZX2R8L&rating=g";
    //     fetch(baseURL)
    //     .then(res => res.json())
    //     .then(data => this.setState({
    //         gifs: data.data.map(gif => gif.images.original.url)
    //     }))
    // }

    componentDidMount() {
        this.fetchGIFs();
    }
}

export default GifListContainer;