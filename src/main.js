const users = ["starladder1","freecodecamp", "medrybw", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];
const url = 'https://api.twitch.tv/kraken/';

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

Promise.all(users.map(user => getJSON(`${url}streams/${user}`)))
  .then(users => users.filter(user => user.stream == null))
  .then(filtred => {
    console.log(filtred);
    Promise.all(filtred.map(user => getJSON(`${url}users/${user.stream.channel.name}`)))
      .then(e => render(e));
  });


const render = arr => {
  document.querySelector('#users').innerHTML = arr.map(e => {
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

// module.exports = {get};
