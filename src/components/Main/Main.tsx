import * as React from 'react'
import styled from 'styled-components'
import PokeCard from './PokeCard'
import PokemonCards from './PokeCards'

const Container  = styled.main `

`
const Main = () => {
    return <Container>
        <PokemonCards/>
    </Container>
}

export default Main