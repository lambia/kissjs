const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// require("@babel/register");

const CONFIG = {
  mode: "development",
  entry: path.resolve(__dirname, './src/app.js'),
  devtool: 'inline-source-map',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    extensions: ['*', '.js']
  //   modules: [
  //     path.resolve('./src'),
  //     path.resolve('./node_modules')
  //   ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    }),
    // inject: false 
  ],
  devServer: {
    // index: "index.html",
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    port: 9000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        // use: ['babel-loader']
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  }
};

module.exports = CONFIG;
