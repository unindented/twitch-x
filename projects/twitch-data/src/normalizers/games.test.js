import {normalizeTopGames, normalizeSearchGames} from './games'

const topGamesFixture = require('../__fixtures__/topGames.json')
const searchGamesFixture = require('../__fixtures__/searchGames.json')

describe('normalizers/games', () => {
  describe('.normalizeTopGames', () => {
    it('normalizes the payload', () => {
      const result = normalizeTopGames(topGamesFixture)
      expect(result).toMatchSnapshot()
    })
  })

  describe('.normalizeSearchGames', () => {
    it('normalizes the payload', () => {
      const result = normalizeSearchGames(searchGamesFixture)
      expect(result).toMatchSnapshot()
    })
  })
})
