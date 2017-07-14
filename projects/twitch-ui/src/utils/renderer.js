import React from 'react'
import renderer from 'react-test-renderer'
import {ThemeProvider} from 'styled-components'
import themes from '../themes'

export function renderWithTheme (node, theme = 'default') {
  return renderer.create(
    <ThemeProvider theme={themes[theme]}>
      {node}
    </ThemeProvider>
  )
}
