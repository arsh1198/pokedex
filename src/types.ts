export interface Ability2 {
  name: string;
  url: string;
}

export interface Ability {
  ability: Ability2;
  is_hidden: boolean;
  slot: number;
}

export interface Stat2 {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Stat2;
}

export interface DreamWorld {
  front_default: string;
  front_female?: unknown;
}

export interface OfficialArtwork {
  front_default: string;
}

export interface Sprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  other: {
    dream_world: DreamWorld;
    "official-artwork": OfficialArtwork;
  };
}

export interface Type2 {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: Type2;
}

export interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<{
    name: string;
    url: string;
  }>;
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: unknown[];
  game_indices: unknown[];
  height: number;
  held_items: unknown[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: unknown[];
  name: string;
  order: number;
  past_types: unknown[];
  species: unknown;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface PokemonSpecies {
  name: string;
  url: string;
}

export interface Type {
  name: string;
  url: string;
}

export interface PokemonGenResponse {
  abilities: any[];
  id: number;
  name: string;
  pokemon_species: PokemonSpecies[];
  types: Type[];
}

export interface Pokemon2 {
  name: string;
  url: string;
}

export interface Pokemon {
  pokemon: Pokemon2;
  slot: number;
}

export interface PokemonTypeResponse {
  id: number;
  pokemon: Pokemon[];
}

export interface Params {
  pokemonType: string | undefined;
  generation: string | undefined;
}
