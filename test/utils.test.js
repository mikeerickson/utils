const utils = require('../')
const { expect } = require('chai')
const { timestamp, padZero, classnames, wordwrap, randomName, promisify } = require('../')

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
  })
  describe('Utils: Wordwrap', () => {
    it('should confirm exports are valid functions', done => {
      expect(typeof wordwrap).to.be.equal('function')
      expect(typeof utils.wordwrap).to.be.equal('function')
      done()
    })
  }),
  describe('Utils: Random Name', () => {
    it('should confirm exports are valid functions', done => {
      expect(typeof randomName).to.be.equal('function')
      expect(typeof utils.randomName).to.be.equal('function')
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
})
