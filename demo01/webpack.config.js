// var path = require('path');

module.exports = {
  devServer:{
    // contentBase: path.join(__dirname, 'dist'),
    compress: true,
    // host: '0.0.0.0' ,
    port: 8081,
    // hotOnly: true
    hot: true
  },
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  }
};
