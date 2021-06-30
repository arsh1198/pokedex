import React, { useState } from "react";
import styled from "styled-components";
import { useRadioGroup, HStack, Input } from "@chakra-ui/react";
import FilterOptions from "../FilterOptions";
import TypeSelect from "../TypeSelect";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
`;

const Search = () => {
  const [value, setValue] = useState("");

  return (
    <Container>
      <Input
        placeholder="Search for a pokemon"
        bg="#fff"
        w="100%"
        maxW="300px"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <FilterOptions />
    </Container>
  );
};

export default Search;
