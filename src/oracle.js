// import Field from './field'
import { sum } from './vector'
import Maps from './maps'
import getAddressBook from './address-book'


const Oracle = ({ state, rules, neighbors }) => {

  const { alone, born, overflow } = rules
  const address = getAddressBook(state, neighbors)

  // env :: [ Int ] -> [ Int ] -> Int
  const env = (xs, arr) =>
    xs.map(x => arr[x])

  // justice :: Int -> Int -> Int
  const verdict = (cell, n) =>
    cell > 0
      ? (n < alone && 1) || (n > overflow && 2) || 3
      : n === born && 4 || 0

  // fate :: [ Int ] -> [ Int ]
  const fate = current => {
    return current.map((cell, i) =>
      verdict(cell, sum(env(address[i], current))))
  }

  return {
    fate
  }
}

export default Oracle
