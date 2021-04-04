const { domainName } = require('mycryptos-locations')

const cssBaseUrl = `https://${domainName.assets}/css`
const imagesBaseUrl = `https://${domainName.assets}/images`

const cssFilename = {
  auth: 'auth.css'
}

const imageFilename = {
  favicon: 'favicon.ico',
  logo192: 'logo192.png',
  logotype: 'logotype.png',
  logotypeWhite: 'logotype-white.png'
}

const cssUrl = {
  auth: () => `${cssBaseUrl}/${cssFilename.auth}`
}

const imageUrl = {
  favicon: () => `${imagesBaseUrl}/${imageFilename.favicon}`,
  logo192: () => `${imagesBaseUrl}/${imageFilename.logo192}`,
  logotype: () => `${imagesBaseUrl}/${imageFilename.logotype}`,
  logotypeWhite: () => `${imagesBaseUrl}/${imageFilename.logotypeWhite}`
}

module.exports = {
  cssUrl,
  imageUrl
}
