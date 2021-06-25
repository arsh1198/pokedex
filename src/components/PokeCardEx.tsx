import styled from 'styled-components'
import * as React from 'react'
import {usePalette} from 'react-palette'
import { Pokemon } from '../types'
import getTypeEmoji from '../utils/getTypeEmoji'


const Card = styled.div`
    display: flex;
    flex-direction: column;
    height: 550px;
    width: 380px;
    margin-top: 2em;
    box-sizing: border-box;
    border-radius: 15px;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    padding: 1em;
    `
const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;  
    min-height: 240px;
    width: 100%;
    border-radius: 10px 10px 0px 0px;
    img{
        width: 200px;
    }
`
const Title = styled.h2`
    font-weight: 700;
    margin-top: 1em;
    color: rgba(0,0,0,0.8);
` 

const StatsTable = styled.table`
width: 50%;
margin-top:2em;
td{
    color: rgba(0,0,0,8)
}


`

const InfoContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
background: rgba(f,f,f,f.8);
backdrop-filter: saturate(180%) blur(10px);
width: 100%;
height: 100%;
border-radius: 15px ;
border: 4px solid rgba(0,0,0,0.5)
`

interface Props {
    name: string | null
    pokemon: Pokemon
    url: string
}

const PokemonCardEx = ({url, name, pokemon}: Props) => {
    const {data, loading, error} = usePalette(url)
    const {stats} = pokemon

    
    return <Card style={{background:`linear-gradient(${data.lightMuted}, ${data.lightVibrant})`}}>
        
        <InfoContainer>
        <Image style={{background: `linear-gradient(${data.darkMuted}, ${data.darkVibrant})`}}>
            <img src={url}/>
        </Image>
        <Title>{`${name+' '+getTypeEmoji(pokemon.types[0].type.name)}`}</Title>
        <StatsTable cellPadding='2em' >
            {console.log(pokemon.types[0].type.name)}
            {stats.map(stat => <tr>
                <td style={{fontWeight: 500}}>{stat.stat.name}</td>
                <td style={{textAlign: 'center'}}>{stat.base_stat}</td>
            </tr>)}
        </StatsTable>
        </InfoContainer>
    </Card>
}
export default PokemonCardEx