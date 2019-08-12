import React, { Component } from 'react'
import { isEmpty } from 'lodash'
import axios from 'axios'
import { REACT_POKEMON_ENDPOINT_API } from '../../utils/constants'
import PokemonCard from '../../components/PokemonCard'

class Home extends Component {
  state = { pokemonData: {} }

  componentDidMount () {
    axios
      .get(REACT_POKEMON_ENDPOINT_API)
      .then((res) => {
        this.setState({ pokemonData: res.data.pokemon })
      })
  }

  render () {
    const { pokemonData } = this.state
    return (
      <div>
        <p>Home de Aplicacion de Pokedex</p>
        { !isEmpty(pokemonData)
          ? <PokemonCard
            englishName={pokemonData.name[0].english}
            idNumber={pokemonData.id}
            image={pokemonData.url_image}
            japaneseName={pokemonData.name[0].japanese}
            stats={pokemonData.base}
            type={pokemonData.type}
          />
          : <p>
            Cargando...
          </p>
        }
      </div>
    )
  }
}

export default Home
