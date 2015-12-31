const audioUrls = ["http://markjackson.nl/sounds/E4.mp3", "http://markjackson.nl/sounds/A3.mp3","http://markjackson.nl/sounds/Csharp3.mp3", "http://markjackson.nl/sounds/E3.mp3"]
const audioNodes = audioUrls.map(e => new Audio(e));
const playground = ['#blue', '#red', '#green', '#yellow'];

const $ = str => document.querySelector(str)

const getRandomElm = arr =>
  arr[Math.floor(Math.random()*arr.length)]

const shuffle = arr =>
  arr.sort((a, b) =>
    Math.random() >= .5 ? 1 : -1)

const changeOpacity = (elm, n) =>
  elm.style.opacity = n

const onOff = elm =>
  elm.classList.toggle('half');

const generateSequence = (seed, arr = []) =>
  () => {
    arr.push(getRandomElm(seed.slice(0, Math.ceil(arr.length / seed.length) + 1)))
    return arr
  }


let  b = generateSequence(shuffle(playground));
for (let i = 0; i < 20; i++) {
  b();
}

const delay = ms => new Promise (
  (resolve, reject) => setTimeout(resolve, ms)
)

const time = (fn, ms) => new Promise (
  (resolve, reject) => setTimeout(()=>{
    console.log(fn);
    resolve()}, ms)
)

time(()=>console.log('aaa'), 1000).then(time(null,1000).then(()=>console.log('bbb')))

const twice = (fn, ms) => new Promise(
  (resolve, reject) => {
    delay(ms).then(() => {
      fn();
      delay(ms - (ms/100)*20).then(() => {
        fn();
        resolve();
      })
    })
  }
)

twice(function(){console.log('ups')},1000).then(function(){console.log('hehe')})

const timerFn = (arr, fn, cb) => {
  if (arr.length !== 0) {
    setTimeout(() => {
      fn(arr[0]);
      timerFn(arr.slice(1), fn, cb)
    }
    , 1000)
  } else {
    cb();
  }
}

timerFn( b(), e => {
  onOff($(e));
  // audioNodes[playground.indexOf(e)].play();
  setTimeout(()=>{
    onOff($(e))
    // audioNodes[playground.indexOf(e)].pause();
    // audioNodes[playground.indexOf(e)].currentTime = .0;
  }
    , 800)}, ()=> console.log('done'))


playground.forEach(e => {
  $(e).addEventListener('mouseover', e => onOff(e.target))
  $(e).addEventListener('mouseout', e => onOff(e.target))
  $(e).addEventListener('click', e => onOff(e.target))
})

module.exports = {delay}
