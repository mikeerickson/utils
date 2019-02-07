const strftime = require('strftime')
const classNames = require('classnames')
const { format, getMilliseconds } = require('date-fns')
const { promisify } = require('util')
const fs = require('fs-extra')
const fsPath = require('fs-path')
const ejs = require('ejs')
const chalk = require('chalk')

const Haikunator = require('haikunator')

const haikunator = new Haikunator()

// Array reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// extend the Array proptype with some useful helpers
Array.prototype.insert = function(index, item) {
  if (typeof index === 'string') {
    item = index
    index = 0
  } else {
    index = index === -1 ? 0 : index
  }
  this.splice(index, 0, item)
}

Array.prototype.append = function(item = '') {
  this.push(item)
}

Array.prototype.delete = function(index = 0, numItems = 1) {
  index = index > this.length ? this.length - 1 : index
  index === -1 ? this.splice(this.length - 1, 1) : this.splice(index, numItems)
}

Array.prototype.remove = function(index = 0, numItems = 1) {
  index = index > this.length ? this.length - 1 : index
  index === -1 ? this.splice(this.length - 1, 1) : this.splice(index, numItems)
}

Array.prototype.findInArray = function(item = '') {
  return this.indexOf(item)
}

Array.prototype.search = function(item = '') {
  return this.indexOf(item)
}

const utils = {
  colors: chalk,
  fs,
  fsPath,
  promisify,
  strftime,
  pretty: require('@medv/prettyjson'),
  dot: require('dot-prop'),
  dotProp: require('dot-prop'),
  has: require('has-value'),
  tildify: require('tildify'),
  uuid: require('uuid/v1'),
  userHome: () => {
    return require('os').homedir()
  },
  render: (template = '', data = {}) => {
    return ejs.render(template, data)
  },

  padZero(num = 0, size = 3) {
    return ('000000000' + num).substr(-size)
  },

  timestamp(useAMPM = false, showSeconds = true, showMilliseconds = false) {
    let tsd = new Date()
    let tsFormat = showSeconds ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd HH:mm'
    tsFormat = useAMPM ? tsFormat + ' a' : tsFormat
    let ms = showMilliseconds && !useAMPM ? '.' + this.padZero(getMilliseconds(tsd), 3) : ''
    return format(tsd, tsFormat) + ms
  },

  windowSize() {
    const winSize = require('window-size')
    return winSize === undefined ? { width: 100 } : winSize
  },

  wordwrap(str, maxChars, lineEnd = '\n') {
    let sum_length_of_words = word_array => {
      let out = 0
      if (word_array.length != 0) {
        for (let i = 0; i < word_array.length; i++) {
          let word = word_array[i]
          out = out + word.length
        }
      }
      return out
    }

    let chunkString = (str, length) => {
      return str.match(new RegExp('.{1,' + length + '}', 'g'))
    }

    let splitLongWord = (word, maxChar) => {
      let out = []
      if (maxChar >= 1) {
        let wordArray = chunkString(word, maxChar - 1) // just one under maxChar in order to add the innerword separator '-'
        if (wordArray.length >= 1) {
          // Add every piece of word but the last, concatenated with '-' at the end
          for (let i = 0; i < wordArray.length - 1; i++) {
            let piece = wordArray[i] + '-'
            out.push(piece)
          }
          // finally, add the last piece
          out.push(wordArray[wordArray.length - 1])
        }
      }
      // If nothing done, just use the same word
      if (out.length == 0) {
        out.push(word)
      }
      return out
    }

    let split_out = [[]]
    let split_string = str.split(' ')
    for (let i = 0; i < split_string.length; i++) {
      let word = split_string[i]

      // If the word itself exceed the max length, split it,
      if (word.length > maxChars) {
        let wordPieces = splitLongWord(word, maxChars)
        for (let i = 0; i < wordPieces.length; i++) {
          let wordPiece = wordPieces[i]
          split_out = split_out.concat([[]])
          split_out[split_out.length - 1] = split_out[split_out.length - 1].concat(wordPiece)
        }
      } else {
        // otherwise add it if possible
        if (sum_length_of_words(split_out[split_out.length - 1]) + word.length > maxChars) {
          split_out = split_out.concat([[]])
        }

        split_out[split_out.length - 1] = split_out[split_out.length - 1].concat(word)
      }
    }

    for (let i = 0; i < split_out.length; i++) {
      split_out[i] = split_out[i].join(' ')
    }

    return split_out.join(lineEnd)
  },

  deepMerge(obj) {
    return { ...obj }
  },

  classnames(args) {
    return classNames(args)
  },

  randomName: (tokenLength = 0) => {
    return haikunator.haikunate({ tokenLength })
  }
}

module.exports = utils

// export all methods so they call be used statically
exports.classnames = utils.classnames
exports.deepMerge = utils.deepMerge
exports.timestamp = utils.timestamp
exports.padZero = utils.padZero
exports.wordwrap = utils.wordwrap
exports.randomName = utils.randomName
exports.render = utils.render
exports.promisify = utils.promisify
exports.fs = utils.fs
exports.fsPath = utils.fsPath
exports.colors = utils.colors
exports.dotProp = utils.dotProp
exports.dot = utils.dot
exports.has = utils.has
exports.tildify = utils.tildify
exports.userHome = utils.userHome
exports.pretty = utils.pretty
