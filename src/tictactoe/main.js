document.querySelector('#board').addEventListener('click', e => {
  if (e.target.textContent === '') {
    e.target.innerText = 'x';
  }
}
);
