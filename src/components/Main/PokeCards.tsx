import * as React from 'react'
import axios from "axios";
import { useQuery } from "react-query";
import PokeCard from './PokeCard';
import styled from 'styled-components';

export interface Props {
    
}

const fetchPokemons = async () => {
    const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
    
    return data
}

const Container = styled.div `
display: flex;
justify-content: center;
flex-wrap: wrap;
padding: 2em 4em;
`
 
const PokemonCards = () => {
    const {data, status} = useQuery('pokemons', fetchPokemons)
    console.log(data)
    return (  <Container>
        {status === 'success' && data.results.map(pokemon => <PokeCard url='public\assets\nuzuko.jpg' key={pokemon.name} title={pokemon.name} />)}
    </Container>);
}
 
export default PokemonCards;