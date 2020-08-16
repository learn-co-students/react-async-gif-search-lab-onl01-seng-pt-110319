import React, { Component } from 'react'

class GifSearch extends Component {
  
    state = {
        query:""
    }
  
    render(){
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
                </form>
            </div>
        )
    }


    submitHandler = (event) => {
        event.preventDefault()
        this.props.fetchGif(this.state.query)
    }
}



export default GifSearch