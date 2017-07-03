import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import './index.css'

render(
  <App />,
  document.getElementById('root')
)

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(process.env.SERVICE_WORKER)
  }
}
