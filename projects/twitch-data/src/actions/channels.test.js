
import {getAction} from '../api'
import {loadSearchChannels} from './channels'

jest.mock('../api')

describe('actions/channels', () => {
  describe('.loadSearchChannels', () => {
    it('calls `getAction` with the right parameters', () => {
      loadSearchChannels({query: 'Dota 2', limit: 2})

      const action = {type: 'LOAD_SEARCH_CHANNELS', payload: 'Dota 2'}
      const options = {query: {query: 'Dota%202', limit: 2}}
      expect(getAction).toHaveBeenLastCalledWith(action, '/search/channels', options)
    })
  })
})
