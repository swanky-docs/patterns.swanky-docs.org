const buildConfig = require('swanky').build;

// Retrieve webpack build configuration
module.exports = buildConfig({
  // this stops a new browser tab opening every time we restart
  debug: false,

  // extended user defined webpack loaders
  loaders: [{
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: [{
      loader: 'babel-loader',
      query: {
        presets: ['babel-preset-react'].map(require.resolve) // just to play it safe
      }
    }]
  }]
});
