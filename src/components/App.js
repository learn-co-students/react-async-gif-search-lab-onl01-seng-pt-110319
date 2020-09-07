import React from 'react'
import GifListContainer from '../containers/GifListContainer'
import NavBar from './NavBar'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
      < NavBar color='black' title="Giphy Search" />
      <GifListContainer />
    </div>
  )
}


// fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=mmFBjJEU7SuRK5LPD57Kh4BrshLjOuCH&rating=g')
// .then(resp => resp.json())
// .then(data => (console.log(data)))

export default App
