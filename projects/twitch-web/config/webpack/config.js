const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const StyleExtHtmlPlugin = require('style-ext-html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

const pkg = require('../../package.json')

const root = path.resolve(__dirname, '../../')
const assets = path.resolve(root, './assets/')
const input = path.resolve(root, './src/')
const output = path.resolve(root, './build/')
const serviceWorker = 'sw.js'

module.exports = (environment) => {
  const isProduction = (environment === 'production')

  const config = {
    entry: Object.assign({
      'index': input
    }, isProduction ? {
      'vendor': [
        'react',
        'react-dom'
      ]
    } : {}),

    output: {
      path: output,
      pathinfo: !isProduction,
      publicPath: isProduction ? '/twitch-x/web/' : undefined,
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
          include: [
            input,
            path.dirname(require.resolve('twitch-ui'))
          ],
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        },
        {
          test: /\.js$/,
          include: [
            input,
            path.dirname(require.resolve('twitch-ui'))
          ],
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        },
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
        },
        {
          test: /\.webmanifest$/,
          include: assets,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            },
            {
              loader: 'webmanifest-loader',
              options: pkg
            }
          ]
        },
        {
          test: require.resolve('react'),
          use: [
            {
              loader: 'expose-loader',
              options: 'React'
            }
          ]
        }
      ]
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(environment),
          'SERVICE_WORKER': JSON.stringify(serviceWorker)
        }
      }),
      new ExtractTextPlugin({
        filename: `[name]${isProduction ? '.[chunkhash]' : ''}.css`,
        disable: !isProduction
      }),
      new HtmlPlugin({
        title: pkg.productName,
        template: './assets/template.ejs',
        favicon: './node_modules/twitch-assets/build/web/favicon.ico',
        themeColor: pkg.themeColor,
        backgroundColor: pkg.backgroundColor
      }),
      new StyleExtHtmlPlugin({
        enabled: isProduction
      })
    ].concat(isProduction ? [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: `[name]${isProduction ? '.[chunkhash]' : ''}.js`
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compressor: {
          warnings: false
        }
      }),
      new WorkboxPlugin({
        globPatterns: ['**/*.{css,html,js,webmanifest}'],
        swDest: path.resolve(output, serviceWorker)
      })
    ] : [])
  }

  return config
}
