import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Navigation from './Navigation'

describe('Navigation', () => {
  let tree

  beforeEach(() => {
    const renderer = new ShallowRenderer()
    renderer.render(<Navigation />)
    tree = renderer.getRenderOutput()
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
