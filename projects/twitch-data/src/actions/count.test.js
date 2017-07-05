import {
  increment,
  decrement
} from './count'

describe('actions/count', function () {
  describe('.increment', function () {
    it('returns an `INCREMENT` action', function () {
      expect(increment()).toEqual({type: 'INCREMENT'})
    })
  })

  describe('.decrement', function () {
    it('returns an `DECREMENT` action', function () {
      expect(decrement()).toEqual({type: 'DECREMENT'})
    })
  })
})
