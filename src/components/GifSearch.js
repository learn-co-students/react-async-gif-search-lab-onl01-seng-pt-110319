import React from 'react';

class GifSearch extends React.Component {
    state = {
        searchTerm: ""
    }

    onInputChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.fetchGifs(this.state.searchTerm)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" value={this.state.searchTerm} onChange={this.onInputChange} />
                </form>
            </div>
        )
    }

}

export default GifSearch;