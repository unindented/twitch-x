import React from 'react'
import {render} from 'react-dom'
import {Provider as DataProvider} from 'react-redux'
import {ThemeProvider} from 'styled-components'
import {createStore} from 'twitch-data'
import themes from 'twitch-ui/src/themes'
import App from './components/App'
import './index.css'

const store = createStore()

render(
  <DataProvider store={store}>
    <ThemeProvider theme={themes.default}>
      <App />
    </ThemeProvider>
  </DataProvider>,
  document.getElementById('root')
)

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(process.env.SERVICE_WORKER)
  }
}
