import {getAction} from '../api'

export function loadTopStreams ({limit}) {
  const action = {
    type: 'LOAD_TOP_STREAMS'
  }
  return getAction(action, '/streams', {query: {limit}})
}

export function loadSearchStreams ({query, limit}) {
  const action = {
    type: 'LOAD_SEARCH_STREAMS',
    payload: query
  }
  return getAction(action, '/search/streams', {query: {query, limit}})
}
