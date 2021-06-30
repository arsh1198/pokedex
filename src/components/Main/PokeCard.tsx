import axios from "axios";
import * as React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { Pokemon } from "../../types";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 220px;
  min-height: 250px;
  padding: 2em;
  background: #e5e5e5;
  border-radius: 5px;
  margin: 0em 0.75em 1.5em 0.75em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

interface Props {
  title: string;
}

const fetchPokemon = async (pokemonName: string) => {
  const { data } = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  return data;
};

const PokeCard = ({ title }: Props) => {
  const { data, status } = useQuery(
    ["pokemon-img", title],
    ({ queryKey: [_, pokemonName] }) => fetchPokemon(pokemonName),
    { enabled: Boolean(title) }
  );
  const imgUrl = data?.sprites.other["official-artwork"].front_default;
  return (
    <Card>
      {status === "success" && (
        <>
          <img src={imgUrl} alt="pokemong" />
          <h3>{title}</h3>
        </>
      )}
    </Card>
  );
};

export default PokeCard;
