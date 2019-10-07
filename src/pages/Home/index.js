import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'

import PokemonCard from '../../components/PokemonCard'
import { PokedexWrapper, HeaderWrapper, ImageWrapper, PokedexHomeWrapper, ErrorMessage } from './Home.styled.js'
import { pokemonActions, getPokemonData, getError, getStatus } from '../../store/pokemon/reducer'

class Home extends Component {
  componentDidMount () {
    const { fetchPokemonData } = this.props
    fetchPokemonData()
  }

  generatePokemonCards = () => {
    const { pokemonData } = this.props
    return pokemonData.map(value =>
      <PokemonCard
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
    const { isLoading, isError } = this.props
    return (
      <PokedexHomeWrapper>
        <HeaderWrapper>
          <ImageWrapper src={'https://wizeline-website-assets.s3.amazonaws.com/wp-content/uploads/sites/8/2018/03/02144352/academy-color-transparent-283x300.png'} />
          <ImageWrapper src={'https://img.pngio.com/straight-vertical-line-png-8-sales-coach-now-vertical-line-png-2000_3938.png'} />
          <ImageWrapper src={'https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png'} />
        </HeaderWrapper>
        {
          isLoading
            ? <Loader type='BallTriangle' color={'#0000FF'} height={100} width={100} />
            : isError
              ? <ErrorMessage> Hubo un error al procesar los datos. Intentalo mas tarde :c </ErrorMessage>
              : <PokedexWrapper> { this.generatePokemonCards() } </PokedexWrapper>
        }
      </PokedexHomeWrapper>
    )
  }
}

const mapStateToProps = state => ({
  pokemonData: getPokemonData(state),
  isLoading: getStatus(state),
  isError: getError(state)
})

const mapDispatchToProps = dispatch => ({
  fetchPokemonData: pokemonActions.pokemonDataRequested(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
