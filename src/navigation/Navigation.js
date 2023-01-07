import React from 'react'
import {Image} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Account from '../screens/Account'
import Favorite from '../screens/Favorite'
import Pokedex from '../screens/Pokedex'
import FavoriteNavigation from './FavoriteNavigation'
import PokedexNavigation from './PokedexNavigation'
import AccountNavigation from './AccountNavigation'

const Navigation = () => {

    const Tab = createBottomTabNavigator()

    const render = () => {

      return(
        <Image 
          source={require('../assests/pokeball.png')}
          style={{ width: 75, height:75, top: - 15 }}
        />
      )
    }

  return (
    <Tab.Navigator>
        <Tab.Screen name='Favorite' component={FavoriteNavigation} options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color , size}) => 
            <Icon name='heart' color={color} size={size} />
        }} />
       
        <Tab.Screen name='Pokedex' component={PokedexNavigation} options={{
          tabBarLabel: '',
          tabBarIcon: () => render()
        }} />
        <Tab.Screen name='Account' component={AccountNavigation} options={{
          tabBarLabel: 'Mi perfil',
          tabBarIcon: ({ color , size}) => 
            <Icon name='user' color={color} size={size} />
        }} />
    </Tab.Navigator>
  )
}

export default Navigation

