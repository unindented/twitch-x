const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const StyleExtHtmlPlugin = require('style-ext-html-webpack-plugin')

const pkg = require('../../package.json')

const root = path.resolve(__dirname, '../../')
const input = path.resolve(root, './src/')
const output = path.resolve(root, './build/')

module.exports = (environment) => {
  const isProduction = (environment === 'production')

  const config = {
    entry: {
      'index': input
    },

    output: {
      path: output,
      pathinfo: !isProduction,
      publicPath: isProduction ? '/twitch-x/' : undefined,
      filename: `[name]${isProduction ? '.[chunkhash]' : ''}.js`
    },

    devtool: (!isProduction ? 'cheap-module-source-map' : 'source-map'),

    devServer: {
      contentBase: output,
      stats: 'minimal'
    },

    performance: {
      hints: (isProduction ? 'error' : false)
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          include: path.resolve(input, 'index.css'),
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        },
        {
          test: /bg\.svg$/,
          include: path.dirname(require.resolve('twitch-assets')),
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]
        },
        {
          test: /(devices|icons)\/.*\.svg$/,
          include: path.dirname(require.resolve('twitch-assets')),
          use: [
            {
              loader: 'svg-inline-loader',
              options: {
                idPrefix: true
              }
            }
          ]
        }
      ]
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(environment)
        }
      }),
      new ExtractTextPlugin({
        filename: `[name]${isProduction ? '.[chunkhash]' : ''}.css`,
        disable: !isProduction
      }),
      new HtmlPlugin({
        title: pkg.productName,
        template: './assets/template.ejs',
        favicon: './node_modules/twitch-assets/build/public/favicon.ico',
        minify: isProduction ? {
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true
        } : false
      }),
      new StyleExtHtmlPlugin({
        enabled: isProduction
      })
    ].concat(isProduction ? [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compressor: {
          warnings: false
        }
      })
    ] : [])
  }

  return config
}
