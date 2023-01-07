import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import getColorByPokemon from '../utils/getColorByPokemonType'
import {capitalize} from 'lodash'
import {useNavigation} from '@react-navigation/native'

const PokemonCard = ({pokemon}) => {

    const  navigation = useNavigation()
    
    const goToPokemon = () => {
      
       navigation.navigate('Pokemon', {id: pokemon.id})
    }

    const pokemonColor = getColorByPokemon(pokemon.type)
   

    const bgStyles = { backgroundColor: pokemonColor , ...Styles.bgStyles}

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
        <View style={Styles.card}> 
            <View style={Styles.spacing}>
                <View style={bgStyles}>
                    <Text style={Styles.number}>#{`${pokemon.order}`.padStart(3,0)}</Text>
                    <Text style={Styles.name}>{capitalize(pokemon.name)}</Text>
                    <Image source={{ uri: pokemon.imagen}} style={Styles.image}/>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

const Styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    bgStyles: {
        flex: 1,
        padding: 10,
        borderRadius: 15,
    },
    image: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 90,
        height: 90,
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 10
    } ,
       number: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: '#fff',
        fontSize: 11,
    }
})

export default PokemonCard