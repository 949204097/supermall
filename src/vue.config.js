module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        //@已默认配置为src
        "assets": '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views' ,
      }
    }
  }
}