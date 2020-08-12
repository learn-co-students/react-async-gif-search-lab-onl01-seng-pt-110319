import React, { Component } from 'react';

class GifSearch extends Component {

  state = {
      formInput: ''
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <input type="text" value={this.state.query} onChange={e => this.setState()} />
        </form>
      </div>
    )
  };
  

  submit = e => {
    e.preventDefault()
    this.props.fetchGifs(this.state.formInput)
};

};

export default GifSearch;