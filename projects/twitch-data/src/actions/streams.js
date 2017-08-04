import {getAction} from '../api'

export function loadTopStreams ({limit}) {
  const action = {
    type: 'LOAD_TOP_STREAMS'
  }
  return getAction(action, '/streams', {query: {limit}})
}

export function loadTopStreamsForGame ({id, limit}) {
  const action = {
    type: 'LOAD_TOP_STREAMS_FOR_GAME',
    payload: id
  }
  return getAction(action, '/streams', {query: {game: id, limit}})
}

export function loadTopStreamsForCommunity ({id, limit}) {
  const action = {
    type: 'LOAD_TOP_STREAMS_FOR_COMMUNITY',
    payload: id
  }
  return getAction(action, '/streams', {query: {community_id: id, limit}})
}

export function loadSearchStreams ({query, limit}) {
  const action = {
    type: 'LOAD_SEARCH_STREAMS',
    payload: query
  }
  return getAction(action, '/search/streams', {query: {query, limit}})
}
