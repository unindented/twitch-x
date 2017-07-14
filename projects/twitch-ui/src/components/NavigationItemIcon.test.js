import React from 'react'
import {renderWithTheme} from '../utils/renderer'
import NavigationItemIcon from './NavigationItemIcon'

describe('NavigationItemIcon', () => {
  let tree

  beforeEach(() => {
    tree = renderWithTheme(<NavigationItemIcon
      icon='home'
      iconAlt=''
      label='Home'
    />)
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
