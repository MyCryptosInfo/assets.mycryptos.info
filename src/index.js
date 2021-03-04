const { domainName } = require('mycryptos-locations')

const cssBaseUrl = `https://${domainName.assets}/css`
const fontsBaseUrl = `https://${domainName.assets}/fonts`
const imagesBaseUrl = `https://${domainName.assets}/images`

const cssFilename = {
  auth: 'auth.css'
}

const fontFilename = {
  aldrichFontFace: 'aldrich.css',
  aldrichFontFile: 'aldrich-regular.ttf'
}

const imageFilename = {
  favicon: 'favicon.ico',
  logotype: 'logotype.png',
  logotypeWhite: 'logotype-white.png'
}

const cssUrl = {
  auth: () => `${cssBaseUrl}/${cssFilename.auth}`
}

const fontUrl = {
  primaryFontFace: () => `${fontsBaseUrl}/${fontFilename.aldrichFontFace}`,
  primaryFontFile: () => `${fontsBaseUrl}/${fontFilename.aldrichFontFile}`
}

const imageUrl = {
  favicon: () => `${imagesBaseUrl}/${imageFilename.favicon}`,
  logotype: () => `${imagesBaseUrl}/${imageFilename.logotype}`,
  logotypeWhite: () => `${imagesBaseUrl}/${imageFilename.logotypeWhite}`
}

module.exports = {
  cssUrl,
  fontUrl,
  imageUrl
}
