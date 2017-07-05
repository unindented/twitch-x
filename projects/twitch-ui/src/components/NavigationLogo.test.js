import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import NavigationLogo from './NavigationLogo'

describe('NavigationLogo', () => {
  let tree

  beforeEach(() => {
    const renderer = new ShallowRenderer()
    renderer.render(<NavigationLogo />)
    tree = renderer.getRenderOutput()
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
