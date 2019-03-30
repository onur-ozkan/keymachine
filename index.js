'use strict'

const configuration = ({
  lenght: null,
  possibility: null,
  case: 'mixed'
})

const keymachine = () => {
  let result = ''

  if (configuration.lenght == null) {
    configuration.lenght = 7
  }

  if (configuration.possibility == null) {
    configuration.possibility = 'abcdefghijklmnopqrstuvwxyz0123456789'
  }

  for (let x = 0; x < configuration.lenght; x++) {
    if (configuration.case === 'mixed') {
      let chance = Math.random() < 0.5
      result += (chance === true) ? configuration.possibility.toLowerCase().charAt(Math.floor(Math.random() * configuration.possibility.length)) : configuration.possibility.toUpperCase().charAt(Math.floor(Math.random() * configuration.possibility.length))
    } else if (configuration.case === 'upper') {
      result += configuration.possibility.toUpperCase().charAt(Math.floor(Math.random() * configuration.possibility.length))
    } else if (configuration.case === 'lower') {
      result += configuration.possibility.toLowerCase().charAt(Math.floor(Math.random() * configuration.possibility.length))
    } else {
      result = 'Invalid configurations. Please check usage -> https://github.com/ozkanonur/keymachine/blob/master/README.md'
    }
  }

  return result
}

module.exports = {
  configuration,
  keymachine
}
