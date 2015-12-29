const user = ["starladder1","freecodecamp", "medrybw", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];
const data = [];
const get = str => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.twitch.tv/kraken/users/'+ str, true);
  xhr.send();
  xhr.onload = _ => {
    data.push(JSON.parse(xhr.responseText));
    if (data.length === user.length) render();
  };
  xhr.onerror = _ => console.log(xhr.status);
}

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

user.forEach(e => get(e));
module.exports = {get};
