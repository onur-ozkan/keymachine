'use strict'

const configuration = ( {
  lenght: null,
  possible: null
} )

const keymachine = () => {

  let result = ''

  if ( configuration.lenght == null ) {
    configuration.lenght = 7
  }

  if ( configuration.possible == null ) {
    configuration.possible = 'Awxyz08EFGLmno345pqrstMDSTY12HIJKZabcNOPQRBCdef67ghijkUVWXluv9'
  }

  for ( let x = 0; x < configuration.lenght; x++ ) {
    result += configuration.possible.charAt( Math.floor( Math.random() * configuration.possible.length ) )
  }

  return result
}

module.exports = {
  configuration,
  keymachine
}