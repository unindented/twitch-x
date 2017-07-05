import React from 'react'
import {render} from 'react-dom'
import {ThemeProvider} from 'styled-components'
import themes from 'twitch-ui/src/themes'
import App from './components/App'
import './index.css'

render(
  <ThemeProvider theme={themes.default}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(process.env.SERVICE_WORKER)
  }
}
