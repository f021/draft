const users = ["starladder1","freecodecamp", "medrybw", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];
const url = 'https://api.twitch.tv/kraken/';
const get = (url, fn) => {
  console.log(url, fn)
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.send();
  xhr.onload = _ => fn(JSON.parse(xhr.responseText));
  xhr.onerror = _ => console.log(xhr.status);
}

users.forEach( user => {get(url + 'streams/' + user, (json) => {
  console.log(json);
})});

const render = _ => {
  console.log('aaa');
  console.log(data);
  document.querySelector('#users').innerHTML = data.map(e => {
    return `
    <li>
      <h1>
        <img src='${e.logo}'>
        <a href='${e._links.self}'>${e.display_name}</a>
      </h1>
      <p>${e.bio}</p>
    </li>`
  }).join('');
}
// get();
// user.forEach(e => get(e));
module.exports = {get};
