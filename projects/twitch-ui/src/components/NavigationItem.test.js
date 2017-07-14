import React from 'react'
import {renderWithTheme} from '../utils/renderer'
import NavigationItem from './NavigationItem'

describe('NavigationItem', () => {
  let tree

  beforeEach(() => {
    tree = renderWithTheme(<NavigationItem
      icon='home'
      iconAlt=''
      label='Home'
    />)
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
