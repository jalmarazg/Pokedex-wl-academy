import React, { Component } from 'react'
import axios from 'axios'
import { isEmpty } from 'lodash'

import PokemonCard from '../../components/PokemonCard'
import { PokedexWrapper, HeaderWrapper, ImageWrapper } from './Home.styled.js'
import { REACT_POKEMON_ENDPOINT_API } from '../../utils/constants'

class Home extends Component {
  state = { pokemonData: {} }

  componentDidMount () {
    axios
      .get(`${REACT_POKEMON_ENDPOINT_API}/pokemonList/1`)
      .then((res) => {
        this.setState({ pokemonData: res.data.pokemon })
      }).catch(err => console.log(err))
  }

  generatePokemonCards = () => {
    const { pokemonData } = this.state
    return pokemonData.map((value, index) =>
      <PokemonCard
        key={index}
        englishName={value.name[0].english}
        idNumber={value.id}
        image={value.url_image}
        japaneseName={value.name[0].japanese}
        stats={value.base}
        type={value.type}
      />
    )
  }

  render () {
    const { pokemonData } = this.state

    return (
      <div>
        <HeaderWrapper>
          <ImageWrapper src={'https://wizeline-website-assets.s3.amazonaws.com/wp-content/uploads/sites/8/2018/03/02144352/academy-color-transparent-283x300.png'} />
          <ImageWrapper src={'https://img.pngio.com/straight-vertical-line-png-8-sales-coach-now-vertical-line-png-2000_3938.png'} />
          <ImageWrapper src={'https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png'} />
        </HeaderWrapper>
        { !isEmpty(pokemonData)
          ? <PokedexWrapper>
            { this.generatePokemonCards() }
          </PokedexWrapper>
          : <p>
            Cargando...
          </p>
        }
      </div>
    )
  }
}

export default Home
