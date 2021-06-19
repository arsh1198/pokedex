
const getTypeEmoji = (pokemonType: string) => {
    switch(pokemonType){
        case 'grass' :
            return '🌿'
        case 'water' : 
            return '💧'
        case 'fire':
            return '🔥'
        case 'electric':
            return '⚡'
        case 'ice':
            return '🧊'
        case 'fighting':
            return '🥊'
        case 'poison':
            return '☣'
        case 'ground':
            return '🥌'
        case 'flying':
            return '🐦'
        case 'psychic':
            return '😵'
        case 'bug':
            return '🐞'
        case 'rock':
            return '🥌'
        case 'ghost': 
            return '👻'
        case 'dark':
            return '🌑'
        case 'dragon': 
            return '🐉'
        case 'steel':
            return '🔨'
        case 'fairy':
            return '👸'
        case 'normal':
            return '🔵'
        default :
            throw new Error("something went wrong here => getTypeEmojis.ts");
            
    }
}

export default getTypeEmoji