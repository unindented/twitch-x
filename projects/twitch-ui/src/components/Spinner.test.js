import React from 'react'
import {renderWithTheme} from '../utils/renderer'
import Spinner from './Spinner'

describe('Spinner', () => {
  let tree

  beforeEach(() => {
    tree = renderWithTheme(<Spinner />)
  })

  it('renders', () => {
    expect(tree).toMatchSnapshot()
  })
})
