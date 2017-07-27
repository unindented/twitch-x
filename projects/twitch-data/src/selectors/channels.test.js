import {getSearchChannels} from './channels'

describe('selectors/channels', () => {
  describe('.getSearchChannels', () => {
    it('returns the search channels when available', () => {
      const state = {
        data: {
          channels: {
            byId: {
              1: {name: 'foo'},
              2: {name: 'bar'},
              3: {name: 'baz'}
            },
            search: [1, 2]
          }
        }
      }
      expect(getSearchChannels(state)).toMatchSnapshot()
    })
  })
})
