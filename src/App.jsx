import { useState } from 'react'
import './App.css'


import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import { action, comedy, doc, horror, originals, romance } from './urls'

function App() {
  

  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url = {originals} title = 'Netflix Originals'/>
      <RowPost url = {action} title = 'Action' isSmall />
      <RowPost url = {comedy} title = 'Comedy' isSmall />
      <RowPost url = {romance} title = 'Romance' isSmall />
      <RowPost url = {horror} title = 'Horror' isSmall />
      <RowPost url = {doc} title = 'Documentaries' isSmall />
    </div>
  )
}

export default App
