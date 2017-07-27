import React from 'react'
import {render} from '../utils/renderer'
import Home from './Home'

describe('Home', () => {
  let tree

  beforeEach(() => {
    tree = render(
      <Home />
    )
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
