module.exports.getConfig = function(type) {

  var isDev = type === 'development';

  var config = {
    entry: './src/index.js',
    output: {
      path: __dirname,
      filename: 'bundle.js'
    },
    debug : isDev,
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }]
    }
  };

  if(isDev){
    config.devtool = 'eval';
  }

  return config;
}
