const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  }
})
module.exports = withCSS(withSass({
    webpack (config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader'
        }
      })
      return config
    }
  }))