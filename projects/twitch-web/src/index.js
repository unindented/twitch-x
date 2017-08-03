import React from 'react'
import {render} from 'react-dom'
import {Provider as DataProvider} from 'react-redux'
import {Route} from 'react-router'
import {ConnectedRouter, routerMiddleware, routerReducer} from 'react-router-redux'
import createHistory from 'history/createHashHistory'
import {ThemeProvider} from 'styled-components'
import {createStore} from 'twitch-data'
import themes from 'twitch-ui/src/themes'
import ScrollToTop from './components/ScrollToTop'
import App from './components/App'
import Home from './components/Home'
import Streams from './components/Streams'
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
        <ScrollToTop>
          <App>
            <Route exact path='/' component={Home} />
            <Route exact path='/streams' component={Streams} />
            <Route exact path='/games' component={Games} />
            <Route exact path='/communities' component={Communities} />
          </App>
        </ScrollToTop>
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
