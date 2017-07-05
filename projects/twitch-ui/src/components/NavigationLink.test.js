import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import NavigationLink from './NavigationLink'

describe('NavigationLink', () => {
  let tree

  beforeEach(() => {
    const renderer = new ShallowRenderer()
    renderer.render(<NavigationLink
      href='/'
      icon='home'
      iconAlt=''
      label='Home'
    />)
    tree = renderer.getRenderOutput()
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
