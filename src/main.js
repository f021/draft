
// import { add, sub } from './vector.js'
// import Maps from './maps'
import Life from './conwaylife'


const n = [ 1, 1, 1,
            1, 0, 1,
            1, 1, 1 ]


const play = [1, 1, 1, 0, 0,
              0, 0, 0, 0, 0,
              0, 0, 0, 0, 0,
              0, 0, 0, 0, 0,
              0, 0, 0, 0, 0]


const state = {
  w: 5,
  h: 5,
  arr: play,
  flag: false
}

const neighbors = {
  w: 3,
  h: 3,
  arr: n,
  startPoint: 4
}

const rules = {
  born: 3,
  alone: 2,
  overflow: 3
}

const go = Life({state, neighbors, rules})

// console.log(go.calc(1, 3))
let b = go.time()
console.log(b.next())
console.log(b.next())
console.log(b.next())
console.log(b.next())




module.exports = {}
