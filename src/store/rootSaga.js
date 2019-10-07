import { all, fork } from 'redux-saga/effects'
import pokemonFunctionsSaga from './pokemon/saga.js'

export default function * rootSaga () {
  yield all([
    fork(pokemonFunctionsSaga)
  ])
}
