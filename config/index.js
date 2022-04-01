const path = require('path')

const config = {
  alias: {
    '@Storage': path.resolve(__dirname, '..', 'src/Utils/Storage/index.taro.js'),
  },
  projectName: 'TimeShare',
  date: '2022-03-26',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  framework: 'react',
  plugins: ['@tarojs/plugin-html'],
  mini: {
    postcss: {
      pxtransform: { enable: false },
      url: { enable: true, config: { limit: 1024 } },
      cssModules: { enable: false }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
