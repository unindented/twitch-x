import update from 'immutability-helper'
import {normalizeTopStreams, normalizeSearchStreams} from '../normalizers/streams'
import {getPlaylistUrl, extractFeedsFromPlaylist} from '../utils/video'
import './extensions'

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
    case 'LOAD_TOP_STREAMS_FOR_GAME_SUCCESS':
    case 'LOAD_TOP_STREAMS_FOR_COMMUNITY_SUCCESS': {
      const {entities} = normalizeTopStreams(action.payload.response)
      return update(state, {
        byId: {$merge: entities.streams}
      })
    }
    case 'LOAD_SEARCH_STREAMS_SUCCESS': {
      const {entities, result} = normalizeSearchStreams(action.payload.response)
      return update(state, {
        byId: {$merge: entities.streams},
        search: {$set: result}
      })
    }
    case 'LOAD_PLAYLIST_URL_FOR_STREAM_SUCCESS': {
      const id = action.payload.request
      const {sig, token} = action.payload.response
      return update(state, {
        byId: {$obj: {[id]: {$obj: {playlist: {$set: getPlaylistUrl({stream: id, sig, token})}}}}}
      })
    }
    case 'LOAD_PLAYLIST_FOR_STREAM_SUCCESS': {
      const id = action.payload.request
      const playlist = action.payload.response
      return update(state, {
        byId: {$obj: {[id]: {$obj: {feeds: {$set: extractFeedsFromPlaylist(playlist)}}}}}
      })
    }
  }

  return state
}
