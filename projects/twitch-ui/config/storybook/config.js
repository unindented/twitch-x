import React from 'react'
import {ThemeProvider} from 'styled-components'
import {addDecorator, configure} from '@storybook/react'
import {withKnobs, select} from '@storybook/addon-knobs'
import {setOptions} from '@storybook/addon-options'
import {initializeRTL} from 'storybook-addon-rtl'
import Root from '../../src/components/Root'
import themes from '../../src/themes'

const Decorator = Root.extend`
  min-height: 100vh;
`

addDecorator((story) => {
  const content = story()

  const themeNames = Object.keys(themes)
  const themeName = select('Theme', themeNames, themeNames[0])

  return (
    <ThemeProvider theme={themes[themeName]}>
      <Decorator>
        {content}
      </Decorator>
    </ThemeProvider>
  )
})

addDecorator(withKnobs)

setOptions({
  name: 'Twitch',
  url: 'https://github.com/unindented/twitch-x'
})

initializeRTL()

const context = require.context('../../src', true, /\.stories\.js$/)
configure(() => { context.keys().forEach(context) }, module)
