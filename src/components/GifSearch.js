import React from 'react' 




export default class GifSearch extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {inputVal: ''}
    }

    onInputChange = (event) => {
        this.setState({
            inputVal: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.inputVal)
        console.log(this.props)
        this.props.gifInfo(this.state.inputVal)
    }

    render() {
        return (
            <div className="gif-search"> 
                
                <form onSubmit={this.handleSubmit} >
                    <input type="text" onChange={this.onInputChange} value={this.state.inputVal} /> 
                </form>

            </div>
        )
    }
}