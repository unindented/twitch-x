
import {getAction} from '../api'
import {loadTopStreams, loadSearchStreams} from './streams'

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

  describe('.loadSearchStreams', () => {
    it('calls `getAction` with the right parameters', () => {
      loadSearchStreams({query: 'Dota 2', limit: 2})

      const action = {type: 'LOAD_SEARCH_STREAMS', payload: 'Dota 2'}
      const options = {query: {query: 'Dota 2', limit: 2}}
      expect(getAction).toHaveBeenLastCalledWith(action, `/search/streams`, options)
    })
  })
})
