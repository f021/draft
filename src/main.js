const test = [
  [0, 1, 0, 1, 1, 0, 0, 1, 0, 0],
  [0, 1, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0, 0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 1, 0, 0],
];

const blinker = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

function *range(from, to) {
  for (let i = from; i <= to; i++) {
    yield i;
  }
}

function *domain(deep) {
  for (let y of range(-deep, deep)) {
    for (let x of range(-deep, deep))
      yield { x, y };
  }
}

// const getXY = ()

const getIndex = ({ w, h }) => ({ x, y }) => {
  return x + y * w;
}

// });
function render() {
let b = "<div class='container'>";
for (let y = 0; y < test.length; y++) {
  b += "</div><div class='row'>"
  for (let x=0; x < test[y].length; x++) {
    b += `<div class='box' id='${x+y*test[y].length}'
    style='background-color: ${test[y][x]===0 ? 'lightgrey' : 'grey' }'>` +
    "</div>"
  }
}
b += "</div>"
document.body.innerHTML = b;
};




document.addEventListener('mouseover', e => {
  render();
  let id = +e.target.id;
  console.log(id);
  document.getElementById(''+id).innerHTML = "<span>+</span>";
})
render();
// module.exports = {}
