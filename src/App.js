import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import characters from './data.js'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import { Routes, Route, useLocation } from "react-router-dom"
import { useState } from 'react'
import Form from './components/Form/Form'

function App () {
  const location = useLocation();
  // const [characters, setCharacters] = useState([]);

  // const onSearch = (character) => {
  //   fetch(`https://rickandmortyapi.com/api/character/${character}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.name) {
  //         setCharacters((oldChars) => [...oldChars, data]);
  //       } else {
  //         alert("No hay personajes con ese ID");
  //       }
  //     })

  // }

  // const onClose = (id) => {
  //   setCharacters(
  //    characters.filter(character => character.id !== id)
  //  )
  // }

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === '/' ? <Form></Form> : <Nav onSearch="{onSearch}"></Nav>}      
      <Routes>
        <Route path="/home" element={<Cards onClose="{onClose}"  characters={characters} />}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='detail/:detailId' element={<Detail></Detail>}></Route>
      </Routes>
      <hr/>
      <div>
        
      </div>
      <hr />
      <div>
      </div>

    </div>
  )
}

export default App
