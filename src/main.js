
let time = 50;
const a = () => { setInterval(() => {
  document.getElementById('time').innerText = time--;
}, 1000);
}

const dec = _ => time -= 60;
const inc = _ => time += 60;
const Timer = (time) => {

  let timeID;

  return {

    start() {
      timeID = setInterval(() => {
      if (document.querySelector('input[name="player"]:checked').value === 'start') {
        document.querySelector('#time').innerText = time--;
      };
      console.log(document.querySelector('input[name="player"]:checked').value);
      }, 1000);
    },

    stop() { clearInterval(timeID);}
  }
};

module.exports = {Timer};
