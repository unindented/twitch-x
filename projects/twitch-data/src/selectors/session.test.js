import {getToken} from './session'

describe('selectors/session', () => {
  describe('.getToken', () => {
    it('returns the token', () => {
      const state = {data: {session: {token: 'foo'}}}
      expect(getToken(state)).toBe('foo')
    })
  })
})
