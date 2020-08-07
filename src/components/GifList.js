import React, { Component } from 'react'

export default class GifList extends Component {
    render() {
        return (
            <div>
                {this.props.gifs.map((gif) => {
                    return(
                        <li>
                            <img src={gif.url} alt = ''/>
                        </li>
                    )
                })}
            </div>
        )
    }
}