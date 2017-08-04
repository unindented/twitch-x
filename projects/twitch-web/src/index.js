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
import Stream from './components/Stream'
import Games from './components/Games'
import Game from './components/Game'
import Communities from './components/Communities'
import Community from './components/Community'
import Search from './components/Search'
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
            <Route exact path='/streams/:id' component={Stream} />
            <Route exact path='/games' component={Games} />
            <Route exact path='/games/:id' component={Game} />
            <Route exact path='/communities' component={Communities} />
            <Route exact path='/communities/:id' component={Community} />
            <Route exact path='/search' component={Search} />
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
