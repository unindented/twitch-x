import {getTopStreams, getSearchStreams} from './streams'

describe('selectors/streams', () => {
  describe('.getTopStreams', () => {
    it('returns the top streams when available', () => {
      const state = {
        data: {
          streams: {
            byId: {
              1: {channel: 'foo'},
              2: {channel: 'bar'},
              3: {channel: 'baz'}
            },
            top: [1, 2]
          }
        }
      }
      expect(getTopStreams(state)).toMatchSnapshot()
    })
  })

  describe('.getSearchStreams', () => {
    it('returns the search streams when available', () => {
      const state = {
        data: {
          streams: {
            byId: {
              1: {channel: 'foo'},
              2: {channel: 'bar'},
              3: {channel: 'baz'}
            },
            search: [1, 2]
          }
        }
      }
      expect(getSearchStreams(state)).toMatchSnapshot()
    })
  })
})
