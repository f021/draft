const audioUrls = ['http://markjackson.nl/sounds/E4.mp3', 'http://markjackson.nl/sounds/A3.mp3', 'http://markjackson.nl/sounds/Csharp3.mp3', 'http://markjackson.nl/sounds/E3.mp3']
const audioNodes = audioUrls.map(e => new Audio(e))
const msgHello = ` hello, i'm Simon, i'm memory trainer! let's begin...      `.split('')
const msgLose = `   we need more practice...      `.split('')
const msgWin = `    you're amazing...      `.split('')
const playground = ['#blue', '#red', '#green', '#yellow']
const sayYes = ['Ok', ':)', 'wow', 'easy']
const sayNo = ['f**k', ':(', 'ups']
const WIN = 2
const TIME = 1000

const $ = str => document.querySelector(str)

const getRandomElm = arr =>
  arr[Math.floor(Math.random() * arr.length)]

const generateSequence = (seed, arr = []) =>
  () => {
    arr.push(getRandomElm(seed))
    return arr
}

const runingStr = (arr, len) =>
  arr.slice(1).reduce((arr, elm) => arr.concat(arr[arr.length - 1].slice(-len + 1) + elm)
  , [addToLeft(arr[0], ' ', len)])

const setMsg = str => {
  $('#level').innerText = str
}

const addToLeft = (str, ch, n) =>
  ch.repeat(n - str.length) + str

// const addZero = n =>
//   addToLeft(String(n), '0', 2)

const delay = ms => new Promise(
  (resolve, reject) => setTimeout(resolve, ms)
)

const playON = str => {
  $(str).classList.toggle('off');
  // audioNodes[playground.indexOf(str)].play()
}

const playOFF = str => {
  $(str).classList.toggle('off');
  // audioNodes[playground.indexOf(str)].pause()
  // audioNodes[playground.indexOf(str)].currentTime = .0
}

const click = (str, ms) => new Promise(
  (resolve, reject) => {
    playON(str)
    delay(ms).then(() => {
      playOFF(str)
      return delay(ms - (ms / 100) * 20)
    }).then(() => resolve())
  }
)

const playSequence = (arr, cb) => {
  !arr.length
    ? cb()
    : click(arr[0], TIME - 100 * arr.length).then(() => playSequence(arr.slice(1), cb))
}

const say = arr => new Promise(
  (resolve, reject) => {
    const recur = arr => {
      if (!arr.length) {
        $('#level').classList.remove('text-right')
        resolve();
      } else {
        delay(150).then(() => {
          setMsg(arr[0])
          recur(arr.slice(1))})
      }
    }
    $('#level').classList.add('text-right')
    recur(arr)
  }
)

const win = _ => {
  for(let i = 0; i < 40; i++) {
    setTimeout(()=>$(playground[i%4]).classList.toggle('off'), i*(i+10));
    setTimeout(()=>$(playground[i%4]).classList.toggle('off'), i*20);
  }
  say(runningStr(msgWin, 6)).then(reset)
}

const gameOver = _ => {
  say(runingStr(msgLose, 6)).then(reset)
}

const listen = seq => new Promise(
  (resolve, reject) => {
    const whenClick = (e, elm = `#${e.target.id}`) => {
      $(elm).removeEventListener('click', whenClick);
      setMsg(addToLeft(String(seq.length - 1), '0', 2))
      click(elm, 600).then(() => {
        if (seq[0] !== elm) {
          setMsg(getRandomElm(sayNo))
          playground.forEach(e => $(e).removeEventListener('click', whenClick))
          delay(1000).then(reject)
        } else {
          seq.shift();
          setMsg(addToLeft(String(seq.length), '0', 2))
        }
        if (seq.length === 0) {
          setMsg(getRandomElm(sayYes))
          delay(1000).then(() => {
            playground.forEach(e => $(e).removeEventListener('click', whenClick))
            resolve()
          })
        }
      })
    $(elm).addEventListener('click', whenClick);
    }
    playground.forEach(e => $(e).addEventListener('click', whenClick))
})

const go = (getSeq, seq = getSeq()) => {
  setMsg(addToLeft(String(seq.length), '0', 2));
  (seq.length === WIN)
    ? win()
    : playSequence(seq, () =>
        listen(seq.slice())
        .then(() => go(getSeq))
        .catch(gameOver))
}

const startEngine = _ => {
  $('#start').removeEventListener('click', startEngine)
  playground.forEach((e) => $(e).classList.remove('off'))
  say(runingStr(msgHello, 6)).then(() => {
    $('#start').addEventListener('click', reset)
    reset()
  })
}

const reset = _ => {
  playground.forEach(e => $(e).classList.add('off'));
  delay(1000).then(() => {
  go(generateSequence(playground))
})
}

$('#start').addEventListener('click', startEngine)

module.exports = {win, say, runingStr}
