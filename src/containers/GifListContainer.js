import React from 'react'
// import { render } from 'react-dom'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'


export default class GifListContainer extends React.Component {


    constructor(props) {
        super(props)
        this.state ={ gifs: []}
    }

    getGifs = (query) => {
       let baseUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=foHh58IcK5V22YcMNnecPlyxKttYGWgd&rating=g`
       fetch(baseUrl)
       .then(resp => resp.json())
    .then(resp => {
        this.setState({
            gifs: resp.data.map(eachGif => eachGif.images.original.url)
        })
    })
    }

    componentDidMount() {
        this.getGifs()
    }
    

    callbackFunc = () => {
        console.log(console.log('hello'))
    }

    render() {
        return (
            <div>Gif list container 
                {/* <img src={`${this.state.gifs}`} alt="" />  */}
                <GifList gifProp={this.state.gifs}/>
                <GifSearch gifInfo={this.getGifs}/>
         
            </div>
        )
    }
}

