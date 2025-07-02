import { useState } from 'react'
import './App.css'
import CardComponent from './components/CardComponen'
import SpotifyButton from './components/SpotifyButton'

function App() {

  return (
    <>
      <CardComponent />
      <SpotifyButton />
      <div className="heart">💖</div>
      <div className="heart">💕</div>
      <div className="heart">💗</div>
    </>
  )
}

export default App
