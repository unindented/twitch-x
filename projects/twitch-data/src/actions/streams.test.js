
import {getAction} from '../api'
import {loadTopStreams} from './streams'

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
})
