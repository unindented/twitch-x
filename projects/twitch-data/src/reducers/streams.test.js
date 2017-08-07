import reducer from './streams'

const topStreamsFixture = require('../__fixtures__/topStreams.json')
const topStreamsForGameFixture = require('../__fixtures__/topStreamsForGame.json')
const topStreamsForCommunityFixture = require('../__fixtures__/topStreamsForCommunity.json')
const searchStreamsFixture = require('../__fixtures__/searchStreams.json')
const accessTokenFixture = require('../__fixtures__/accessToken.json')
const streamPlaylistFixture = require('../__fixtures__/streamPlaylist.m3u8')

describe('reducers/streams', () => {
  describe('default', () => {
    it('returns initial state', () => {
      const prevState = undefined
      expect(reducer(prevState)).toMatchSnapshot()
    })
  })

  describe('LOAD_TOP_STREAMS_SUCCESS', () => {
    it('stores the streams', () => {
      const prevState = {
        byId: {
          dota2ti: {
            name: 'dota2ti'
          }
        }
      }
      const action = {
        type: 'LOAD_TOP_STREAMS_SUCCESS',
        payload: {response: topStreamsFixture}
      }
      expect(reducer(prevState, action)).toMatchSnapshot()
    })
  })

  describe('LOAD_TOP_STREAMS_FOR_GAME_SUCCESS', () => {
    it('stores the streams', () => {
      const prevState = {
        byId: {
          lirik: {
            name: 'lirik'
          }
        }
      }
      const action = {
        type: 'LOAD_TOP_STREAMS_FOR_GAME_SUCCESS',
        payload: {request: 'Dota 2', response: topStreamsForGameFixture}
      }
      expect(reducer(prevState, action)).toMatchSnapshot()
    })
  })

  describe('LOAD_TOP_STREAMS_FOR_COMMUNITY_SUCCESS', () => {
    it('stores the streams', () => {
      const prevState = {
        byId: {
          lirik: {
            name: 'lirik'
          }
        }
      }
      const action = {
        type: 'LOAD_TOP_STREAMS_FOR_COMMUNITY_SUCCESS',
        payload: {request: '6e940c4a-c42f-47d2-af83-0a2c7e47c421', response: topStreamsForCommunityFixture}
      }
      expect(reducer(prevState, action)).toMatchSnapshot()
    })
  })

  describe('LOAD_SEARCH_STREAMS_SUCCESS', () => {
    it('stores the streams', () => {
      const prevState = {
        byId: {
          dota2ti: {
            name: 'dota2ti'
          }
        }
      }
      const action = {
        type: 'LOAD_SEARCH_STREAMS_SUCCESS',
        payload: {response: searchStreamsFixture}
      }
      expect(reducer(prevState, action)).toMatchSnapshot()
    })
  })

  describe('LOAD_PLAYLIST_URL_FOR_STREAM_SUCCESS', () => {
    let prevState

    beforeEach(() => {
      Math.random = () => 0.5
    })

    describe('when the channel is not stored', () => {
      beforeEach(() => {
        prevState = {
          byId: {}
        }
      })

      it('stores the playlist URL', () => {
        const action = {type: 'LOAD_PLAYLIST_URL_FOR_STREAM_SUCCESS', payload: {request: 'dota2ti', response: accessTokenFixture}}
        expect(reducer(prevState, action)).toMatchSnapshot()
      })
    })

    describe('when the channel is already stored', () => {
      beforeEach(() => {
        prevState = {
          byId: {
            dota2ti: {
              name: 'dota2ti'
            }
          }
        }
      })

      it('stores the playlist URL', () => {
        const action = {type: 'LOAD_PLAYLIST_URL_FOR_STREAM_SUCCESS', payload: {request: 'dota2ti', response: accessTokenFixture}}
        expect(reducer(prevState, action)).toMatchSnapshot()
      })
    })
  })

  describe('LOAD_PLAYLIST_FOR_STREAM_SUCCESS', () => {
    let prevState

    describe('when the channel is not stored', () => {
      beforeEach(() => {
        prevState = {
          byId: {}
        }
      })

      it('stores the feeds extracted from the playlist', () => {
        const action = {type: 'LOAD_PLAYLIST_FOR_STREAM_SUCCESS', payload: {request: 'dota2ti', response: streamPlaylistFixture}}
        expect(reducer(prevState, action)).toMatchSnapshot()
      })
    })

    describe('when the channel is already stored', () => {
      beforeEach(() => {
        prevState = {
          byId: {
            dota2ti: {
              name: 'dota2ti'
            }
          }
        }
      })

      it('stores the feeds extracted from the playlist', () => {
        const action = {type: 'LOAD_PLAYLIST_FOR_STREAM_SUCCESS', payload: {request: 'dota2ti', response: streamPlaylistFixture}}
        expect(reducer(prevState, action)).toMatchSnapshot()
      })
    })
  })
})
