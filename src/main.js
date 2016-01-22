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

const blinker = [
  0, 0, 0, 0, 0,
  0, 0, 0, 0, 0,
  0, 1, 1, 1, 0,
  0, 0, 0, 0, 0,
  0, 0, 0, 0, 0,
];

// actions

const nextStep = ({
  type: 'NEXT_STEP'
});

const setCellState = cell => ({
  type: 'SET_CELL_STATE',
  ...cell
});


const life = (state, action) => {
  switch(action.type) {
    case 'NEXT_STEP':
      return life(state, action.rules);
    default:
      return state;
  }
}

// const life = (state, rules) => {
//   return state.arr.map(cell => {
//     for (let i of domain(1)) {
//
//     }
//   })
// }

const setVisibilityGrid = visibility => ({
  type: 'SET_VISIBILITY',
  state: visibility
})


const distance = ({x, y}) => Math.sqrt(x*x + y* y);
const manhattan = ({x, y}) => Math.abs(x) + Math.abs(y);

const add = (...args) =>
  args.reduce((acc, vector) => ({
    x: acc.x + vector.x,
    y: acc.y + vector.y
  }), { x: 0, y: 0 })

const product = (n, v) => ({
  x: n * v.x,
  y: n * v.y
});

function *range(from, to) {
  for (let i = from; i <= to; i++) {
    yield i;
  }
}

function *domain(deep) {
  for (let y of range(-deep, deep)) {
    for (let x of range(-deep, deep)) {
      if ( !(x === 0 && y === 0) ) {
        yield { x, y };
      }
    }
  }
}

const toXY = (i, w) => ({
  x: i % w,
  y: Math.floor(i/w)
});

const toX = ({ x, y }) => ({ w, h }) => {
  let n = x + y * w;
    if ((x >= 0 && x < w) && (y >= 0 && y < h) && (n < w * h)) {
      return n;
    }
  }

const translateTor = ({ x, y }, { w, h }) => {
  const tor = (x, r) => x < 0 ? (x + r) % r : x % r;
  return {
    x: tor(x, w),
    y: tor(y, h)
  }
}

// });
function render() {
let b = "<div class='container'>";
for (let i = 0; i < test.length; i++) {
    if ( i % 10 === 0) {
      b += "</div><div class='row'>"
    }
    b += `<div class='box' id='${i}'
    style='background-color: ${test[i]===0 ? 'lightgrey' : 'grey' }'>` +
    "</div>"
}
b += "</div>"
document.body.innerHTML = b;
};


// const gogo = () => {
//   field = {
//     w:10,
//     h: test.length/10
//   };
//   test.map( (cell, index) => {
//     let alive = 0;
//     for ( n of domen(1)) {
//       translateTor(add(n, toXY(index)))
//     }
//   });
// },

// setInterval(gogo, 100)


document.addEventListener('mouseover', e => {
  let a = domain(1);
  console.log(toX(a.next().value)({w:10, h: test.length/10}))
  console.log(e.target.id);
})

render();
// document.addEventListener('mouseover', (e) => {
//   render();
//   let a = 0;
//   let acc =0;
//   for(let i of domain(15)) {
//     let elm = add(i, toXY(Number(e.target.id), 20));
//     elm = (
//       toX(
//         translateTor(
//           elm, {w: 20, h: 400/20}
//         )
//       )
//       (
//         {w: 20, h: 400/20}
//       )
//     );
//     if (typeof elm !== 'undefined') {
//     document.getElementById(''+ elm)
//     .classList.toggle('selected');
//     acc += test[elm];
//     document.getElementById(''+ elm).style.backgroundColor =
//     `rgb(0, ${20 * Math.round(distance(i))}, ${250 / Math.round(distance(i)/5)} )`;
//     // document.getElementById(''+ elm).innerHTML = `<span>${i.x}:${i.y}</span>`;
//   }
// }
// })

module.exports = {toXY, toX, setCellState}
