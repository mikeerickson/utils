const utils = require('../')
const { expect } = require('chai')
const {
  timestamp,
  padZero,
  classnames,
  wordwrap,
  randomName,
  promisify,
  render,
  colors,
  fs,
  dotProp,
  dot
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
    it('should generate a randon name using static method', done => {
      let result = randomName(10)
      expect(result.length).to.be.greaterThan(9)
      expect(result).to.match(/([0-9])/)

      done()
    })
    it('should generate a randon name using static method', done => {
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
    })
  })
  describe('Utils: fs', () => {
    it('should confirm exports are valid objects', done => {
      expect(typeof fs).to.be.equal('object')
      expect(typeof utils.fs).to.be.equal('object')
      done()
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
})
