import {getAction} from '../api'
import {PRIVATE_API_URL} from '../constants'

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

export function loadPlaylistUrlForStream ({id}) {
  const action = {
    type: 'LOAD_PLAYLIST_URL_FOR_STREAM',
    payload: id
  }
  return getAction(action, `${PRIVATE_API_URL}/channels/{id}/access_token`, {params: {id}})
}

export function loadPlaylistForStream ({id, url}) {
  const action = {
    type: 'LOAD_PLAYLIST_FOR_STREAM',
    payload: id
  }
  return getAction(action, url, {responseType: 'application/vnd.apple.mpegurl'})
}
