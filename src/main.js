const audioUrls = ["http://markjackson.nl/sounds/E4.mp3", "http://markjackson.nl/sounds/A3.mp3","http://markjackson.nl/sounds/Csharp3.mp3", "http://markjackson.nl/sounds/E3.mp3"]
const audioNodes = audioUrls.map(e => new Audio(e))
const playground = ['#blue', '#red', '#green', '#yellow']
let mode = false;

const $ = str =>
  typeof str === 'string'
    ? document.querySelector(str)
    : str.target

const getRandomElm = arr =>
  arr[Math.floor(Math.random() * arr.length)]

const generateSequence = (seed, arr = []) =>
  () => {
    console.log('generate:', seed, ':', arr)
    arr.push(getRandomElm(seed.slice(0, Math.ceil(arr.length / seed.length) + 1)))
    return arr
  }

const addZero = n =>
  '0'.repeat(2 - String(n).length) + n

const shuffle = arr =>
  arr.sort((a, b) =>
    Math.random() >= .5 ? 1 : -1)

const changeOpacity = (elm, n) =>
  elm.style.opacity = n

const onOff = str =>
  $(str).classList.toggle('half');

const active = str =>
  $(str).classList.toggle('active');


// let b = generateSequence(shuffle(playground))
// for (let i = 0; i < 20; i++) {
//   b()
// }

const delay = ms => new Promise(
  (resolve, reject) => setTimeout(resolve, ms)
)

// const state = (x, fn1, fn2) => {
//   let flag = true
//   console.log('state:', x)
//   return (n = x) => {
//     // console.log('state:', x, fn1, fn2)
//     flag = !flag
//     flag
//       ? fn2(n)
//       : fn1(n)
//   }
// }

// const twice = (fn, ms) => new Promise(
//   (resolve, reject) => {
//     // console.log('twice: ', fn, ms)
//     fn()
//     delay(ms)
//     .then(() => {
//       fn()
//       return delay(ms - (ms / 100) * 20)
//     })
//     .then(() => {
//       resolve()
//     })
//   }
// )


const playOn = str => {
  console.log(str);
  onOff(str)
  audioNodes[playground.indexOf(str)].play()
}

const playOff = str => {
  onOff(str)
  audioNodes[playground.indexOf(str)].pause()
  audioNodes[playground.indexOf(str)].currentTime = .0
}

const click = (str, ms) => new Promise(
  (resolve, reject) => {
    playOn(str)
    delay(ms)
    .then(() => {
      playOff(str)
      return delay(ms - (ms / 100) * 20)
    })
    .then(() =>
      resolve()
    )
  }
)

const playSequence = (arr, cb) => {
  !arr.length
    ? cb()
    : click(arr[0], 500)
      .then(() =>
      playSequence(arr.slice(1), cb))
}

const listen = seq => new Promise(
  (resolve, reject) => {
    console.log('LISTEN: ', seq);
    $(e).addEventListener('click', _ => {
      twice(state(e, playOn, playOff), 500)
      .then(() => {
        if (seq[0] !== e) {
          delay(500).then(reject)
        } else {
          seq.shift();
        }
        if (seq.length === 0) {
          delay(500).then(resolve)
        }
      })
    })
  }
)

const go = turn => {
  let seq = turn();
  console.log('GO: ', seq);
  $('#level').innerText = addZero(seq.length)
  playSequence(seq, () =>
    listen(seq.slice())
    .then(()=>go(turn))
    .catch(()=>console.log('lose')))
}


$('#start').addEventListener('click', _ => {
  $('#level').dataset['level'] = 0;
  go(generateSequence(shuffle(playground)))
})

module.exports = {click}
