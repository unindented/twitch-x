import reducer from './games'

const topGamesFixture = require('../__fixtures__/topGames.json')
const topStreamsForGameFixture = require('../__fixtures__/topStreamsForGame.json')
const searchGamesFixture = require('../__fixtures__/searchGames.json')

describe('reducers/games', () => {
  describe('default', () => {
    it('returns initial state', () => {
      const prevState = undefined
      expect(reducer(prevState)).toMatchSnapshot()
    })
  })

  describe('LOAD_TOP_GAMES_SUCCESS', () => {
    it('stores the games', () => {
      const prevState = {
        byId: {
          'Dota 2': {
            name: 'Dota 2'
          }
        }
      }
      const action = {
        type: 'LOAD_TOP_GAMES_SUCCESS',
        payload: {response: topGamesFixture}
      }
      expect(reducer(prevState, action)).toMatchSnapshot()
    })
  })

  describe('LOAD_TOP_STREAMS_FOR_GAME_SUCCESS', () => {
    let prevState

    describe('when the game is not stored', () => {
      beforeEach(() => {
        prevState = {
          byId: {}
        }
      })

      it('stores the streams', () => {
        const action = {
          type: 'LOAD_TOP_STREAMS_FOR_GAME_SUCCESS',
          payload: {request: 'Dota 2', response: topStreamsForGameFixture}
        }
        expect(reducer(prevState, action)).toMatchSnapshot()
      })
    })

    describe('when the game is already stored', () => {
      beforeEach(() => {
        prevState = {
          byId: {
            'Dota 2': {
              name: 'Dota 2'
            }
          }
        }
      })

      it('stores the streams', () => {
        const action = {
          type: 'LOAD_TOP_STREAMS_FOR_GAME_SUCCESS',
          payload: {request: 'Dota 2', response: topStreamsForGameFixture}
        }
        expect(reducer(prevState, action)).toMatchSnapshot()
      })
    })
  })

  describe('LOAD_SEARCH_GAMES_SUCCESS', () => {
    it('stores the games', () => {
      const prevState = {
        byId: {
          'Dota 2': {
            name: 'Dota 2'
          }
        }
      }
      const action = {
        type: 'LOAD_SEARCH_GAMES_SUCCESS',
        payload: {response: searchGamesFixture}
      }
      expect(reducer(prevState, action)).toMatchSnapshot()
    })
  })
})
