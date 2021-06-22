import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import pokemons from '../../data';
import React,{ useState } from "react";
import { grey } from "@material-ui/core/colors";

type searchPropTypes =  {
    query: string | null,
    setQuery: (value: string | null) => void
}

const Search = ({query, setQuery
} : searchPropTypes) => {
    const [inputValue, setInputValue] = useState('');
    return  <Autocomplete
    value={query}
    onChange={(event, newValue) => {
      setQuery(newValue);
      console.log(newValue);
    }}
    inputValue={inputValue}
    onInputChange={(event, newInputValue) => {
      setInputValue(newInputValue);
    }}
    options={pokemons}
    getOptionLabel={(pokemon) => pokemon}
    renderInput={(params) => (
      <TextField
      color='primary'
      style={{background:'#fff'}}
        {...params}
        variant="outlined"
        
        placeholder='search for a pokemon'
      />
    )}
    style={{width: '500px'}}
  />
  
}

export default Search