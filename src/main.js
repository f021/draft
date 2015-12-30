const users = ["starladder1","freecodecamp", "medrybw", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];
const url = 'https://api.twitch.tv/kraken/';
const $ = str => document.querySelector(str);
const getName = str => str.match(/([\d\w-_]+$)/)[0];

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

const filter = (users, streams) => {
  console.log(users, streams);
  // users => users.filter(user =>
    // new RegExp('^' + $('#str').value).test(user.name)))
}

const getList = (str, db = users) => {
  return new Promise(resolve => {
    Promise.all(db.map(user => getJSON(url + str + user)))
      .then(user => resolve(user))
  })
}

const filterByName = user =>
  new RegExp('^' + $('#str').value).test(getName(user._links.channel));

const getUsr = user => ({
  user, status: user.stream !== null
})

const start = _ => {
  getList('streams/').then(users => users.filter(user => filterByName(user)))
    .then(users => users.map(user => getUsr(user)))
    .then(users => console.log(users));
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
  document.forms.ui.addEventListener(e, start));
window.onload = start();
module.exports = {getName};
