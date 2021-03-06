import React from 'react'
import {render} from '../utils/renderer'
import App from './App'

describe('App', () => {
  let tree

  beforeEach(() => {
    tree = render(
      <App>
        foo
      </App>
    )
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
