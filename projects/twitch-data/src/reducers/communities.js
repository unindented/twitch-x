import update from 'immutability-helper'
import {normalizeTopCommunities} from '../normalizers/communities'
import {normalizeTopStreams} from '../normalizers/streams'
import './extensions'

const initialState = {
  byId: {},
  top: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOAD_TOP_COMMUNITIES_SUCCESS': {
      const {entities, result} = normalizeTopCommunities(action.payload.response)
      return update(state, {
        byId: {$merge: entities.communities},
        top: {$set: result}
      })
    }
    case 'LOAD_TOP_STREAMS_FOR_COMMUNITY_SUCCESS': {
      const id = action.payload.request
      const {result} = normalizeTopStreams(action.payload.response)
      return update(state, {
        byId: {$obj: {[id]: {$obj: {topStreams: {$set: result}}}}}
      })
    }
  }

  return state
}
