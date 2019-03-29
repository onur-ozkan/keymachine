'use strict'

const configuration = ({
  lenght: null,
  possibility: null
})

const keymachine = () => {
  let result = ''

  if (configuration.lenght == null) {
    configuration.lenght = 7
  }

  if (configuration.possibility == null) {
    configuration.possibility = 'Awxyz08EFGLmno345pqrstMDSTY12HIJKZabcNOPQRBCdef67ghijkUVWXluv9'
  }

  for (let x = 0; x < configuration.lenght; x++) {
    result += configuration.possibility.charAt(Math.floor(Math.random() * configuration.possibility.length))
  }

  return result
}

module.exports = {
  configuration,
  keymachine
}
