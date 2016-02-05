
// import { add, sub } from './vector.js'
// import Maps from './maps'
import Life from './conwaylife'

  const isEnd = (a, b) => a.every((a,i) => a ===b[i] )

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
  arr: play
  // flag: false
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
  overfill: 3
}

const go = Life({state, neighbors, rules})
// console.log(go)
const b = go.scene()
let a = b.next()
console.log(a)
a = b.next()
console.log(a)




module.exports = {}
