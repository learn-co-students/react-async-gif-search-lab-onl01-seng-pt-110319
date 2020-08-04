import React, {Component} from 'react';

class GifList extends Component {
    
    render() {
        const images = this.props.images.map(image =>{
            return(<li><img key={image.url} src={image.url} alt="giphy" /></li>)}
         )
        console.log("props images: ", this.props.images)
        return(
            <div>
                {images}
            </div>
        )
    }
}

export default GifList

