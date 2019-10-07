import axios from 'axios'
import { REACT_POKEMON_ENDPOINT_API } from '../utils/constants'

export default {
  pokemonData: async () => {
    const pokemonInformation = axios
      .get(`${REACT_POKEMON_ENDPOINT_API}/pokemonList/1`)
      .then((res) => res.data.pokemon)
      .catch(err => console.log(err))
    return pokemonInformation
  }
}
