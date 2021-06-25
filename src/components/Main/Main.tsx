import * as React from 'react'
import styled from 'styled-components'
import TypeSelect from '../TypeSelect'
import PokemonCards from './PokeCards'

const Container  = styled.main `
display:flex;
flex-direction: column;
padding: 1.5em 4em;
align-items: center;

`
const Main = () => {
    return <Container>
         <TypeSelect/>
        <PokemonCards/>
    </Container>
}

export default Main