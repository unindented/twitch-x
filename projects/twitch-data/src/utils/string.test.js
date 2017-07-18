import {supplant} from './string'

describe('utils/string', () => {
  describe('.supplant', () => {
    it('replaces tokens in a string', () => {
      const result = supplant('{url}/{id}', {url: 'foo', id: 42})
      expect(result).toBe('foo/42')
    })
  })
})
