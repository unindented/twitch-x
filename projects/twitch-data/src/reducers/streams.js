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
      return update(state, {$merge: {byId: entities.streams, top: result}})
    }
    case 'LOAD_SEARCH_STREAMS_SUCCESS': {
      const {entities, result} = normalizeSearchStreams(action.payload.response)
      return update(state, {$merge: {byId: entities.streams, search: result}})
    }
  }

  return state
}
