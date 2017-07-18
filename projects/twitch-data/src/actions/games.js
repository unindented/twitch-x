import {getAction} from '../api'

export function loadTopGames ({limit}) {
  const action = {
    type: 'LOAD_TOP_GAMES'
  }
  return getAction(action, '/games/top', {query: {limit}})
}

export function loadSearchGames ({query, limit}) {
  const action = {
    type: 'LOAD_SEARCH_GAMES',
    payload: query
  }
  return getAction(action, '/search/games', {query: {query: encodeURIComponent(query), limit}})
}
