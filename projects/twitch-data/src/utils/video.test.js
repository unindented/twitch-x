import {getPlaylistUrl, extractFeedsFromPlaylist} from './video'

const streamPlaylistFixture = require('../__fixtures__/streamPlaylist.m3u8')

describe('utils/video', () => {
  describe('.getPlaylistUrl', () => {
    beforeEach(() => {
      Math.random = () => 0.5
    })

    it('generates a playlist URL', () => {
      const result = getPlaylistUrl({stream: 'dota2ti', sig: 'foo', token: 'bar'})
      expect(result).toMatchSnapshot()
    })
  })

  describe('.extractFeedsFromPlaylist', () => {
    it('extracts the different quality feeds from a playlist', () => {
      const result = extractFeedsFromPlaylist(streamPlaylistFixture)
      expect(result).toMatchSnapshot()
    })
  })
})
