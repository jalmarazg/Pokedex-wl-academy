import { handleActions } from 'redux-actions'

export const types = {
  POKEMON_DATA_REQUESTED: 'POKEMON_DATA_REQUESTED',
  POKEMON_DATA_SUCCEED: 'POKEMON_DATA_SUCCEED',
  POKEMON_DATA_ERROR: 'POKEMON_DATA_ERROR',
}

export const pokemonActions = {
  pokemonDataRequested: dispatch => (payload) => {
    dispatch({ type: types.POKEMON_DATA_REQUESTED, payload })
  },
}

const initialState = {
  pokemonData: [],
  isDataLoading: true,
  isDataError: false
}

export const pokemonActionsReducer = handleActions({
  [types.POKEMON_DATA_SUCCEED]: (state, action) => {
    return {
      ...state,
      isDataLoading: false,
      pokemonData: action.payload.pokemonResponse
    }
  },
  [types.POKEMON_DATA_ERROR]: (state) => {
    console.log('Entro aqui')
    return {
      ...state,
      isDataLoading: false,
      isDataError: true,
    }
  },
}, initialState)


export const getPokemonData = (state) => state.pokemonActions.pokemonData
export const getStatus = (state) => state.pokemonActions.isDataLoading
export const getError = (state) => state.pokemonActions.isDataError
