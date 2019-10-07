import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { GlobalStyle } from '../injectGlobal'
import { store } from './store/configureStore'

ReactDOM.render(
  <Fragment>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </Fragment>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
