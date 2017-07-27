import {getTopGames, getSearchGames} from './games'

describe('selectors/games', () => {
  describe('.getTopGames', () => {
    it('returns the top games when available', () => {
      const state = {
        data: {
          games: {
            byId: {
              1: {name: 'foo'},
              2: {name: 'bar'},
              3: {name: 'baz'}
            },
            top: [1, 2]
          }
        }
      }
      expect(getTopGames(state)).toMatchSnapshot()
    })
  })

  describe('.getSearchGames', () => {
    it('returns the search games when available', () => {
      const state = {
        data: {
          games: {
            byId: {
              1: {name: 'foo'},
              2: {name: 'bar'},
              3: {name: 'baz'}
            },
            search: [1, 2]
          }
        }
      }
      expect(getSearchGames(state)).toMatchSnapshot()
    })
  })
})
