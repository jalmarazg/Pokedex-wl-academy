import { combineReducers } from 'redux'
import { pokemonActionsReducer } from './pokemon/reducer.js'

export default combineReducers({
  pokemonActions: pokemonActionsReducer
})
