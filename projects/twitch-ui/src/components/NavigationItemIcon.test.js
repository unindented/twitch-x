import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import NavigationItemIcon from './NavigationItemIcon'

describe('NavigationItemIcon', () => {
  let tree

  beforeEach(() => {
    const renderer = new ShallowRenderer()
    renderer.render(<NavigationItemIcon
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
