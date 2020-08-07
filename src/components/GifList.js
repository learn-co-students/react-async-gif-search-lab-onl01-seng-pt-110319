import React from 'react' 

export default class GifList extends React.Component {

     propsOfGifs = () => {
        return this.props.gifProp.map(gif => {
            return <img src={gif} alt='' key={gif} />
        })
    }
    render() {

        return(
            <div>
                Gif List div
                <ul>
                    <li> 
                        {/* {this.propsOfGifs} */}
                        {this.propsOfGifs()}
                        {/* <img src={this.props.gifProp} alt='' /> */}
                    </li>
                </ul>
            </div>
        )
    }
}