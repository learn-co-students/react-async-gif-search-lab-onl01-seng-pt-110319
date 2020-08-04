import React, {Component} from 'react';

class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            input: ""
        }
    }

    handleInput = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.submit(this.state.input)
        this.setState({
            input: ""
        })
    }

   
    
    render() {
        return(
           <form onSubmit={this.handleSubmit}>
               <input type="text" name="search" value={this.state.input} onChange={this.handleInput} />
               <input type="submit" name="submit" value="Search" />
           </form>
        )
    }
}
export default GifSearch