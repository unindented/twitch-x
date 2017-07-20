import React from 'react'
import {render} from 'react-dom'
import {Provider as DataProvider} from 'react-redux'
import {Route} from 'react-router'
import {ConnectedRouter, routerMiddleware, routerReducer} from 'react-router-redux'
import createHistory from 'history/createHashHistory'
import {ThemeProvider} from 'styled-components'
import {createStore} from 'twitch-data'
import themes from 'twitch-ui/src/themes'
import App from './components/App'
import Home from './components/Home'
import Channels from './components/Channels'
import Games from './components/Games'
import Communities from './components/Communities'
import './index.css'

const history = createHistory()
const middleware = [routerMiddleware(history)]
const reducers = {router: routerReducer}

const store = createStore({
  middleware,
  reducers
})

render(
  <DataProvider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={themes.default}>
        <App>
          <Route exact path='/' component={Home} />
          <Route exact path='/channels' component={Channels} />
          <Route exact path='/games' component={Games} />
          <Route exact path='/communities' component={Communities} />
        </App>
      </ThemeProvider>
    </ConnectedRouter>
  </DataProvider>,
  document.getElementById('root')
)

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(process.env.SERVICE_WORKER)
  }
}
