export type PokemonType = keyof typeof typeStyles;

export const typeStyles = {
  grass: { emoji: "🌿", color: "#009100" },
  water: { emoji: "💦", color: "#005c91" },
  fire: { emoji: "🔥", color: "#bb2c00" },
  ice: { emoji: "🥶", color: "#008091" },
  fighting: { emoji: "🥊", color: "#b90000" },
  poison: { emoji: "☣", color: "#800091" },
  ground: { emoji: "🥌", color: "#692100" },
  flying: { emoji: "🐦", color: "#b90000" },
  psychic: { emoji: "😵", color: "#e2c000" },
  electric: { emoji: "⚡", color: "#e2c000" },
  bug: { emoji: "🐞", color: "#000000" },
  rock: { emoji: "🥌", color: "#505050" },
  ghost: { emoji: "👻", color: "#6300a5" },
  dark: { emoji: "🌑", color: "#161616" },
  dragon: { emoji: "🐉", color: "#7ea100" },
  steel: { emoji: "🔨", color: "#505050" },
  fairy: { emoji: "👸", color: "#ff5d93" },
  normal: { emoji: "😑", color: "#505050" },
};

export const pokemonTypes = Object.keys(typeStyles) as Array<PokemonType>;

export const getTypeEmoji = (pokemonType: string | undefined) => {
  switch (pokemonType) {
    case "grass":
      return "🌿";
    case "water":
      return "💦";
    case "fire":
      return "🔥";
    case "electric":
      return "⚡";
    case "ice":
      return "🧊";
    case "fighting":
      return "🥊";
    case "poison":
      return "☣";
    case "ground":
      return "🥌";
    case "flying":
      return "🐦";
    case "psychic":
      return "😵c";
    case "bug":
      return "🐞";
    case "rock":
      return "🥌";
    case "ghost":
      return "👻";
    case "dark":
      return "🌑";
    case "dragon":
      return "🐉";
    case "steel":
      return "🔨";
    case "fairy":
      return "👸";
    case "normal":
      return "😑";
    default:
      throw new Error("something went wrong here => getTypeEmojis.ts");
  }
};
