import { POKEMON_TYPE_COLORS } from "./constats";

const getColorByPokemon = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()]

export default getColorByPokemon