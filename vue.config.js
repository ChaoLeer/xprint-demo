module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/xprint-demo/'
    : '/',
  devServer: {
    port: 9000
  }
}