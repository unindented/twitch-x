import reducer from './communities'

const topCommunitiesFixture = require('../__fixtures__/topCommunities.json')

describe('reducers/communities', () => {
  describe('default', () => {
    it('returns initial state', () => {
      const prevState = undefined
      expect(reducer(prevState)).toMatchSnapshot()
    })
  })

  describe('LOAD_TOP_COMMUNITIES_SUCCESS', () => {
    it('stores the communities', () => {
      const prevState = {}
      const action = {type: 'LOAD_TOP_COMMUNITIES_SUCCESS', payload: {response: topCommunitiesFixture}}
      expect(reducer(prevState, action)).toMatchSnapshot()
    })
  })
})
