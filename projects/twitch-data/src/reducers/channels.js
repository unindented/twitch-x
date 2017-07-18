import update from 'immutability-helper'
import {normalizeSearchChannels} from '../normalizers/channels'

const initialState = {
  byId: {},
  search: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOAD_SEARCH_CHANNELS_SUCCESS': {
      const {entities, result} = normalizeSearchChannels(action.payload.response)
      return update(state, {$merge: {byId: entities.channels, search: result}})
    }
  }

  return state
}
