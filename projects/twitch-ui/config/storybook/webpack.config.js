const path = require('path')

const root = path.resolve(__dirname, '../../')
const input = path.resolve(root, './src/')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|svg)$/,
        include: [
          input,
          path.dirname(require.resolve('twitch-assets'))
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  }
}
