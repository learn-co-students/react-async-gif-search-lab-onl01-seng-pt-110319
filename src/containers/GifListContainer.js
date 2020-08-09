import React, {Component} from 'react';

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=MuQEGH6QVvg1E2KKFuPBJ3Z522fFzLwM&rating=g')
        .then(response => response.json())
        .then(data => {
            this.setState({gifs: data})
        })
    }

    render() {
        return(
        <div>{this.state.gifs.map(gif => <li>{gif.images.original.url}</li>)}</div>
        )
    }
}

export default GifListContainer
