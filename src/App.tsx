import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './App.css'
import Search from './components/Search'
import PokemonCard from './components/PokemonCard'
import { PokemonResponse } from './types'

function App() {
  const [query, setQuery] = useState<string | null>('bulbasaur')
  const [pokemon, setPokemon] = useState<PokemonResponse | null>(null)
  const imgURL = `${pokemon?.sprites?.other['official-artwork'].front_default}`

  useEffect(() => {
    if(query !== '' || query !== null){
      axios.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${query}`).then(res => {
      setPokemon(res.data)
      console.log(res.data)
    }).catch(error => console.log(error.message)) 
  }
  }, [query])

  
  return (
    <div className="App">
      <Search query={query} setQuery={setQuery}/>
      {pokemon && <PokemonCard url={imgURL} name={query} pokemon={pokemon}/>}
    </div>
  )
}

export default App
