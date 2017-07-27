import React from 'react'
import {render} from '../utils/renderer'
import Communities from './Communities'

describe('Communities', () => {
  let tree

  beforeEach(() => {
    tree = render(
      <Communities />
    )
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
