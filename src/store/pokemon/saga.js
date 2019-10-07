import { all, call, takeLatest, put } from 'redux-saga/effects'
import { types } from './reducer'
import PokemonData from '../../api/pokemon'

export function * requestPokemons () {
  const pokemonResponse = yield call(PokemonData.pokemonData)
  if (pokemonResponse) {
    yield put({ type: types.POKEMON_DATA_SUCCEED, payload: { pokemonResponse } })
  } else {
    yield put({ type: types.POKEMON_DATA_ERROR })
  }
}

export default function * pokemonFunctionsSaga () {
  yield all([
    takeLatest(types.POKEMON_DATA_REQUESTED, requestPokemons)
  ])
}
