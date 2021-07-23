import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "@chakra-ui/react";
import FilterOptions from "../FilterOptions";
import { Autocomplete } from "@material-ui/lab";
import { PokemonNames } from "../../utils/pokemonNames";
import { TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useTheme } from "../../theme/theme";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
`;

const Search = () => {
  const [value, setValue] = useState<string | null>("");
  const [inputValue, setInputValue] = useState("");
  const history = useHistory();
  const theme = useTheme();

  return (
    <Container>
      <Autocomplete
        onReset={() => console.log("reset")}
        style={{
          width: "100%",
          maxWidth: "300px",
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          newValue && history.push(`/pokemon/${newValue}`);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={PokemonNames}
        getOptionLabel={(pokemon) => pokemon}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Search for a pokemon"
          />
        )}
      />

      <FilterOptions />
    </Container>
  );
};

export default Search;
