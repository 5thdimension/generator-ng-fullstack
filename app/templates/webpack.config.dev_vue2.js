const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: [
    './client/dev/index.js'
  ],
  output: {
    path: __dirname + 'client/dev',
    filename: 'bundle.js'
  },
  extensions: [
    ".ts", 
    ".tsx", 
    ".js",
    ".json",
  ],
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [    
    new VueLoaderPlugin()
  ]
}