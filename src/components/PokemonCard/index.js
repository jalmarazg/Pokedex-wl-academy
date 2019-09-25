import React from 'react'
import {
  CardImage,
  PokemonCardWrapper,
  PokemonData,
  PokemonName,
  PokemonTypes,
  PokemonTitle,
  SectionTitle
} from './PokemonCard.styled'

const PokemonCard = ({
  englishName,
  idNumber,
  image,
  japaneseName,
  stats,
  type
}) => {
  const pokemonTypes = type.map(value => (<PokemonTypes>{value}</PokemonTypes>))
  return (
    <PokemonCardWrapper>
      <PokemonTitle textColor={'#fff'}>Pokemon #{idNumber}</PokemonTitle>
      <CardImage src={`https://pokeres.bastionbot.org/images/pokemon/${idNumber}.png`} alt='Pokemon_Image' />
      <img src='https://img.icons8.com/nolan/2x/pokeball.png' style={{ heigth: '25px', width: '25px', margin: '0 0 8px 0' }} />
      <SectionTitle>Pokemon Name</SectionTitle>
      <PokemonName>{englishName} - {japaneseName}</PokemonName>
      <SectionTitle>Stats:</SectionTitle>
      <PokemonData>Attack: {stats.Attack} &there4; Defense: {stats.Defense} &there4; Health Points: {stats.HP}</PokemonData>
      <SectionTitle>Types:</SectionTitle>
      {pokemonTypes}
    </PokemonCardWrapper>
  )
}

export default PokemonCard
