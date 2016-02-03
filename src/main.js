
import { add, sub } from './vector.js'
import Field from './rogue'

const randInitState = (time) => {
  let arr = [];
  for (let i = 0; i < time; i++) {
    arr.push(Math.random() > .5 ? 1 : 0);
  }
  return arr;
}

const a = Field({w:10,h:20})
console.log(a)
console.dir(Field)

let test = randInitState(7500);

let test1 = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 1, 1, 0, 0,
  0, 0, 0, 0, 1, 1, 1, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

];
//
//
//
//
// const distance = ({ x, y }) => Math.sqrt(x*x + y*y);
// const manhattan = ({ x, y }) => Math.abs(x) + Math.abs(y);
//

//
// const product = (n, v) => ({
//   x: n * v.x,
//   y: n * v.y
// });
//
// function *range(from, to) {
//   for (let i = from; i <= to; i++) {
//     yield i;
//   }
// }
//
// function *domain(deep) {
//   for (let y of range(-deep, deep)) {
//     for (let x of range(-deep, deep)) {
//       if ( !(x === 0 && y === 0) ) {
//         yield { x, y };
//       }
//     }
//   }
// }

const neighbors = [
  1, 1, 1,
  1, 0, 1,
  1, 1, 1
];


// const rules = (cell, neighbors) => {
//   if (cell > 2) {
//     console.log(cell);
//   }
//   if (cell > 0) {
//     cell++;
//     return (neighbors === 2 || neighbors == 3) ? 1 : 0;
//   } else {
//     return neighbors === 3 ? 1 : 0;
//   }
// }

// const rules = (cell, neighbors) => {
//   console.log(cell, neighbors);
//   switch (cell) {
//     case 0:
//       return neighbors === 3 ? 1 : 0;
//     case 1:
//       return (neighbors === 2 || neighbors == 3) ? 1 : 0;
//     default:
//       return cell;
//   }
// }
// makeMap :: Array -> Field -> Int -> [Vector]
// const makeMap = (arr, { xy }, begin) =>
//   arr.map((e, index) => {
//     if (e) {
//       return sub(xy(index), xy(begin));
//     }
//   })
//     .filter(e => typeof e !== 'undefined');


const compose = (...fns) => x =>
  fns.reduce((result, fn) =>
    fn(result), x);








function render() {
let b = "<div class='container'>";
for (let i = 0; i < test.length; i++) {
    if ( i % 75 === 0) {
      b += "</div><div class='row'>"
    }
    b += `<div class='box ${(test[i] >= 1) ? 'selected':''}' id='${i}
    '

    >` +
    "</div>"
}
b += "</div>"
document.body.innerHTML = b;
};
//

// const lets = () => {
//   const f = getMap(Field(75, 7500/75));
//   const b = makeMap(neighbors, Field(3,3), 4);
//   test = test.map((e,index) => {
//     return rules(e,
//       f(b, index).reduce((a,i) => {
//         if (test[i] > 0) {
//           a += 1;
//         }
//         return a;
//       }, 0)
//     )
//   })
// }




render();
// setInterval(()=> {lets(),render()}, 50);
// // const c = getMap(Field(10,10));
// // const b = makeMap(neighbors, Field(3,3), 4);
// document.addEventListener('click', e => {
//   test[+e.target.id] = 1;
//   console.log(+e.target.id)
// });

module.exports = {lets, test}
