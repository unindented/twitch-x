
import {getAction} from '../api'
import {loadTopGames, loadSearchGames} from './games'

jest.mock('../api')

describe('actions/games', () => {
  describe('.loadTopGames', () => {
    it('calls `getAction` with the right parameters', () => {
      loadTopGames({limit: 2})

      const action = {type: 'LOAD_TOP_GAMES'}
      const options = {query: {limit: 2}}
      expect(getAction).toHaveBeenLastCalledWith(action, '/games/top', options)
    })
  })

  describe('.loadSearchGames', () => {
    it('calls `getAction` with the right parameters', () => {
      loadSearchGames({query: 'Dota 2', limit: 2})

      const action = {type: 'LOAD_SEARCH_GAMES', payload: 'Dota 2'}
      const options = {query: {query: 'Dota%202', limit: 2}}
      expect(getAction).toHaveBeenLastCalledWith(action, '/search/games', options)
    })
  })
})
