import {normalizeTopCommunities} from './communities'

const fixture = require('../__fixtures__/topCommunities.json')

describe('normalizers/communities', () => {
  describe('.normalizeTopCommunities', () => {
    it('normalizes the payload', () => {
      const result = normalizeTopCommunities(fixture)
      expect(result).toMatchSnapshot()
    })
  })
})
