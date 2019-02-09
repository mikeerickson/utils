const path = require('path')
const utils = require('../')
const { expect } = require('chai')
const {
  timestamp,
  padZero,
  classnames,
  wordwrap,
  randomName,
  random,
  promisify,
  render,
  colors,
  fs,
  dotProp,
  dot,
  has,
  tildify,
  userHome,
  pretty
} = require('../')

describe('Utils Module', () => {
  describe('Utils: Timestamp', () => {
    it('should confirm exports are valid functions', done => {
      expect(typeof timestamp).to.be.equal('function')
      expect(typeof utils.timestamp).to.be.equal('function')
      done()
    })
    it('use destructered timestamp', done => {
      let ts = timestamp()
      expect(ts).to.not.match(/([AaPp][Mm])/)
      expect(ts).to.matches(/([0-5]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])/)
      done()
    })
    it('show default timestamp', done => {
      let ts = utils.timestamp()
      expect(ts).to.not.match(/([AaPp][Mm])/)
      expect(ts).to.matches(/([0-5]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])/)
      done()
    })
    it('show default timestamp w/ AMPM', done => {
      let ts = utils.timestamp(true, true)
      expect(ts).to.matches(/([0-5]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9]) ([AaPp][Mm])/)
      done()
    })
    it('show default timestamp w/ AMPM and no seconds', done => {
      let ts = utils.timestamp(true, false)
      expect(ts).to.matches(/([0-5]?[0-9]):([0-5]?[0-9]) ([AaPp][Mm])/)
      done()
    })
    it('show default timestamp w/ seconds', done => {
      let ts = utils.timestamp(false, true)
      expect(ts).to.matches(/([0-5]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])/)
      done()
    })
    it('show default timestamp w/ hours and minutes only', done => {
      let ts = utils.timestamp(false, false)
      expect(ts).to.matches(/([0-5]?[0-9]):([0-5]?[0-9])/)
      done()
    })
    it('show default timestamp w/ milliseconds', done => {
      let ts = utils.timestamp(false, true, true)
      expect(ts).to.matches(/[.]([0-9]{3})/)
      expect(ts).to.not.match(/([AaPp][Mm])/)
      done()
    })
  })
  describe('Utils: PadZero', () => {
    it('should confirm exports are valid functions', done => {
      expect(typeof padZero).to.be.equal('function')
      expect(typeof utils.padZero).to.be.equal('function')
      done()
    })
    it('padZero', done => {
      let value = utils.padZero(3, 3)
      expect(value).to.equal('003')
      done()
    })
    it('padZero w/ 5 chars', done => {
      let value = utils.padZero(333322, 5)
      expect(value).to.equal('33322')
      done()
    })
    it('padZero w/ 2 chars', done => {
      let value = utils.padZero(2, 2)
      expect(value).to.equal('02')
      done()
    })
    it('padZero w/ 1 char', done => {
      let value = utils.padZero(2, 1)
      expect(value).to.equal('2')
      done()
    })
  })
  describe('Utils: Classnames', () => {
    it('should confirm exports are valid functions', done => {
      expect(typeof classnames).to.be.equal('function')
      expect(typeof utils.classnames).to.be.equal('function')
      done()
    })
    it('should properly generate class name strings based on array content using class method', done => {
      let items = ['one', 'two', 'three']
      let result = utils.classnames(items)
      expect(result).to.equal('one two three')
      done()
    })
    it('should properly generate class name strings based on array content using static method', done => {
      let items = ['one', 'two', 'three']
      let result = classnames(items)
      expect(result).to.equal('one two three')
      done()
    })
  })
  describe('Utils: Has', () => {
    it('should confirm exports are valid functions', done => {
      expect(typeof has).to.be.equal('function')
      expect(typeof utils.has).to.be.equal('function')
      done()
    })
    it('should properly return has result', done => {
      let result = has(Object.prototype, 'hasOwnProperty')
      expect(result).to.equal(true) // true
      done()
    })
    it('should confirm has works with nested objects', done => {
      let mike = { fname: 'Mike', kids: { joelle: true } }
      let result = has(mike, 'kids.joelle')
      expect(result).to.equal(true) // true
      done()
    })
  })
  describe('Utils: Wordwrap', () => {
    it('should confirm exports are valid functions', done => {
      expect(typeof wordwrap).to.be.equal('function')
      expect(typeof utils.wordwrap).to.be.equal('function')
      done()
    })
    it('should wrap words based on desired length', done => {
      let test = 'Now is the time for all good men to come to the aid of their country and fight!'
      let wrapped = wordwrap(test, 10)
      let items = wrapped.split('\n')

      expect(items.length).to.equal(7)
      expect(items[0]).to.contain('Now is the')
      expect(items[1]).to.contain('time for all')
      expect(items[2]).to.contain('good men to')
      expect(items[3]).to.contain('come to the')
      expect(items[4]).to.contain('aid of their')
      expect(items[5]).to.contain('country and')
      expect(items[6]).to.contain('fight!')
      done()
    })
  }),
  describe('Utils: Random Name', () => {
    it('should confirm exports are valid functions', done => {
      expect(typeof randomName).to.be.equal('function')
      expect(typeof utils.randomName).to.be.equal('function')
      done()
    })
    it('should generate a randon name using static method', done => {
      let result = randomName()
      expect(result).to.not.match(/([0-9])/)
      expect(result.length).to.be.greaterThan(3)
      done()
    })
    it('should generate a randon name using static method w/ desired token length', done => {
      let result = randomName(10)
      expect(result.length).to.be.greaterThan(9)
      expect(result).to.match(/([0-9])/)

      done()
    })
    it('should generate a randon name using static method w/ alternate length', done => {
      let result = randomName(20)
      expect(result.length).to.be.greaterThan(19)
      expect(result).to.match(/([0-9])/)
      done()
    })
    it('should generate a randon name using class method', done => {
      let result = utils.randomName()
      expect(result.length).to.be.greaterThan(3)
      done()
    })
  }),
  describe('Utils: Promisify', () => {
    it('should confirm exports are valid functions', done => {
      expect(typeof promisify).to.be.equal('function')
      expect(typeof utils.promisify).to.be.equal('function')
      done()
    })
    it.skip('should execute callback method as a promise', done => {
      const fs = require('fs') // we will make a callback style fs call via promise
      const stat = promisify(fs.stat)
      stat(__filename) // get stats for current testfile
        .then(stats => {
          let bt = new Date(stats.birthtime)

          // this is the known creation date, if this test is moved to a new file
          // these values will need to be adjust accordingly (or remove the specificity of the test)
          expect(bt.getMonth() + 1).to.be.equal(1)
          expect(bt.getDate()).to.be.equal(21)
          expect(bt.getFullYear()).to.be.equal(2019)
          expect(stats.size).to.be.greaterThan(7000)
          done()
        })
        .catch(error => {
          // if all is good, we should never get here
          console.error(colors.red('handle error\n'), colors.red(error))
          expect(false).to.be.equal(true)
          done()
        })
    })
  })
  describe('Utils: Render', () => {
    it('should confirm exports are valid functions', done => {
      expect(typeof render).to.be.equal('function')
      expect(typeof utils.render).to.be.equal('function')
      done()
    })
  })
  describe('Utils: Colors', () => {
    it('should confirm exports are valid functions', done => {
      expect(typeof colors).to.be.equal('function')
      expect(typeof utils.colors).to.be.equal('function')
      done()
      // we dont need to perform any further tests, we know this library works
      // just need to make sure the entrypoints are exposed correclty
    })
  })
  describe('Utils: Pretty', () => {
    it('should confirm exports are valid functions', done => {
      expect(typeof pretty).to.be.equal('function')
      expect(typeof utils.pretty).to.be.equal('function')
      done()
      // we dont need to perform any further tests, we know this library works
      // just need to make sure the entrypoints are exposed correclty
    })
  })
  describe('Utils: Tildify', () => {
    it('should confirm exports are valid functions', done => {
      expect(typeof tildify).to.be.equal('function')
      expect(typeof utils.tildify).to.be.equal('function')
      done()
    })
    it('should tildify supplied filename', () => {
      let filename = path.join(__dirname, 'test.txt')
      let result = tildify(filename)
      expect(result).to.not.contain(userHome())
      expect(result).to.contain('~')
    })
  })
  describe('Utils: fs', () => {
    it('should confirm exports are valid objects', done => {
      expect(typeof fs).to.be.equal('object')
      expect(typeof utils.fs).to.be.equal('object')
      done()
    })
    // note:  this is a wrapper for fs-extras, do a quick and dirty promise call
    //        review the `promisify` method as well to see this same test
    it.skip('should perform a simple fs call using promises', done => {
      fs.stat(__filename)
        .then(stats => {
          let bt = new Date(stats.birthtime)
          expect(bt.getMonth() + 1).to.be.equal(1)
          expect(bt.getDate()).to.be.equal(21)
          expect(bt.getFullYear()).to.be.equal(2019)
          expect(stats.size).to.be.greaterThan(7000)
          done()
        })
        .catch(error => {
          // if all is good, we should never get here
          console.error(colors.red('handle error\n'), colors.red(error))
          expect(false).to.be.equal(true)
          done()
        })
    })
  })
  describe('Utils: dotProp', () => {
    it('should confirm exports are valid objects', done => {
      expect(typeof dotProp).to.be.equal('object')
      expect(typeof utils.dotProp).to.be.equal('object')
      done()
    })
  })
  describe('Utils: dot', () => {
    it('should confirm exports are valid objects', done => {
      expect(typeof dot).to.be.equal('object')
      expect(typeof utils.dot).to.be.equal('object')
      done()
    })
  })
  describe('Utils: random', () => {
    it('should confirm exports are valid objects', done => {
      expect(typeof random).to.be.equal('function')
      expect(typeof utils.random).to.be.equal('function')
      done()
    })
    it('should return random value', done => {
      let rnd = random(10, 20)
      expect(rnd).to.be.greaterThan(9)
      expect(rnd).to.be.lessThan(21)
      done()
    })
  })
})
