import axios from 'axios'
import { Pokemon } from '../types';

const usePokemon = async (pokemonName: string) => {
    const { data } = await axios.get<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    return data;
  };

export default usePokemon