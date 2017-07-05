import {
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import * as reducers from '../reducers'

export default function createEnhancedStore (options = {}) {
  const otherReducers = options.reducers || {}
  const otherMiddleware = options.middleware || []
  const otherEnhancers = options.enhancers || []

  const dataReducer = combineReducers(reducers)
  const allReducers = combineReducers({...otherReducers, data: dataReducer})

  const allMiddleware = otherMiddleware
    .concat(thunkMiddleware)

  const allEnhancers = otherEnhancers
    .concat(applyMiddleware(...allMiddleware))

  return createStore(allReducers, composeWithDevTools(...allEnhancers))
}
