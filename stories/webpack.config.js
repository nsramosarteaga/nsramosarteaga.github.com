const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpack = new HtmlWebpackPlugin({
  template:'assets/index.tamplate.html',
  filename:'index.html'
});

module.exports={
  entry:'./assets/javascript/entry.js',
  output:{
    publicPath:'/',
    path:path.join(__dirname,'..'),
    filename:'dist/javascript/bundle.js'
  },
  plugins: [htmlWebpack],
  module:{
    rules:[
      {
        test:/\.scss$/,
        use:['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader'
      }
    ]
  }
}
