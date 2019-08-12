import React from 'react'

const PokemonCard = ({
  englishName,
  idNumber,
  image,
  japaneseName,
  stats,
  type
}) => {
  const pokemonTypes = type.map((value, index) => (<p>Type {index + 1}: {value}</p>))
  return (
    <div>
      <img src={image} alt='Pokemon_Image' />
      <p>Number: {idNumber}</p>
      <p>Pokemon Name: {englishName} - Japanese: {japaneseName}</p>
      <p>Attack: {stats.Attack} - Defense: {stats.Defense} - Health Points: {stats.HP}</p>
      {pokemonTypes}
    </div>
  )
}

export default PokemonCard
