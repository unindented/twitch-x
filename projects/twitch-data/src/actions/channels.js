import {getAction} from '../api'

export function loadSearchChannels ({query, limit}) {
  const action = {
    type: 'LOAD_SEARCH_CHANNELS',
    payload: query
  }
  return getAction(action, '/search/channels', {query: {query: encodeURIComponent(query), limit}})
}
