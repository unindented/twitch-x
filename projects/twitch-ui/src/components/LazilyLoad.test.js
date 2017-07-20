import React from 'react'
import {renderWithTheme} from '../utils/renderer'
import LazilyLoad from './LazilyLoad'

jest.useFakeTimers()

describe('LazilyLoad', () => {
  let tree

  beforeEach(() => {
    const load = (callback) => {
      setTimeout(callback.bind(null, <div>OHAI</div>), 5000)
    }

    tree = renderWithTheme(
      <LazilyLoad load={load}>
        {(mod) => mod}
      </LazilyLoad>
    )
  })

  it('renders a spinner', () => {
    expect(tree).toMatchSnapshot()
  })

  it('renders the real component once loaded', () => {
    jest.runAllTimers()
    expect(tree).toMatchSnapshot()
  })
})
