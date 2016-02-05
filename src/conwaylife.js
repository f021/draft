// import Field from './field'
import { sum, notEqual } from './vector'
import Maps from './maps'
import getAddressBook from './address-book'


const Life = ({ state, rules, neighbors }) => {

  const { alone, born, overflow } = rules
  const address = getAddressBook(state, neighbors)

  let past = new Array(state.arr.length).fill(0)
  let current = [ ...state.arr ]
  let heatmap = []

  // env :: [ Int ] -> [ Int ] -> Int
  const env = (xs, arr) =>
    sum(xs.map(x => arr[x] > 0 ? 1 : 0))

  // justice :: Int -> Int -> Int
  const calc = (cell, n) =>
    cell > 0
      ? (n < alone && 'alone') || (n > overflow && 'overflow') || 'survive'
      : n === born && 'born' || cell

  // justice
  const justice = (cell, i) => {
    switch(calc(cell, env(address[i], current))) {
      case 'alone':
        heatmap[i] = 1
        return 0
      case 'overflow':
        heatmap[i] = 2
        return 0
      case 'survive':
        heatmap[i] = 3
        return 1
      case 'born':
        heatmap[i] = 4
        return 1
      default:
        heatmap[i]=0
        return cell
    }
  }

  function* time () {
    while(notEqual(past, current)) {
      heatmap = new Array(current.length).fill(0)
      [past, current] = [current , current.map(justice)]
      // current = current.map(justice)
      // console.log(past, ':', current)
      yield { current, heatmap }
    }
  }


  return {
    time
  }
}


export default Life
