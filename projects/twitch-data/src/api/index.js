import {stringify} from 'qs'
import {API_URL} from '../constants'
import {getToken} from '../selectors/session'
import {supplant} from '../utils/string'

export const JSON_TYPE = 'application/json'
export const FORM_TYPE = 'application/x-www-form-urlencoded'
export const TEXT_TYPE = 'text/plain'
export const TWITCH_TYPE = 'application/vnd.twitchtv.v5+json'

export function api (config) {
  let {
    url,
    method,
    token,
    params,
    query,
    body,
    contentType,
    responseType
  } = config

  // Add base URL if necessary.
  if (url.indexOf('/') === 0) {
    url = `${API_URL}${url}`
  }

  // Interpolate parameters.
  url = supplant(url, params)

  // Add query if necessary.
  if (query != null) {
    url = `${url}?${stringify(query)}`
  }

  responseType = responseType || TWITCH_TYPE
  contentType = contentType || JSON_TYPE

  const headers = new Headers({
    'Accept': responseType,
    'Content-Type': contentType,
    'Client-ID': process.env.TWITCH_CLIENT_ID
  })
  if (token != null) {
    headers.append('Authorization', `OAuth ${token}`)
  }

  const options = {
    mode: 'cors',
    headers,
    method
  }
  if (body != null && typeof body === 'object') {
    if (contentType === JSON_TYPE) {
      options.body = JSON.stringify(body)
    } else if (contentType === FORM_TYPE) {
      options.body = stringify(body)
    }
  } else if (body != null) {
    options.body = body
  }

  return fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(`${response.status} ${response.statusText}`)
      }
    })
}

export function apiAction (action, config) {
  const {type, payload: req} = action

  return (dispatch, getState) => {
    const state = getState()
    const token = getToken(state)

    const expandedConfig = {...config, token}

    dispatch(action)

    api(expandedConfig)
      .then((res) => {
        dispatch({
          type: `${type}_SUCCESS`,
          payload: {request: req, response: res}
        })
      })
      .catch((err) => {
        dispatch({
          type: `${type}_FAILURE`,
          payload: {request: req, response: err},
          error: true
        })
      })
  }
}

function generateConfig (url, method, config) {
  return {
    ...config,
    url,
    method
  }
}

export function post (url, config = {}) {
  return api(generateConfig(url, 'POST', config))
}

export function get (url, config = {}) {
  return api(generateConfig(url, 'GET', config))
}

export function put (url, config = {}) {
  return api(generateConfig(url, 'PUT', config))
}

export function patch (url, config = {}) {
  return api(generateConfig(url, 'PATCH', config))
}

export function del (url, config = {}) {
  return api(generateConfig(url, 'DELETE', config))
}

export function postAction (action, url, config = {}) {
  return apiAction(action, generateConfig(url, 'POST', config))
}

export function getAction (action, url, config = {}) {
  return apiAction(action, generateConfig(url, 'GET', config))
}

export function putAction (action, url, config = {}) {
  return apiAction(action, generateConfig(url, 'PUT', config))
}

export function patchAction (action, url, config = {}) {
  return apiAction(action, generateConfig(url, 'PATCH', config))
}

export function delAction (action, url, config = {}) {
  return apiAction(action, generateConfig(url, 'DELETE', config))
}
