const test = [
  0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,
  0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,
  0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0
  ,0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0
    ,0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0
      ,0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0
        ,0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0
          ,0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0
            ,0, 0, 0, 1, 0, 0, 0, 1
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
const addVector = (...args) =>
  args.reduce((acc, vector) => ({
    x: acc.x + vector.x,
    y: acc.y + vector.y
  }), { x: 0, y: 0 })

const field = (w, h) => ({

})


const calc = (w, h) => (mask, target, flag=true) => {

  const tor = (x, w) => x < 0 ? (x + w) % w : x % w;

  const wrap = ({ x, y }) => ({
    x: tor(x, w),
    y: tor(y, h)
  });

  const toX = ({ x, y }) => {
    let n = x + y * w;
    if ((x >= 0 && x < w) && (y >= 0 && y < h) && (n < w * h)) {
      return n;
    }
  };

  const toXY = index => ({
    x: index % w,
    y: Math.floor(index/w)
  });

  return mask.map(vector => {
    let index = addVector(vector, toXY(target));
    if (tor) {
      index = wrap(index);
    }
    return toX(index);
  });
}

const b = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: -1, y: 0 },
  { x: 0, y: 1 },
  { x: -1, y: 0 },
  { x: 0, y: -1 }
];

const c = calc(10, 10);
// console.log(c(b, 1));

// const toX = ({ x, y }) => ({ w, h }) => {
//   let n = x + y * w;
//     if ((x >= 0 && x < w) && (y >= 0 && y < h) && (n < w * h)) {
//       return n;
//     }
//   }


// coordinate (x,y) on toroidal array
// const tor = ({ x, y }, { w, h }) => {
//   const tor = (x, r) => x < 0 ? (x + r) % r : x % r;
//   return {
//     x: tor(x, w),
//     y: tor(y, h)
//   }
// }

// });
function render() {
let b = "<div class='container'>";
for (let i = 0; i < test.length; i++) {
    if ( i % 10 === 0) {
      b += "</div><div class='row'>"
    }
    b += `<div class='box' id='${i}'>` +
    `<span>${test[i]}</span>`+
    "</div>"
}
b += "</div>"
document.body.innerHTML = b;
};
//


render();

document.addEventListener('mouseover', e => {
  render();
  console.log(c(b, +e.target.id, false));
  c(b, +e.target.id, false).forEach(e =>
    document.getElementById(e).classList.add('selected'))
});

module.exports = { calc , a, b}
