
import {getAction} from '../api'
import {
  loadTopStreams,
  loadTopStreamsForGame,
  loadTopStreamsForCommunity,
  loadSearchStreams
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
})
