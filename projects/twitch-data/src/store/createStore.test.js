import createStore from './createStore'

describe('store/createStore', () => {
  describe('with no options', () => {
    let store

    beforeEach(() => {
      store = createStore()
    })

    it('creates a store with no additional reducers', () => {
      const state = store.getState()
      expect(state).toMatchSnapshot()
    })

    it('types the state properly', () => {
      const state = store.getState()
      expect(state.data.count.value).toBe(0)
    })
  })

  describe('with reducers', () => {
    let store

    beforeEach(() => {
      const reducers = {
        foo: (state = {bar: 'baz'}, action) => {
          switch (action.type) {
            case 'QUX':
              return {...state, qux: 'quux'}
          }
          return state
        }
      }
      store = createStore({reducers})
    })

    it('creates a store with the additional reducers', () => {
      expect(store.getState()).toMatchSnapshot()
    })

    it('processes actions', () => {
      const action = {type: 'QUX'}
      store.dispatch(action)

      const state = store.getState()
      expect(state).toMatchSnapshot()
    })

    it('processes thunk actions', () => {
      const action = {type: 'QUX'}
      const thunkAction = () => (dispatch) => { dispatch(action) }
      store.dispatch(thunkAction())

      const state = store.getState()
      expect(state).toMatchSnapshot()
    })

    it('types the state properly', () => {
      const state = store.getState()
      expect(state.data.count.value).toBe(0)
      expect(state.foo.bar).toBe('baz')
    })
  })
})
