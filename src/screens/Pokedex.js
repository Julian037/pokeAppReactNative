import { View, Text } from 'react-native'
import React , { useEffect , useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonsApi, getPokemonsDetailsByUrlApi , fetchAllProducts} from '../api/pokemon';
import axios from "axios";
import PokemonList from '../components/PokemonList';

const Pokedex = () => {

  const [pokemons, setPodemons] = useState([])
  const [nextUrl, setNextUrl] = useState(null)


  const fetchAllProducts = async () => {
    console.log('prueba', nextUrl !== null)
    const peticion = await axios.get(nextUrl !== null ? nextUrl : 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    setNextUrl(peticion.data.next)

  console.log('nextUrl' , nextUrl)

    const pokemonsArray = [];
    for await ( const pokemon of peticion.data.results){
      const pokemonDetails = await getPokemonsDetailsByUrlApi(pokemon.url)
      
      pokemonsArray.push({
        id: pokemonDetails.id,
        name: pokemonDetails.name,
        type: pokemonDetails.types[0].type.name,
        order: pokemonDetails.order,
        imagen:
          pokemonDetails.sprites.other["official-artwork"].front_default,
      });
    }

    // setPodemons(peticion.data.results)
    setPodemons([...pokemons, ...pokemonsArray])


}


  useEffect(() => {

    fetchAllProducts()
  },[])

  return (
    <SafeAreaView>
      <PokemonList  
        pokemons={pokemons}
        fetchAllProducts={fetchAllProducts}
        isNext={nextUrl}
      />
    </SafeAreaView>
  )
}

export default Pokedex