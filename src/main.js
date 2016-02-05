
// import { add, sub } from './vector.js'
// import Maps from './maps'
import Oracle from './oracle'


const n = [ 1, 1, 1,
            1, 0, 1,
            1, 1, 1 ]


const play = [1, 1, 1, 0, 0,
              0, 0, 0, 0, 0,
              0, 0, 0, 0, 0,
              0, 0, 0, 0, 0,
              0, 0, 0, 0, 0]

              const play2 = [0, 0, 0, 0, 0,
                            0, 0, 0, 0, 0,
                            0, 0, 0, 0, 1,
                            0, 0, 0, 0, 1,
                            0, 0, 0, 0, 1]


const state = {
  w: 5,
  h: 5
  // arr: play,
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
  overflow: 3
}

const go = Oracle({state, neighbors, rules})

console.log(go.fate(play))
console.log(go.fate(play2))



module.exports = {}
