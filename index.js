const nunjucks = require('nunjucks')
const loaderUtils = require('loader-utils')

module.exports = function (source) {
  const config = loaderUtils.getLoaderConfig(this, 'nunjucks')

  if (this.cacheable) this.cacheable()

  const env = new nunjucks.Environment(
    new nunjucks.FileSystemLoader([this.context])
  )

  return env.renderString(source, config)
}
