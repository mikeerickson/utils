const assert = require('assert')

var objects = [
  {
    mike: {
      fname: 'Mike',
      kids: [
        {
          fname: 'Joelle',
          kids: [{ fname: 'Alaya' }, { fname: 'Aseria' }, { fname: 'Nano' }, { fname: 'Nikori' }]
        },
        {
          fname: 'Brady',
          kids: []
        },
        {
          fname: 'Trevor',
          kids: []
        }
      ]
    },
    kira: {
      fname: 'Kira',
      kids: [{ fname: 'Baiely', kids: [] }]
    }
  }
]

var deep = { ...objects }
// let deep2 = _.clone(objects)
console.log(deep[0] === objects[0])
// console.log(deep2[0] === objects[0])
console.log(deep[0].mike.kids[0].kids[1].fname)
console.log(deep[0].mike.kids[0].kids[1].fname === 'Aseria')
console.log(deep[0].mike.kids.length === 3)
console.log(deep[0].kira.kids.length === 1)
// console.log(deep2[0].name.kids.kids[1].fname)
