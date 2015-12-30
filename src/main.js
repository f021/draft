const users = ["starladder1","freecodecamp", "medrybw", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];
const url = 'https://api.twitch.tv/kraken/';
const $ = str => document.querySelector(str);

const getJSON = url => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = _ => {
      (xhr.status === 200)
        ? resolve(JSON.parse(xhr.responseText))
        : reject(xhr.status);
    };
    xhr.onerror = _ => reject(xhr.status);
  });
}



const makeList = _ => {
  Promise.all(users.map(user => getJSON(`${url}users/${user}`)))
    .then(users => users.filter(user =>
      new RegExp('^' + $('#str').value).test(user.name)))
    .then(users =>
      Promise.all(users.map(user => getJSON(`${url}streams/${user.name}`)))
        .then(e => console.log(e, users))
    );
  }

const render = arr => {
  document.querySelector('#users').innerHTML = arr.map(user => {
    return `
    <li>
      <h1>
        <img src='${user.logo}'>
        <a href='${user._links.self}'>${user.display_name}</a>
      </h1>
      <p>${user.bio}</p>
    </li>`
  }).join('');
}

['input', 'change'].forEach(e =>
  document.forms.ui.addEventListener(e, makeList));
window.onload = makeList();
