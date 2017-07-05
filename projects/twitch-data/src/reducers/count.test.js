import {
  increment,
  decrement
} from '../actions/count'
import reducer from './count'

describe('reducers/count', function () {
  describe('default', function () {
    it('returns initial state', function () {
      const prevState = undefined
      expect(reducer(prevState, {type: undefined})).toEqual({value: 0})
    })
  })

  describe('INCREMENT', function () {
    it('increments the count', function () {
      const prevState = {value: 42}
      expect(reducer(prevState, increment())).toEqual({value: 43})
    })
  })

  describe('DECREMENT', function () {
    it('decrements the count', function () {
      const prevState = {value: 42}
      expect(reducer(prevState, decrement())).toEqual({value: 41})
    })
  })
})
