// const test = [
//   0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,
//   0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,
//   0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0
//   ,0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0
//     ,0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0
//       ,0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0
//         ,0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0
//           ,0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0
//             ,0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0
// ];
//
//
//
//
// const distance = ({ x, y }) => Math.sqrt(x*x + y*y);
// const manhattan = ({ x, y }) => Math.abs(x) + Math.abs(y);
//
// const add = (...args) =>
//   args.reduce((acc, vector) => ({
//     x: acc.x + vector.x,
//     y: acc.y + vector.y
//   }), { x: 0, y: 0 })
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

// const toX = ({ x, y }) => {
//   let n = x + y * w;
//   if ((x >= 0 && x < w) && (y >= 0 && y < h) && (n < w * h)) {
//     return n;
//   }

// const xy = (x,y) => ({
//   x: x,
//   y: y
// });

// make coordinate(x,y)
// toXY(10, 3) =>
// const toXY = (i, w) => xy(i % w, Math.floor(i/w));



const tor = (x, r) => x < 0 ? (x + r) % r : x % r;

const wrap = ({ w, h }) => ({ x, y }) => ({
  x: tor(x, w),
  y: tor(y, h)
});

const toX = ({ w, h }) => ({ x, y }) => {
  let n = x + y * w;
    if ((x >= 0 && x < w) && (y >= 0 && y < h) && (n < w * h)) {
      return n;
    }
  }

const toXY = ({ w, h }) => index => ({
  x: index % w,
  y: Math.floor(index/w)
});


// f = a(b(x));
const compose = (...fns) => x =>
  fns.reduce((result, fn) => fn(result), x);

const matrix = ({ arr, w }) => {
  return Object.assign(
    {},
    translate({ w, h: arr.length }))
};


// const toX = ({ x, y }) => ({ w, h }) => {
//   let n = x + y * w;
//     if ((x >= 0 && x < w) && (y >= 0 && y < h) && (n < w * h)) {
//       return n;
//     }
//   }

const torA = (x, r) => x < 0 ? (x + r) % r : x % r;

// coordinate (x,y) on toroidal array
// const tor = ({ x, y }, { w, h }) => {
//   const tor = (x, r) => x < 0 ? (x + r) % r : x % r;
//   return {
//     x: tor(x, w),
//     y: tor(y, h)
//   }
// }

// });
// function render() {
// let b = "<div class='container'>";
// for (let i = 0; i < 400; i++) {
//   let {x, y} = toXY(i, 20)
//   // console.log(x, y);
//     if ( i % 20 === 0) {
//       b += "</div><div class='row'>"
//     }
//     b += `<div class='box' id='${i}'>` +
//     `<span>${x}:${y}</span>`+
//     "</div>"
// }
// b += "</div>"
// document.body.innerHTML = b;
// };
//


// render();
// document.addEventListener('click', (e) => {
//   render();
//   let a = 0;
//   let acc =0;
//   for(let i of blinker) {
//     let {x, y} = i;
//     let id = +e.target.id;
//     let elm = add(i, toXY(id, 20));
//     // elm = (
//     //     tor(elm, {w: 20, h: 400/20})
//     //   );
//     console.log(id, toXY(id, 20), elm);
//       elm = toX(torA(elm.x, 400/20) + torA(elm.y, 20))
//     // elm = toX(elm)({w: 20, h: 400/20})
//     if (typeof elm !== 'undefined') {
//       document.getElementById(''+elm).innerHTML =
//       `<span>${manhattan(i)}</span>`;
//     // document.getElementById(''+ elm)
//     // .classList.toggle('selected');
//     acc += test[elm];
//     document.getElementById(''+ elm).style.backgroundColor =
//     `rgba(200, 0, 100, ${1/manhattan(i)} )`;
//     // document.getElementById(''+ elm).innerHTML = `<span>${i.x}:${i.y}</span>`;
//   }
// }
// })

module.exports = { compose}
