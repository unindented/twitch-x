import {
  getTopStreams,
  getTopStreamsForGame,
  getTopStreamsForCommunity,
  getSearchStreams,
  getStream
} from './streams'

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

  describe('.getTopStreamsForGame', () => {
    it('returns an empty array when the game cannot be found', () => {
      const state = {
        data: {
          games: {
            byId: {
            }
          },
          streams: {
            byId: {
              1: {channel: 'foo'}
            }
          }
        }
      }
      expect(getTopStreamsForGame(state, { id: 42 })).toMatchSnapshot()
    })

    it('returns the top streams when available', () => {
      const state = {
        data: {
          games: {
            byId: {
              42: {topStreams: [1, 2]}
            }
          },
          streams: {
            byId: {
              1: {channel: 'foo'},
              2: {channel: 'bar'},
              3: {channel: 'baz'}
            }
          }
        }
      }
      expect(getTopStreamsForGame(state, { id: 42 })).toMatchSnapshot()
    })
  })

  describe('.getTopStreamsForCommunity', () => {
    it('returns an empty array when the community cannot be found', () => {
      const state = {
        data: {
          communities: {
            byId: {
            }
          },
          streams: {
            byId: {
              1: {channel: 'foo'}
            }
          }
        }
      }
      expect(getTopStreamsForCommunity(state, { id: 42 })).toMatchSnapshot()
    })

    it('returns the top streams when available', () => {
      const state = {
        data: {
          communities: {
            byId: {
              42: {topStreams: [1, 2]}
            }
          },
          streams: {
            byId: {
              1: {channel: 'foo'},
              2: {channel: 'bar'},
              3: {channel: 'baz'}
            }
          }
        }
      }
      expect(getTopStreamsForCommunity(state, { id: 42 })).toMatchSnapshot()
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

  describe('.getStream', () => {
    it('returns the stream with the specified ID', () => {
      const state = {
        data: {
          streams: {
            byId: {
              1: {name: 'foo'}
            }
          }
        }
      }
      expect(getStream(state, {id: 1})).toMatchSnapshot()
    })
  })
})
