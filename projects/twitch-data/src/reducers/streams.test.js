import reducer from './streams'

const topStreamsFixture = require('../__fixtures__/topStreams.json')
const topStreamsForGameFixture = require('../__fixtures__/topStreamsForGame.json')
const topStreamsForCommunityFixture = require('../__fixtures__/topStreamsForCommunity.json')
const searchStreamsFixture = require('../__fixtures__/searchStreams.json')

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
})
