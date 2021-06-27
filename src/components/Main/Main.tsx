import * as React from "react";
import styled from "styled-components";
import useStore from "../../Store";
import TypeSelect from "../TypeSelect";
import PokemonCards from "./PokeCards";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1.5em 4em;
  align-items: center;
`;
const Main = () => {
  const filterBy = useStore((state) => state.filterBy);
  return (
    <Container>
      {filterBy === "Type" && <TypeSelect />}
      <PokemonCards />
    </Container>
  );
};

export default Main;
