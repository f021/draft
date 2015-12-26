console.log('hello world');

const makeBtn = (btn = "") => {
    for(let i = 9; i >= 0; i--) {
      btn += `<button>${i}</button>\n`
    }
    console.log(btn);
    return btn;
}

document.body.innerHTML = `
<form>
  <input type="text">
  ${(btn => {
    for(let i = 9; i >= 0; i--) {
      btn += (!(i % 3) ? '</br>' : '') + `<button>${i}</button>`;
    };
    return btn;
  })("")}
</form>
`