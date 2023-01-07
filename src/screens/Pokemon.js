import { View, Text } from 'react-native'
import React , { useEffect , useState} from 'react'
import axios from "axios";

const Pokemon = ({route}) => {

  const [pokemon, setPokemon] = useState(null)
  console.log(route.params.id)
  console.log('pokemon',pokemon)
  const fetchPokemon = async () => {
  
    const peticion = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`)
    setPokemon(peticion.data.forms[0])


    // const pokemonsArray = [];
    // for await ( const pokemon of peticion.data.results){
    //   const pokemonDetails = await getPokemonsDetailsByUrlApi(pokemon.url)
      
    //   pokemonsArray.push({
    //     id: pokemonDetails.id,
    //     name: pokemonDetails.name,
    //     type: pokemonDetails.types[0].type.name,
    //     order: pokemonDetails.order,
    //     imagen:
    //       pokemonDetails.sprites.other["official-artwork"].front_default,
    //   });
    // }

    // // setPodemons(peticion.data.results)
    // setPodemons([...pokemons, ...pokemonsArray])
}

useEffect(() => {

  fetchPokemon()
},[route])

  if(!pokemon) return null;

  return (
    <View>
      {/* <Text>Pokemon</Text> */}
      <Text>{pokemon.name}</Text>
    </View>
  )
}

export default Pokemon