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
  ]
});
