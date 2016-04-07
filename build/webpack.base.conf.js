var path = require('path')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist/static/'),
    publicPath: '/static/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.json'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'data_json': path.resolve(__dirname, '../data_json')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    // eslint 语法检测
    // preLoaders: [
    //   {
    //     test: /\.vue$/,
    //     loader: 'vue',
    //     include: projectRoot,
    //     exclude: /node_modules/
    //   },
    //   {
    //     test: /\.js$/,
    //     loader: 'eslint',
    //     include: projectRoot,
    //     exclude: /node_modules/
    //   }
    // ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      // { //es6语法检测
      //   test: /\.js$/,
      //   loader: 'babel',
      //   include: projectRoot,
      //   exclude: /node_modules/
      // },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]' //可配置打包路径
        }
      }
    ]
  }//,
  // eslint: {
  //   formatter: require('eslint-friendly-formatter')
  // }
}
