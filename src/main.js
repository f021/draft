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


const torMap = (x, r) =>  x < 0 ? (x + r) % r : x % r;

const toX = ({ x, y }) => ({ w, h }, tor) => {
  if (tor) {
      return torMap(x, w) + torMap(y, h) * w ;
  } else {
  let n = x + y * w;
    if ((x >= 0 && x < w) && (y >= 0 && y < h) && (n < w * h)) {
      return n;
    }
  }
}


// });
function render() {
let b = "<div class='container'>";
for (let i = 0; i < 400; i++) {
    if ( i % 20 === 0) {
      b += "</div><div class='row'>"
    }
    b += `<div class='box' id='${i}'>` +

    "</div>"
}
b += "</div>"
document.body.innerHTML = b;
};

const distance = ({x, y}) => Math.sqrt(x*x + y* y);
const manhattan = ({x, y}) => Math.abs(x) + Math.abs(y);

render();
document.addEventListener('mouseover', (e) => {
  render();
  let a = 0;
  let acc =0;
  for(let i of domain(10)) {
    let elm = toX(add(i, toXY(Number(e.target.id), 20) ))
    ({w:20, h:400/20}, 'tor' );
    if (typeof elm !== 'undefined') {
    document.getElementById(''+ elm)
    .classList.toggle('selected');
    acc += test[elm];
    document.getElementById(''+ elm).style.backgroundColor =
    `rgb(0, ${20 * Math.round(distance(i))}, ${250 / Math.round(distance(i)/5)} )`;
    // document.getElementById(''+ elm).innerHTML = `<span>${i.x}:${i.y}</span>`;
  }
}
})

module.exports = {toXY, toX, setCellState}
