const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: ["./app/index.js"],
    output:{
    filename:"bundle.js",
    path: path.join(__dirname+'/build')
  },
  module : {
    loaders:[
      {test: /\.js$/,
       loaders:"babel-loader",
       exclude:/node_modules/},
       {test: /\.css$/,
       loaders:'style-loader!css-loader'}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
