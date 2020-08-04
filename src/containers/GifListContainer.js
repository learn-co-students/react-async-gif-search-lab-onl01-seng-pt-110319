import React, {Component} from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'
class GifListContainer extends Component {

    constructor() {
        super()
        this.state = {
            search: "",
            
            giphy: []
        }
    }

    componentDidMount() {
        console.log("getGifs", this.getGifs())
        this.getGifs()

        
    }
    getGifs = (search) => {
       let url=`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=zlHkX6H98h8Q2JEAriR6pcQ9vsRRUl59&rating=g`
       console.log("url", url)
         fetch(url)
        .then(response => response.json())
        .then(({data}) => {
            
            this.setState({
                giphy: data.map(res => ({url: res.images.original.url}))
            }, () => {
                console.log("giphy", this.state.giphy)
            })
        })
    }

    
    handleOnSubmit = (input) => {
       this.getGifs(input)
    }
    render() {
        return(
            <div>
                <GifSearch submit={this.handleOnSubmit}/>
                <GifList images={this.state.giphy}/>
            </div>
        ) 
    }
}

export default GifListContainer