const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CLIENT_DIR = path.resolve(__dirname, './');
const SERVER_DIR = path.resolve(__dirname, 'server/public');
const DIST_DIR = path.resolve(__dirname, './server/public');

const loaders = [{
  test: /\.js$/,
  exclude: /node_modules/,
  include: CLIENT_DIR,
  loader: 'babel',
  query: {
    presets: ['es2015', 'react']
  }
},
{
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
  }  
];

module.exports = [{
  name: 'client',
  target: 'web',
  context: CLIENT_DIR,
  entry: './index.js',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: loaders
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./modules")]
  },
  resolve: {
    alias: {
      components: path.resolve(CLIENT_DIR, 'modules')
    }
  },
  plugins: [
    new ExtractTextPlugin('bundle.css', {allChunks: true})
  ]
}];