// import Field from './field'
import { sum } from './vector'
import Maps from './maps'

// const getIndexMap => foldFn(mask, )
//
//      const lets = () => {
//        const f = getMap(Field(75, 7500/75));
//        const b = makeMap(neighbors, Field(3,3), 4);
//        test = test.map((e,index) => {
//          return rules(e,
//            f(b, index).reduce((a,i) => {
//              if (test[i] > 0) {
//                a += 1;
//              }
//              return a;
//            }, 0)
//          )
//        })
//      }


const Life = ({ state, rules, neighbors }) => {

  let { alone, born, overfill } = rules
  let past = []
  let current = state.arr

  const address = Maps({...state})
    .getIndexMaps(Maps({...neighbors})
    .getVectorMap(neighbors.arr, neighbors.startPoint))

  const suma = (as, bs) => sum(as.map(i => bs[i]))

  const isEnd = (a, b) =>
    a.every((a,i) => a !== b[i])

  // justice :: Int -> Int -> { Rules } -> Int
  const justice = (cell, i) => {
    let neighbor=suma(address[i], current)
    // console.log(i, cell, neighbor, (neighbor < alone || neighbor > overfill) ? 0 : 1,neighbor === born ? 1 : 0)
    return (cell > 0)
      ? (neighbor < alone || neighbor > overfill) ? 0 : 1
      : neighbor === born ? 1 : 0
}

  function* scene () {
    while(isEnd(past, current)) {
      past = current
      current = current.map(justice)
      console.log('::',past, current)
      yield current
    }
  }


  return {
    address,
    scene
  }
}


export default Life
