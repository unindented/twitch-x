import reducer from './streams'

const topStreamsFixture = require('../__fixtures__/topStreams.json')
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
