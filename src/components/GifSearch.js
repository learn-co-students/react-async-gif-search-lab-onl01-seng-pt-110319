import React, { Component } from 'react'


class GifSearch extends Component {
    state= {
        query: ""
    }
    
    handleSubmit = event => {
        event.preventDefault()
        this.props.grabGifs(this.state.query) 
    }

    render() {
        render (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={event => this.setState({query : event.target.value})} />
                </form> 
            </div>
        )
    }
}