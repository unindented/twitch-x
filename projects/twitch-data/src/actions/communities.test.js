
import {getAction} from '../api'
import {loadTopCommunities} from './communities'

jest.mock('../api')

describe('actions/communities', () => {
  describe('.loadTopCommunities', () => {
    it('calls `getAction` with the right parameters', () => {
      loadTopCommunities({limit: 2})

      const action = {type: 'LOAD_TOP_COMMUNITIES'}
      const options = {query: {limit: 2}}
      expect(getAction).toHaveBeenLastCalledWith(action, '/communities/top', options)
    })
  })
})
