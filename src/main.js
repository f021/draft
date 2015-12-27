const $ = elm => document.querySelector(elm);
document.body.innerHTML = `
<form name='calc'>
  <button type='button'>c</button>
  <input type='ext' id='screen' readonly>
  ${((keys = '789+456-123/0.=*') =>
    keys.split('')
      .map((i, n) => (!(n % 4) ? '<br>' : '') + `<button type='button'>${i}</button>`)
      .join('\n')
    )()}
</form>`;

document.forms.calc.addEventListener('click', e => {
  let key = e.target.textContent;
  if (key === 'c') {
    $('#screen').value = '';
  } else if (key === '=') {
    $('#screen').value = eval($('#screen').value);
  } else {
    $('#screen').value += e.target.textContent; 
  }
})

