import React from 'react'
import {renderWithTheme} from '../utils/renderer'
import NavigationLink from './NavigationLink'

describe('NavigationLink', () => {
  let tree

  beforeEach(() => {
    tree = renderWithTheme(<NavigationLink
      href='/'
      icon='home'
      iconAlt=''
      label='Home'
    />)
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
