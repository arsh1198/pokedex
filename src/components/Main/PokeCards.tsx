import * as React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import PokeCard from "./PokeCard";
import styled from "styled-components";
import { PokemonResponse } from "../../types";
import useStore from "../../Store";

export interface Props {}

const fetchPokemons = async ({ queryKey }) => {
  const type = queryKey[1];
  const gen = queryKey[2]
  console.log(gen)
  const { data } =
    type === ""
      ? await axios.get<PokemonResponse>(`https://pokeapi.co/api/v2/generation/${gen}`)
      : await axios.get<PokemonResponse>(
          `https://pokeapi.co/api/v2/type/${type}`
        );
  return data;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.5em;
`;

const PokemonCards = () => {
  const type = useStore((state) => state.type);
  const gen = useStore((state) => state.gen);
  const { data, status } = useQuery(["pokemons", type, gen], fetchPokemons);
  return (
    <Container>
      {status === "loading" && <p>Loading...</p>}
      {type == "" && gen &&
        status === "success" &&
        (data as PokemonResponse).pokemon_species.map((pokemon) => (
          <PokeCard key={pokemon.name} title={pokemon.name} />
        ))}
      {type !== "" &&
        status === "success" &&
        (data as PokemonResponse).pokemon.map((pokemon) => (
          <PokeCard key={pokemon.pokemon.name} title={pokemon.pokemon.name} />
        ))}
    </Container>
  );
};

export default PokemonCards;
