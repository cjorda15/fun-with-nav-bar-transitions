const path = require('path')

module.exports = {
  entry:["./app/index.js"],
  output:{
    filename:"bundle.js",
    path: path.join(__dirname+'/build')
  },
  module : {
    loaders:[
      {test: /\.js$/,
       loaders:"babel-loader",
       exclude:/node_modules/}
    ]
  }
}
