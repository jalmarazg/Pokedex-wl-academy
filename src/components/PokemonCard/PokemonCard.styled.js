import styled from 'styled-components'

export const PokemonCardWrapper = styled.div`
  background: url("https://vignette.wikia.nocookie.net/freakproductions/images/5/50/Wiki-background/revision/latest?cb=20160104180124&path-prefix=es");
  background-color: darkseagreen;
  background-repeat: no-repeat;
  background-size: 300px 125px;
  border-radius: 0 30px;
  border: 1px solid navy;
  width: 300px;
  height: auto;
  display: flex;
  align-items: center;
  margin: 8px;
  justify-content: center;
  flex-direction: column;
  transition: 0.4s ease-in-out;
  padding-bottom: 8px;

  &:hover {
    box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.2);
    transform: translateY(3px);
  }
`

export const CardImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: contain;
  margin: 0 0 8px 0;
`

export const PokemonName = styled.h4`
  color: indigo;
  margin: 0 0 8px 0;
`

export const SectionTitle = styled.h3`
  color: white;
  font-weight: bold;
  margin: 0 0 2px 0;
`

export const PokemonData = styled.p`
  font-size: 14px;
  color: ${props => (props.textColor ? props.textColor : '#fff')};
  margin: 0 0 8px 0;
`

export const PokemonTypes = styled.p`
  color: white;
  margin: 0 0 4px 0;
`

export const PokemonTitle = styled.p`
  color: #fff;
  margin: 8px;
`
