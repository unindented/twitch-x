import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import {
  JSON_TYPE,
  FORM_TYPE,
  TEXT_TYPE,
  api,
  post,
  get,
  put,
  patch,
  del,
  apiAction,
  postAction,
  getAction,
  putAction,
  patchAction,
  delAction
} from '.'

const middleware = [thunk]
const createMockStore = configureStore(middleware)

describe('api', () => {
  const endpoint = '/foo'
  const url = `https://api.twitch.tv/kraken${endpoint}`

  describe('.api', () => {
    beforeEach(() => {
      jest.clearAllMocks()
    })

    describe('with params', () => {
      beforeEach(() => {
        const response = new Response('{"foo":"bar"}', {
          status: 200,
          statusText: 'OK'
        })
        jest.spyOn(window, 'fetch').mockReturnValue(Promise.resolve(response))
      })

      it('interpolates params in URL', async () => {
        await api({url: `${url}/{id}`, method: 'GET', params: {id: 42}})
        expect(window.fetch).toHaveBeenCalledWith(`${url}/42`, expect.any(Object))
      })
    })

    describe('with a success response with a JSON body', () => {
      beforeEach(() => {
        const response = new Response('{"foo":"bar"}', {
          status: 200,
          statusText: 'OK'
        })
        jest.spyOn(window, 'fetch').mockReturnValue(Promise.resolve(response))
      })

      it('processes the response successfully', async () => {
        const response = await api({url, method: 'GET'})
        expect(response).toEqual({foo: 'bar'})
        expect(window.fetch).toHaveBeenCalledTimes(1)
      })
    })

    describe('with an error response', () => {
      beforeEach(() => {
        const response = new Response('', {
          status: 404,
          statusText: 'Not Found'
        })
        jest.spyOn(window, 'fetch').mockReturnValue(Promise.resolve(response))
      })

      it('processes the response successfully', async () => {
        try {
          await api({url, method: 'GET'})
        } catch (err) {
          expect(err.message).toBe('404 Not Found')
        }
        expect(window.fetch).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('.post', () => {
    beforeEach(() => {
      const response = new Response('{"foo":"bar"}', {
        status: 201,
        statusText: 'OK'
      })
      jest.spyOn(window, 'fetch').mockReturnValue(Promise.resolve(response))
    })

    it('makes a `POST` request with a JSON body', async () => {
      const response = await post(endpoint, {body: {baz: 'qux'}})
      expect(response).toEqual({foo: 'bar'})
      expect(window.fetch).toHaveBeenCalledWith(url, {
        method: 'POST',
        body: '{"baz":"qux"}',
        mode: 'cors',
        headers: {
          map: {
            'accept': 'application/vnd.twitchtv.v5+json',
            'content-type': 'application/json'
          }
        }
      })
    })

    it('makes a `POST` request with a JSON body', async () => {
      const response = await post(endpoint, {contentType: JSON_TYPE, body: {baz: 'qux'}})
      expect(response).toEqual({foo: 'bar'})
      expect(window.fetch).toHaveBeenCalledWith(url, {
        method: 'POST',
        body: '{"baz":"qux"}',
        mode: 'cors',
        headers: {
          map: {
            'accept': 'application/vnd.twitchtv.v5+json',
            'content-type': 'application/json'
          }
        }
      })
    })

    it('makes a `POST` request with a form body', async () => {
      const response = await post(endpoint, {contentType: FORM_TYPE, body: {baz: 'qux'}})
      expect(response).toEqual({foo: 'bar'})
      expect(window.fetch).toHaveBeenCalledWith(url, {
        method: 'POST',
        body: 'baz=qux',
        mode: 'cors',
        headers: {
          map: {
            'accept': 'application/vnd.twitchtv.v5+json',
            'content-type': 'application/x-www-form-urlencoded'
          }
        }
      })
    })

    it('makes a `POST` request with a text body', async () => {
      const response = await post(endpoint, {contentType: TEXT_TYPE, body: 'baz,qux'})
      expect(response).toEqual({foo: 'bar'})
      expect(window.fetch).toHaveBeenCalledWith(url, {
        method: 'POST',
        body: 'baz,qux',
        mode: 'cors',
        headers: {
          map: {
            'accept': 'application/vnd.twitchtv.v5+json',
            'content-type': 'text/plain'
          }
        }
      })
    })

    it('makes a `POST` request with an already encoded form body', async () => {
      const response = await post(endpoint, {contentType: FORM_TYPE, body: 'baz=qux'})
      expect(response).toEqual({foo: 'bar'})
      expect(window.fetch).toHaveBeenCalledWith(url, {
        method: 'POST',
        body: 'baz=qux',
        mode: 'cors',
        headers: {
          map: {
            'accept': 'application/vnd.twitchtv.v5+json',
            'content-type': 'application/x-www-form-urlencoded'
          }
        }
      })
    })
  })

  describe('.get', () => {
    beforeEach(() => {
      const response = new Response('{"foo":"bar"}', {
        status: 200,
        statusText: 'OK'
      })
      jest.spyOn(window, 'fetch').mockReturnValue(Promise.resolve(response))
    })

    it('makes a `GET` request', async () => {
      const response = await get(endpoint, {query: {baz: 'qux'}})
      expect(response).toEqual({foo: 'bar'})
      expect(window.fetch).toHaveBeenCalledWith(`${url}?baz=qux`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          map: {
            'accept': 'application/vnd.twitchtv.v5+json',
            'content-type': 'application/json'
          }
        }
      })
    })
  })

  describe('.put', () => {
    beforeEach(() => {
      const response = new Response('{"foo":"bar"}', {
        status: 200,
        statusText: 'OK'
      })
      jest.spyOn(window, 'fetch').mockReturnValue(Promise.resolve(response))
    })

    it('makes a `PUT` request with a JSON body', async () => {
      const response = await put(endpoint, {body: {baz: 'qux'}})
      expect(response).toEqual({foo: 'bar'})
      expect(window.fetch).toHaveBeenCalledWith(url, {
        method: 'PUT',
        body: '{"baz":"qux"}',
        mode: 'cors',
        headers: {
          map: {
            'accept': 'application/vnd.twitchtv.v5+json',
            'content-type': 'application/json'
          }
        }
      })
    })

    it('makes a `PUT` request with a JSON body', async () => {
      const response = await put(endpoint, {contentType: JSON_TYPE, body: {baz: 'qux'}})
      expect(response).toEqual({foo: 'bar'})
      expect(window.fetch).toHaveBeenCalledWith(url, {
        method: 'PUT',
        body: '{"baz":"qux"}',
        mode: 'cors',
        headers: {
          map: {
            'accept': 'application/vnd.twitchtv.v5+json',
            'content-type': 'application/json'
          }
        }
      })
    })

    it('makes a `PUT` request with a form body', async () => {
      const response = await put(endpoint, {contentType: FORM_TYPE, body: {baz: 'qux'}})
      expect(response).toEqual({foo: 'bar'})
      expect(window.fetch).toHaveBeenCalledWith(url, {
        method: 'PUT',
        body: 'baz=qux',
        mode: 'cors',
        headers: {
          map: {
            'accept': 'application/vnd.twitchtv.v5+json',
            'content-type': 'application/x-www-form-urlencoded'
          }
        }
      })
    })

    it('makes a `PUT` request with an already encoded form body', async () => {
      const response = await put(endpoint, {contentType: FORM_TYPE, body: 'baz=qux'})
      expect(response).toEqual({foo: 'bar'})
      expect(window.fetch).toHaveBeenCalledWith(url, {
        method: 'PUT',
        body: 'baz=qux',
        mode: 'cors',
        headers: {
          map: {
            'accept': 'application/vnd.twitchtv.v5+json',
            'content-type': 'application/x-www-form-urlencoded'
          }
        }
      })
    })
  })

  describe('.patch', () => {
    beforeEach(() => {
      const response = new Response('{"foo":"bar"}', {
        status: 200,
        statusText: 'OK'
      })
      jest.spyOn(window, 'fetch').mockReturnValue(Promise.resolve(response))
    })

    it('makes a `PATCH` request with a JSON body', async () => {
      const response = await patch(endpoint, {body: {baz: 'qux'}})
      expect(response).toEqual({foo: 'bar'})
      expect(window.fetch).toHaveBeenCalledWith(url, {
        method: 'PATCH',
        body: '{"baz":"qux"}',
        mode: 'cors',
        headers: {
          map: {
            'accept': 'application/vnd.twitchtv.v5+json',
            'content-type': 'application/json'
          }
        }
      })
    })

    it('makes a `PATCH` request with a JSON body', async () => {
      const response = await patch(endpoint, {contentType: JSON_TYPE, body: {baz: 'qux'}})
      expect(response).toEqual({foo: 'bar'})
      expect(window.fetch).toHaveBeenCalledWith(url, {
        method: 'PATCH',
        body: '{"baz":"qux"}',
        mode: 'cors',
        headers: {
          map: {
            'accept': 'application/vnd.twitchtv.v5+json',
            'content-type': 'application/json'
          }
        }
      })
    })

    it('makes a `PATCH` request with a form body', async () => {
      const response = await patch(endpoint, {contentType: FORM_TYPE, body: {baz: 'qux'}})
      expect(response).toEqual({foo: 'bar'})
      expect(window.fetch).toHaveBeenCalledWith(url, {
        method: 'PATCH',
        body: 'baz=qux',
        mode: 'cors',
        headers: {
          map: {
            'accept': 'application/vnd.twitchtv.v5+json',
            'content-type': 'application/x-www-form-urlencoded'
          }
        }
      })
    })

    it('makes a `PATCH` request with an already encoded form body', async () => {
      const response = await patch(endpoint, {contentType: FORM_TYPE, body: 'baz=qux'})
      expect(response).toEqual({foo: 'bar'})
      expect(window.fetch).toHaveBeenCalledWith(url, {
        method: 'PATCH',
        body: 'baz=qux',
        mode: 'cors',
        headers: {
          map: {
            'accept': 'application/vnd.twitchtv.v5+json',
            'content-type': 'application/x-www-form-urlencoded'
          }
        }
      })
    })
  })

  describe('.del', () => {
    beforeEach(() => {
      const response = new Response('{"foo":"bar"}', {
        status: 200,
        statusText: 'OK'
      })
      jest.spyOn(window, 'fetch').mockReturnValue(Promise.resolve(response))
    })

    it('makes a `DELETE` request', async () => {
      const response = await del(endpoint)
      expect(response).toEqual({foo: 'bar'})
      expect(window.fetch).toHaveBeenCalledWith(url, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          map: {
            'accept': 'application/vnd.twitchtv.v5+json',
            'content-type': 'application/json'
          }
        }
      })
    })
  })

  describe('with a store', () => {
    let store

    beforeEach(() => {
      const state = {data: {session: {token: 'foo'}}}
      store = createMockStore(state)
    })

    describe('.apiAction', () => {
      describe('with a success response', () => {
        beforeEach(() => {
          const response = Promise.resolve(new Response('{"foo":"bar"}', {
            status: 200,
            statusText: 'OK'
          }))
          jest.spyOn(window, 'fetch').mockReturnValue(response)

          store.dispatch(apiAction({type: 'FOOBAR'}, {url, method: 'GET'}))

          // Block execution until second action is dispatched.
          return new Promise((resolve, reject) => {
            store.subscribe(() => { resolve() })
          })
        })

        it('dispatches an initial action', () => {
          const actions = store.getActions()
          const firstAction = actions[0]
          expect(firstAction.type).toBe('FOOBAR')
        })

        it('dispatches a subsequent success action', () => {
          const actions = store.getActions()
          const secondAction = actions[1]
          expect(secondAction.type).toBe('FOOBAR_SUCCESS')
        })
      })

      describe('with an error response', () => {
        beforeEach(() => {
          const response = new Response('', {
            status: 404,
            statusText: 'Not Found'
          })
          jest.spyOn(window, 'fetch').mockReturnValue(Promise.resolve(response))

          store.dispatch(apiAction({type: 'FOOBAR'}, {url, method: 'GET'}))

          // Block execution until second action is dispatched.
          return new Promise((resolve, reject) => {
            store.subscribe(() => { resolve() })
          })
        })

        it('dispatches an initial action', () => {
          const actions = store.getActions()
          const firstAction = actions[0]
          expect(firstAction.type).toBe('FOOBAR')
        })

        it('dispatches a subsequent failure action', () => {
          const actions = store.getActions()
          const secondAction = actions[1]
          expect(secondAction.type).toBe('FOOBAR_FAILURE')
        })
      })
    })

    describe('.postAction', () => {
      beforeEach(() => {
        const response = new Response('{"foo":"bar"}', {
          status: 200,
          statusText: 'OK'
        })
        jest.spyOn(window, 'fetch').mockReturnValue(Promise.resolve(response))

        store.dispatch(postAction({type: 'FOOBAR'}, endpoint, {body: {baz: 'qux'}}))

        // Block execution until second action is dispatched.
        return new Promise((resolve, reject) => {
          store.subscribe(() => { resolve() })
        })
      })

      it('dispatches two actions', async () => {
        const actions = store.getActions()
        expect(actions).toHaveLength(2)
      })
    })

    describe('.getAction', () => {
      beforeEach(() => {
        const response = new Response('{"foo":"bar"}', {
          status: 200,
          statusText: 'OK'
        })
        jest.spyOn(window, 'fetch').mockReturnValue(Promise.resolve(response))

        store.dispatch(getAction({type: 'FOOBAR'}, endpoint, {query: {baz: 'qux'}}))

        // Block execution until second action is dispatched.
        return new Promise((resolve, reject) => {
          store.subscribe(() => { resolve() })
        })
      })

      it('dispatches two actions', async () => {
        const actions = store.getActions()
        expect(actions).toHaveLength(2)
      })
    })

    describe('.putAction', () => {
      beforeEach(() => {
        const response = new Response('{"foo":"bar"}', {
          status: 200,
          statusText: 'OK'
        })
        jest.spyOn(window, 'fetch').mockReturnValue(Promise.resolve(response))

        store.dispatch(putAction({type: 'FOOBAR'}, endpoint, {body: {baz: 'qux'}}))

        // Block execution until second action is dispatched.
        return new Promise((resolve, reject) => {
          store.subscribe(() => { resolve() })
        })
      })

      it('dispatches two actions', async () => {
        const actions = store.getActions()
        expect(actions).toHaveLength(2)
      })
    })

    describe('.patchAction', () => {
      beforeEach(() => {
        const response = new Response('{"foo":"bar"}', {
          status: 200,
          statusText: 'OK'
        })
        jest.spyOn(window, 'fetch').mockReturnValue(Promise.resolve(response))

        store.dispatch(patchAction({type: 'FOOBAR'}, endpoint, {body: {baz: 'qux'}}))

        // Block execution until second action is dispatched.
        return new Promise((resolve, reject) => {
          store.subscribe(() => { resolve() })
        })
      })

      it('dispatches two actions', async () => {
        const actions = store.getActions()
        expect(actions).toHaveLength(2)
      })
    })

    describe('.delAction', () => {
      beforeEach(() => {
        const response = new Response('{"foo":"bar"}', {
          status: 200,
          statusText: 'OK'
        })
        jest.spyOn(window, 'fetch').mockReturnValue(Promise.resolve(response))

        store.dispatch(delAction({type: 'FOOBAR'}, endpoint))

        // Block execution until second action is dispatched.
        return new Promise((resolve, reject) => {
          store.subscribe(() => { resolve() })
        })
      })

      it('dispatches two actions', async () => {
        const actions = store.getActions()
        expect(actions).toHaveLength(2)
      })
    })
  })
})
