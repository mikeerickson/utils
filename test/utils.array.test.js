const utils = require('../')
const expect = require('chai').expect

describe('Utils: Array Helpers', () => {
  let user
  beforeEach(() => {
    user = ['michael', 'joseph', 'erickson']
  })
  it('should `insert` element into array', done => {
    user.insert(0, 'mr')
    expect(user)
      .to.be.an('array')
      .that.includes('mr')
    done()
  })
  it('should `remove` element from array', done => {
    user.insert(0, 'mr')
    user.remove(0)
    expect(user)
      .to.be.an('array')
      .that.does.not.include('mr')
    done()
  })
  it('should `delete` element from array', done => {
    user.insert(0, 'mr')
    user.delete(0)
    expect(user)
      .to.be.an('array')
      .that.does.not.include('mr')
    done()
  })
  it('should `remove` element from end of array using -1', done => {
    user.remove(-1)
    expect(user)
      .to.be.an('array')
      .that.does.not.include('erickson')
    done()
  })
  it('should `delete` element from end of array using -1', done => {
    user.delete(-1)
    expect(user)
      .to.be.an('array')
      .that.does.not.include('erickson')
    done()
  })
  it('should `find` an element in array', done => {
    let idx = user.findInArray('erickson')
    expect(user).to.be.an('array')
    expect(idx).to.be.greaterThan(0)
    expect(user[idx]).to.equal('erickson')
    done()
  })
  it('should `append` item to array', done => {
    user.append('jr')
    expect(user)
      .to.be.an('array')
      .that.includes('jr')
    done()
  })
  it('should `search` for an item in array', done => {
    let idx = user.search('michael')
    expect(user[idx]).to.equal('michael')
    done()
  })
  it('should `search` for multiple items in array', done => {
    let fname = user.search('michael')
    expect(user[fname]).to.equal('michael')

    let mname = user.search('joseph')
    expect(user[mname]).to.equal('joseph')

    let lname = user.search('erickson')
    expect(user[lname]).to.equal('erickson')
    done()
  })
  it('should `delete` elements from array until empty', done => {
    user.delete(0)
    expect(user).to.be.an('array')
    expect(user).to.have.lengthOf(2)

    user.delete(0)
    expect(user).to.be.an('array')
    expect(user).to.have.lengthOf(1)

    user.delete(0)
    expect(user).to.be.an('array')
    expect(user).to.be.empty

    done()
  })
  it('should `remove` elements from array until empty', done => {
    user.remove(0)
    expect(user).to.be.an('array')
    expect(user).to.have.lengthOf(2)

    user.remove(0)
    expect(user).to.be.an('array')
    expect(user).to.have.lengthOf(1)

    user.remove(0)
    expect(user).to.be.an('array')
    expect(user).to.be.empty

    done()
  })
  it('should `delete` multiple items from array', done => {
    user.delete(0, 3)
    expect(user).to.be.an('array')
    expect(user).to.have.lengthOf(0)
    done()
  })
  it('should `remove` multiple items from array', done => {
    user.remove(0, 3)
    expect(user).to.be.an('array')
    expect(user).to.have.lengthOf(0)
    done()
  })
  it('should `delete` items from array with `numItems` greater than array size', done => {
    user.delete(0, 13)
    expect(user).to.be.an('array')
    expect(user).to.have.lengthOf(0)
    done()
  })
  it('should `remove` items from array with `numItems` greater than array size', done => {
    user.remove(0, 13)
    expect(user).to.be.an('array')
    expect(user).to.have.lengthOf(0)
    done()
  })
})
