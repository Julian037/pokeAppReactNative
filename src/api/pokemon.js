import { API_HOST } from "../utils/constats"; 

import axios from "axios";

const  getPokemonsApi  = async () => {
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`
        const response = await fetch(url)
        const result = await response.json();
        return result
    } catch (error) {
        throw error;
    }
}

const getPokemonsDetailsByUrlApi = async (url) => {
    try {
        const response = await fetch(url)
        const result = response.json()
        return result
    } catch (error) {
        throw error;
    }
}

const fetchAllProducts = async () => {
    const peticion = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    return peticion
}

export {
    getPokemonsApi,
    getPokemonsDetailsByUrlApi,
    fetchAllProducts
}