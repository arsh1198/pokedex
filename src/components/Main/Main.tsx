import * as React from 'react'
import styled from 'styled-components'
import PokeCard from './PokeCard'


const Container  = styled.main `
display: flex;
justify-content: center;
flex-wrap: wrap;
padding: 2em;
`
const Main = () => {
    return <Container>
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
        <PokeCard/>
    </Container>
}

export default Main