import {configure} from '@storybook/react'
import {setOptions} from '@storybook/addon-options'

setOptions({
  name: 'Twitch',
  url: 'https://github.com/unindented/twitch-x'
})

const context = require.context('../../src', true, /\.stories\.js$/)
configure(() => { context.keys().forEach(context) }, module)
