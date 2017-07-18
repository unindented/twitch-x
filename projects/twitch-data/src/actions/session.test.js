import {login} from './session'

describe('actions/session', () => {
  describe('.login', () => {
    it('returns a `LOGIN` action', () => {
      expect(login('foo')).toEqual({type: 'LOGIN', payload: 'foo'})
    })
  })
})
