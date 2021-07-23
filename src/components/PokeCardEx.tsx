import styled from "styled-components";
import * as React from "react";
import { usePalette } from "react-palette";
import { Params, Pokemon } from "../types";
import { getTypeEmoji } from "../utils/pokemonTypes";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import usePokemon from "../hooks/usePokemon";
import { motion } from "framer-motion";
import { Skeleton, SkeletonText } from "@chakra-ui/react";

const BASE_IMG_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 550px;
  width: 380px;
  margin-top: 2em;
  box-sizing: border-box;
  border-radius: 15px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  padding: 1em;
`;
const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 240px;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  img {
    width: 200px;
  }
`;
const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-top: 0.5em;
  color: rgba(0, 0, 0, 0.8);
  text-transform: capitalize;
`;

const StatsTable = styled.table`
  width: 50%;
  margin-top: 1em;
  td {
    color: rgba(0, 0, 0, 8);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(f, f, f, f.8);
  backdrop-filter: saturate(180%) blur(10px);
  width: 100%;
  height: 100%;
  border-radius: 15px;
  border: 4px solid rgba(0, 0, 0, 0.5);
`;

interface Props {
  name: string | null;
  pokemon: Pokemon;
  url: string;
}

const PokemonCardEx = () => {
  const { name } = useParams<Params>();

  const { data, status } = useQuery(
    ["pokemon-img", name],
    ({ queryKey: [_, pokemonName] }) => usePokemon(pokemonName),
    { enabled: Boolean(name) }
  );
  const url = BASE_IMG_URL + data?.id + ".png";

  const { data: palleteData, loading, error } = usePalette(url);
  // const { stats } = data;

  return (
    <Card
      layoutId="expandable-card"
      style={{
        background: `linear-gradient(${palleteData.lightMuted}, ${palleteData.lightVibrant})`,
      }}
    >
      <InfoContainer>
        <Image
          style={{
            background: `linear-gradient(${palleteData.darkMuted}, ${palleteData.darkVibrant})`,
          }}
        >
          {status === "loading" ? (
            <Skeleton
              opacity={0.2}
              borderRadius="25px"
              height="150px"
              width="150px"
            />
          ) : (
            <img src={url} />
          )}
        </Image>
        {status === "loading" ? (
          <Skeleton
            opacity={0.1}
            borderRadius="10px"
            mt={5}
            height="40px"
            width="200px"
          />
        ) : (
          <Title>{data?.name}</Title>
        )}
        {status === "loading" ? (
          <SkeletonText
            opacity={0.2}
            noOfLines={8}
            width="275px"
            mt={5}
            spacing={3}
          />
        ) : (
          <StatsTable cellPadding="2em">
            {console.log(data?.types[0].type.name)}
            {data?.stats.map((stat) => (
              <tr>
                <td style={{ fontWeight: 500, textTransform: "capitalize" }}>
                  {stat.stat.name}
                </td>
                <td style={{ textAlign: "center" }}>{stat.base_stat}</td>
              </tr>
            ))}
          </StatsTable>
        )}
      </InfoContainer>
    </Card>
  );
};
export default PokemonCardEx;
