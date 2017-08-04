import reducer from './communities'

const topCommunitiesFixture = require('../__fixtures__/topCommunities.json')
const topStreamsForCommunityFixture = require('../__fixtures__/topStreamsForCommunity.json')

describe('reducers/communities', () => {
  describe('default', () => {
    it('returns initial state', () => {
      const prevState = undefined
      expect(reducer(prevState)).toMatchSnapshot()
    })
  })

  describe('LOAD_TOP_COMMUNITIES_SUCCESS', () => {
    it('stores the communities', () => {
      const prevState = {
        byId: {
          '6e940c4a-c42f-47d2-af83-0a2c7e47c421': {
            name: 'Speedrunning'
          }
        }
      }
      const action = {
        type: 'LOAD_TOP_COMMUNITIES_SUCCESS',
        payload: {response: topCommunitiesFixture}
      }
      expect(reducer(prevState, action)).toMatchSnapshot()
    })
  })

  describe('LOAD_TOP_STREAMS_FOR_COMMUNITY_SUCCESS', () => {
    let prevState

    describe('when the community is not stored', () => {
      beforeEach(() => {
        prevState = {
          byId: {}
        }
      })

      it('stores the streams', () => {
        const action = {
          type: 'LOAD_TOP_STREAMS_FOR_COMMUNITY_SUCCESS',
          payload: {request: '6e940c4a-c42f-47d2-af83-0a2c7e47c421', response: topStreamsForCommunityFixture}
        }
        expect(reducer(prevState, action)).toMatchSnapshot()
      })
    })

    describe('when the community is already stored', () => {
      beforeEach(() => {
        prevState = {
          byId: {
            '6e940c4a-c42f-47d2-af83-0a2c7e47c421': {
              name: 'Speedrunning'
            }
          }
        }
      })

      it('stores the streams', () => {
        const action = {
          type: 'LOAD_TOP_STREAMS_FOR_COMMUNITY_SUCCESS',
          payload: {request: '6e940c4a-c42f-47d2-af83-0a2c7e47c421', response: topStreamsForCommunityFixture}
        }
        expect(reducer(prevState, action)).toMatchSnapshot()
      })
    })
  })
})
