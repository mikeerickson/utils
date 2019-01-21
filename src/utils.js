const { format, getMilliseconds } = require('date-fns')
const strftime = require('strftime')

const utils = {
  strftime,
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
  }
}

module.exports = utils
