const withSass = require('@zeit/next-sass')
const path = require('path')

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  webpack: (config, { dev }) => {
    config.resolve.modules.push(
      path.resolve(__dirname, './')
    )
    return config
  }
})
