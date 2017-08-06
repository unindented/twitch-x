import update from 'immutability-helper'
import {normalizeTopStreams, normalizeSearchStreams} from '../normalizers/streams'

const initialState = {
  byId: {},
  top: [],
  search: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOAD_TOP_STREAMS_SUCCESS': {
      const {entities, result} = normalizeTopStreams(action.payload.response)
      return update(state, {
        byId: {$merge: entities.streams},
        top: {$set: result}
      })
    }
    case 'LOAD_SEARCH_STREAMS_SUCCESS': {
      const {entities, result} = normalizeSearchStreams(action.payload.response)
      return update(state, {
        byId: {$merge: entities.streams},
        search: {$set: result}
      })
    }
  }

  return state
}
