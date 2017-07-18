import reducer from './channels'

const searchChannelsFixture = require('../__fixtures__/searchChannels.json')

describe('reducers/channels', () => {
  describe('default', () => {
    it('returns initial state', () => {
      const prevState = undefined
      expect(reducer(prevState)).toMatchSnapshot()
    })
  })

  describe('LOAD_SEARCH_CHANNELS_SUCCESS', () => {
    it('stores the channels', () => {
      const prevState = {}
      const action = {type: 'LOAD_SEARCH_CHANNELS_SUCCESS', payload: {response: searchChannelsFixture}}
      expect(reducer(prevState, action)).toMatchSnapshot()
    })
  })
})
