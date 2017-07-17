import {normalizeSearchChannels} from './channels'

const fixture = require('../__fixtures__/searchChannels.json')

describe('normalizers/channels', () => {
  describe('.normalizeSearchChannels', () => {
    it('normalizes the payload', () => {
      const result = normalizeSearchChannels(fixture)
      expect(result).toMatchSnapshot()
    })
  })
})
