
import {getAction} from '../api'
import {
  loadTopStreams,
  loadTopStreamsForGame,
  loadTopStreamsForCommunity,
  loadSearchStreams,
  loadPlaylistUrlForStream,
  loadPlaylistForStream
} from './streams'

jest.mock('../api')

describe('actions/streams', () => {
  describe('.loadTopStreams', () => {
    it('calls `getAction` with the right parameters', () => {
      loadTopStreams({limit: 2})

      const action = {type: 'LOAD_TOP_STREAMS'}
      const options = {query: {limit: 2}}
      expect(getAction).toHaveBeenLastCalledWith(action, '/streams', options)
    })
  })

  describe('.loadTopStreamsForGame', () => {
    it('calls `getAction` with the right parameters', () => {
      loadTopStreamsForGame({id: 'Dota 2', limit: 2})

      const action = {type: 'LOAD_TOP_STREAMS_FOR_GAME', payload: 'Dota 2'}
      const options = {query: {game: 'Dota 2', limit: 2}}
      expect(getAction).toHaveBeenLastCalledWith(action, '/streams', options)
    })
  })

  describe('.loadTopStreamsForCommunity', () => {
    it('calls `getAction` with the right parameters', () => {
      loadTopStreamsForCommunity({id: '6e940c4a-c42f-47d2-af83-0a2c7e47c421', limit: 2})

      const action = {type: 'LOAD_TOP_STREAMS_FOR_COMMUNITY', payload: '6e940c4a-c42f-47d2-af83-0a2c7e47c421'}
      const options = {query: {community_id: '6e940c4a-c42f-47d2-af83-0a2c7e47c421', limit: 2}}
      expect(getAction).toHaveBeenLastCalledWith(action, '/streams', options)
    })
  })

  describe('.loadSearchStreams', () => {
    it('calls `getAction` with the right parameters', () => {
      loadSearchStreams({query: 'Dota 2', limit: 2})

      const action = {type: 'LOAD_SEARCH_STREAMS', payload: 'Dota 2'}
      const options = {query: {query: 'Dota 2', limit: 2}}
      expect(getAction).toHaveBeenLastCalledWith(action, '/search/streams', options)
    })
  })

  describe('.loadPlaylistUrlForStream', () => {
    it('calls `getAction` with the right parameters', () => {
      loadPlaylistUrlForStream({id: 'dota2ti'})

      const action = {type: 'LOAD_PLAYLIST_URL_FOR_STREAM', payload: 'dota2ti'}
      const options = {params: {id: 'dota2ti'}}
      expect(getAction).toHaveBeenLastCalledWith(action, 'http://api.twitch.tv/api/channels/{id}/access_token', options)
    })
  })

  describe('.loadPlaylistForStream', () => {
    it('calls `getAction` with the right parameters', () => {
      loadPlaylistForStream({id: 'dota2ti', url: 'http://usher.twitch.tv/api/channel/hls/dota2ti.m3u8'})

      const action = {type: 'LOAD_PLAYLIST_FOR_STREAM', payload: 'dota2ti'}
      expect(getAction).toHaveBeenLastCalledWith(action, 'http://usher.twitch.tv/api/channel/hls/dota2ti.m3u8', {responseType: 'application/vnd.apple.mpegurl'})
    })
  })
})
