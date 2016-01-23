const test = [
  0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,
  0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,
  0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0
  ,0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0
    ,0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0
      ,0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0
        ,0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0
          ,0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0
            ,0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0
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

function domain(deep) {
  let arr = [];
  for (let y of range(-deep, deep)) {
    for (let x of range(-deep, deep)) {
      if ( !(x === 0 && y === 0) ) {
        arr.push({x, y});
      }
    }
  }
  return arr;
}


const makeField = (size) => {
  let arr = [];
  for (let vector of domain(size)) {

    console.log(arr);
  }
  return arr;
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

const translateTor = ({ x, y}, { w, h }) => {
  const tor = (x, r) => x < 0 ? (x + r) % r : x % r;
  return {
    x: tor(x, w),
    y: tor(y, h)
  }
}

// });
function render() {
let b = "<div class='container'>";
for (let i = 0; i < 400; i++) {
  let {x, y} = toXY(i, 20)
  // console.log(x, y);
    if ( i % 20 === 0) {
      b += "</div><div class='row'>"
    }
    b += `<div class='box' id='${i}'>` +
    `<span>${x}:${y}</span>`+
    "</div>"
}
b += "</div>"
document.body.innerHTML = b;
};



render();
document.addEventListener('click', (e) => {
  render();
  let a = 0;
  let acc =0;
  for(let i of domain(6)) {
    let {x, y} = i;
    let elm = add(i, toXY(Number(e.target.id), 20));
    elm = (
        translateTor(elm, {w: 20, h: 400/20})
      );

    elm = toX(elm)({w: 20, h: 400/20})
    if (typeof elm !== 'undefined') {
      document.getElementById(''+elm).innerHTML =
      `<span>${manhattan(i)}</span>`;
    // document.getElementById(''+ elm)
    // .classList.toggle('selected');
    acc += test[elm];
    document.getElementById(''+ elm).style.backgroundColor =
    `rgba(200, 0, 100, ${1/manhattan(i)} )`;
    // document.getElementById(''+ elm).innerHTML = `<span>${i.x}:${i.y}</span>`;
  }
}
})

module.exports = {toXY, toX, setCellState, domain}
