import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        search: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchGifs(this.state.search)
    }

    render() {
        return(
            <div>
                <h3>Enter a Search Term:</h3>
                <form onSubmit={this.handleSubmit}>
                    <input text='text' value={this.state.search} onChange={event => 
                        this.setState({
                            search: event.target.value
                            })
                        } 
                    />
                    <input type='submit' value='Find Gifs' className='btn-success'/>
                </form>
            </div>
        )
    }
}