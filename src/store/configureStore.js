import 'babel-polyfill'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import reducer from './index.js'
import rootSaga from './rootSaga.js'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)
