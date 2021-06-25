
export const pokemonTypes = ['🌿 grass',  '💦 water', '🔥 fire', '🧊 ice', '🥊 fighting', '☣ poison', '🥌 ground', '🐦 flying', '😵 psychic', '🐞 bug', '🥌 rock', '👻 ghost', '🌑 dark', '🐉 dragon', '🔨 steel', '👸 fairy', '😑 normal']

export const getPokemonType = (pokemonType: string) => {
    switch(pokemonType){
        case 'grass' :
            return '🌿 grass'
        case 'water' : 
            return '💦 water'
        case 'fire':
            return '🔥 fire'
        case 'electric':
            return '⚡ electric'
        case 'ice':
            return '🧊 ice'
        case 'fighting':
            return '🥊 fighting'
        case 'poison':
            return '☣ poison'
        case 'ground':
            return '🥌 ground'
        case 'flying':
            return '🐦 flying'
        case 'psychic':
            return '😵 psychic'
        case 'bug':
            return '🐞 bug'
        case 'rock':
            return '🥌 rock'
        case 'ghost': 
            return '👻 ghost'
        case 'dark':
            return '🌑 dark'
        case 'dragon': 
            return '🐉 dragon'
        case 'steel':
            return '🔨 steel'
        case 'fairy':
            return '👸 fairy'
        case 'normal':
            return '😑 normal'
        default :
            throw new Error("something went wrong here => getTypeEmojis.ts");
            
    }
}
