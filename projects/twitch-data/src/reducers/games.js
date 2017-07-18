import update from 'immutability-helper'
import {normalizeTopGames, normalizeSearchGames} from '../normalizers/games'

const initialState = {
  byId: {},
  top: [],
  search: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOAD_TOP_GAMES_SUCCESS': {
      const {entities, result} = normalizeTopGames(action.payload.response)
      return update(state, {$merge: {byId: entities.games, top: result}})
    }
    case 'LOAD_SEARCH_GAMES_SUCCESS': {
      const {entities, result} = normalizeSearchGames(action.payload.response)
      return update(state, {$merge: {byId: entities.games, search: result}})
    }
  }

  return state
}
