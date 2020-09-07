import React from 'react'

class GifSearch extends React.Component {

    state = {
        searchTerm: ""
    }

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.handleSubmit(this.state.searchTerm)
        this.setState({ searchTerm: "" })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="search" value={this.state.searchTerm} onChange={this.handleChange} />
                    {/* <input type="submit" value="search" /> */}
                    <br />
                    <br />
                </form>
            </div>
        )
    }
}


export default GifSearch