import {stringify} from 'qs'
import {USHER_API_URL} from '../constants'

export function getPlaylistUrl ({stream, sig, token}) {
  const query = {
    sig,
    token,
    allow_audio_only: true,
    allow_source: true,
    player: 'twitchweb',
    type: 'any',
    p: Math.floor(Math.random() * 1e7)
  }
  return `${USHER_API_URL}/channel/hls/${stream}.m3u8?${stringify(query)}`
}

export function extractFeedsFromPlaylist (input) {
  const regexp = /#EXT-X-MEDIA:.*NAME="([^"]+)".*\n#EXT-X-STREAM-INF:.*\n(.*)/g
  const result = []

  let match = regexp.exec(input)
  while (match != null) {
    result.push({
      name: match[1],
      url: match[2]
    })
    match = regexp.exec(input)
  }

  return result
}
