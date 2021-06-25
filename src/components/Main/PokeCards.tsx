import * as React from 'react'
import axios from "axios";
import { useQuery } from "react-query";
import PokeCard from './PokeCard';
import styled from 'styled-components';
import {  PokemonResponse } from '../../types';

export interface Props {
    
}

const fetchPokemons = async () => {
    const {data} = await axios.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon')
    
    return data
}

const Container = styled.div `
display: flex;
justify-content: center;
flex-wrap: wrap;
margin-top: 1.5em;
`
 
const PokemonCards = () => {
    const {data, status} = useQuery('pokemons', fetchPokemons)
    return (  <Container>
        {status === 'success' && (data as PokemonResponse).results.map(pokemon => <PokeCard key={pokemon.name} title={pokemon.name} />)}
    </Container>);
}
 
export default PokemonCards;