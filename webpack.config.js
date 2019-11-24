const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/assets')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    publicPath: '/assets/',
    liveReload: true,
    port: 8888
  },
  resolve: {
      alias:{
    
      }
  },
  module:{
    rules:[
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            
     ]
  },
  plugins: [
  //  new ExtractTextPlugin({filename:'app.bundle.css'}),
    new UglifyJsPlugin(),
    new CopyWebpackPlugin([
      { from: './src/static' }
    ])

]
};