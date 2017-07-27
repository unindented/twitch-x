import {getTopCommunities} from './communities'

describe('selectors/communities', () => {
  describe('.getTopCommunities', () => {
    it('returns the top communities when available', () => {
      const state = {
        data: {
          communities: {
            byId: {
              1: {name: 'foo'},
              2: {name: 'bar'},
              3: {name: 'baz'}
            },
            top: [1, 2]
          }
        }
      }
      expect(getTopCommunities(state)).toMatchSnapshot()
    })
  })
})
