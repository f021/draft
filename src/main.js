
// import { add, sub } from './vector.js'
import Field from './rogue'
import { compose } from './maps'



const n = [1, 1, 1,
           1, 0, 1,
           1, 1, 1]

const b = Field({w:3, h:3})
console.dir(b)
// console.log(b.x(b.xy(-1)))
// console.log(b.x(b.xy(2)))
console.log(b.x({x:3, y:3}))
// console.log(b.xy(-1))
// console.log(b.x(b.xy(10)))

module.exports = {Field}
