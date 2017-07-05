import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import NavigationLinks from './NavigationLinks'

describe('NavigationLinks', () => {
  let tree

  beforeEach(() => {
    const renderer = new ShallowRenderer()
    renderer.render(<NavigationLinks />)
    tree = renderer.getRenderOutput()
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
