import update from 'immutability-helper'
import {normalizeTopCommunities} from '../normalizers/communities'

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
  }

  return state
}
