import Field from './field'
import vector from './vector'


// justice :: Int -> Int -> { Rules } -> Int
const justice = (suspect, neighbors, { overfill, alone, born }) =>
  suspect > 0
    ? (neighbors === alone || neighbors == overfill) ? suspect++ : 0
    : neighbors === born ? 1 : 0


// makeVectorMap

// in : [  1  1  1
//         1  0  1
//         1  1  1 ], Field(3, 3), 4
//
// out : [ {x: -1, y: -1}, {x: 0, y: -1}, {x: 1, y: -1}
//         {x: -1, y:  0}, {x: 1, y:  0}
//         {x: -1, y:  1}, {x: 0, y:  1}, {x: 1, y:  1} ]
//

// makeVectorMap :: [ Int ] -> { Field } -> Int -> [ Vector ]
const makeVectorMap = (arr, { xy }, begin) =>
  arr.reduce((acc, x) => x ? [...acc, sub(xy(i), xy(begin)) : acc ], [])
    //  .filter(elm => typeof elm !== 'undefined')

// getMap :: { Field } -> [ Vector ] -> Int -> Bollean -> [ Int ]
const getArrayOfIndex = ({ xy, x, tor}) =>
 (mask, position, wrap=true) =>
   mask.map(vector => {
     let i = add(vector, xy(position));
     if (wrap) {
       i = tor(i);
     }
     return x(i);
   }).filter(e => typeof e !== 'undefined');


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
