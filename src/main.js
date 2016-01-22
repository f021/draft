const test = [
  0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,
  0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,
  0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0
  ,0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0
]

const add = (...args) =>
  args.reduce((acc, vector) => ({
    x: acc.x + vector.x,
    y: acc.y + vector.y
  }), { x: 0, y: 0 })

const product = (n, v) => ({
  x: n * v.x,
  y: n * v.y
});

function *range(to) {
  for (let i = -to; i <= to; i++) {
    yield i;
  }
}

function *domain(deep) {
  for (let y of range(deep)) {
    for (let x of range(Math.pow(2, deep - 1))) {
      if ( !(x === 0 && y === 0) ) {
        yield { x, y };
      }
    }
  }
}

const toXY = n => size => ({
  x: n % size,
  y: Math.floor(n/size)
});

const toX = ({ x, y }) => (w, h) => {
  let n = x + y * w;
  if ((x >= 0 && x < w) && (y >= 0 && y < h) && (n < w * h)) {
    return n;
  }
}


// });
let b = "<div class='container'>";
for (let i = 0; i < 49; i++) {
    if ( i % 7 === 0) {
      b += "</div><div class='row'>"
    }
    b += `<div class='box' id='${i}'>` +
      `<span>${test[i]}</span>`+
    "</div>"
}
b += "</div>"
document.body.innerHTML = b;

document.addEventListener('click', (e) => {
  let acc =0;
  for(let i of domain(1)) {
    let elm = toX(add(i, toXY(Number(e.target.id))(7)))(7,7);
    if (typeof elm !== 'undefined') {
    document.getElementById(''+ elm)
    .classList.toggle('selected');
    acc += test[elm];
  }
  e.target.innerHTML = `<span>${acc}</span>`
}
})

module.exports = {toXY, toX}
