import * as React from 'react'
import styled from 'styled-components'

const Card = styled.div `
    width: 220px;
    background: #e5e5e5;
    border-radius: 5px;
    padding: 0.5em;
    margin: 0em 1.5em 1.5em 0em;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover{
        transform: scale(1.05);
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`

interface Props{
    url: string
    title: string
}

const PokeCard = ({url, title}: Props) => {
    return <Card> 
        <img src={url} alt='pokemon-img'/>
        <h3>{title}</h3>
    </Card>
}

export default PokeCard