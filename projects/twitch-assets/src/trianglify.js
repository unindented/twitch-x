const fs = require('fs')
const path = require('path')
const shell = require('shelljs')
const Trianglify = require('trianglify')

const pattern = Trianglify({
  width: 1920,
  height: 1080,
  seed: 'twitch',
  x_colors: [
    '#2c2541',
    '#2c2541'
  ],
  y_colors: [
    '#6441a4',
    '#000000'
  ]
})
const svg = pattern.svg()
svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
const result = `<?xml version="1.0" encoding="UTF-8"?>
${svg.outerHTML}`

const dst = process.argv[2]
const dir = path.dirname(dst)

shell.mkdir('-p', dir)
fs.writeFileSync(dst, result)
