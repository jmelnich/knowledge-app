import path from 'path'
import webpack from 'webpack'

module.exports = {
  entry: ['webpack-hot-middleware/client',
      'react-hot-loader/patch',
      path.join(__dirname, './client/index.js')
        ],
  output: {
    path: '/',
    publicPath: '/',
    filename: 'bundle.js'
  },
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin()
    ],
	module: {
		rules:
    [
      {
        test:  /\.scss$/,
        use: ['style-loader',  'css-loader', 'sass-loader']
      },
      {
          test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
                name: '[path][name].[ext]',
              limit: 5000
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        include: [path.join(__dirname, 'client/')],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
	},
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
