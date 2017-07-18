import {login} from '../actions/session'
import reducer from './session'

describe('reducers/session', () => {
  describe('default', () => {
    it('returns initial state', () => {
      const prevState = undefined
      expect(reducer(prevState)).toEqual({token: null})
    })
  })

  describe('LOGIN', () => {
    it('stores the token', () => {
      const prevState = {}
      expect(reducer(prevState, login('foo'))).toEqual({token: 'foo'})
    })
  })
})
