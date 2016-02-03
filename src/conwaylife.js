import Field from './field'
import vector from './vector'


// justice :: Int -> Int -> { Rules } -> Int
const justice = (suspect, neighbors, { overfill, alone, born }) =>
  (suspect > 0)
    ? (neighbors === alone || neighbors == overfill) ? suspect++ : 0
    : neighbors === born ? 1 : 0

// makeVectorMap :: [ Int ] -> { Field } -> Int -> [ Vector ]
const getVectorMap = (arr, { xy }, begin) =>
  arr.reduce((acc, x) => x ? [...acc, sub(xy(x), xy(begin))] : acc , [])
    //  .filter(elm => typeof elm !== 'undefined')

// getMap :: { Field } -> [ Vector ] -> Int -> [ Int ]
const getIndexMap = ({ x, xy }) => (mask, position) =>
   mask.reduce((acc, v) => v ? [...acc, x(add(v, xy(position))) : acc, [])
      //  .filter(elm => typeof elm !== 'undefined');

// sub :: Int -> Int -> Fiels -> Vector
// foldfn :: [a] -> Function -> [a] -> [a]
const foldfn = (arr, fn, ...args) =>
  arr.reduce((acc, x) => {
    let val = fn(x, ...args)
    return val ? [...acc, val] : acc
  }, [])

const getIndexMap => foldFn(mask, )

     const lets = () => {
       const f = getMap(Field(75, 7500/75));
       const b = makeMap(neighbors, Field(3,3), 4);
       test = test.map((e,index) => {
         return rules(e,
           f(b, index).reduce((a,i) => {
             if (test[i] > 0) {
               a += 1;
             }
             return a;
           }, 0)
         )
       })
     }

// state = { arr, w, h } initial state
// rules = { alone: Int, overfill: Int, born: Int }
//  neighbors = [
//  1, 1, 1,
//  1, 0, 1,
//  1, 1, 1 ];
// tor=true toroidal Array

const Life = ({ state, rules, neighbors, tor=true }) => {





  return {

  }
}


export default Life
