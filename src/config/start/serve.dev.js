const ExtractTextPlugin = require('extract-text-webpack-plugin');
const devServer = require('swanky').devServer;

// Start swanky dev server
module.exports = devServer({
  // this stops a new browser tab opening every time we restart
  debug: true,

  // extended user defined webpack loaders
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        query: {
          presets: ['babel-preset-react'].map(require.resolve) // just to play it safe
        }
      }]
    }
    // {
    //   test: /\/src\/content\/react-components\/Card\/Card.css$/,
    //   use: ExtractTextPlugin.extract({
    //     fallback: 'style-loader',
    //     use: 'css-loader?importLoaders=1&modules&localIdentName=[name]__[local]___[hash:base64:5]'
    //   })
    // }
    // {
    //   test: /\.css$/,
    //   exclude: /node_modules/,
    //   loader: 'style-loader!css-loader?importLoaders=1&modules&localIdentName=[name]__[local]___[hash:base64:5]'
    // }
  ]
});
