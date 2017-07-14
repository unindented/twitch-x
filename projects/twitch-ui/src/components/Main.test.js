import React from 'react'
import {renderWithTheme} from '../utils/renderer'
import Main from './Main'

describe('Main', () => {
  let tree

  beforeEach(() => {
    tree = renderWithTheme(<Main />)
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
