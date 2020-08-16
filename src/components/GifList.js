import React from 'react'

const GifList = (props) => {
  
  
    return (
            <h1>
                {props.results.map(e => <img key={e.url} src={e.url} />)}
            </h1>
        )
    
    
}

export default GifList