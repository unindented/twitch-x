import {normalizeTopStreams, normalizeSearchStreams} from './streams'

const streamsFixture = require('../__fixtures__/topStreams.json')
const searchStreamsFixture = require('../__fixtures__/searchStreams.json')

describe('normalizers/streams', () => {
  describe('.normalizeTopStreams', () => {
    it('normalizes the payload', () => {
      const result = normalizeTopStreams(streamsFixture)
      expect(result).toMatchSnapshot()
    })
  })

  describe('normalizers/streams', () => {
    describe('.normalizeSearchStreams', () => {
      it('normalizes the payload', () => {
        const result = normalizeSearchStreams(searchStreamsFixture)
        expect(result).toMatchSnapshot()
      })
    })
  })
})
