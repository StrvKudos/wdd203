const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets =jsonObject ['prophets'];
    prophets.forEach((prophet) => {
    let card = document.createElement('section');
    let h2 = document.createElement ('h2');
    let birthplace = document.createElement('p');
    let birthdate = document.createElement('p');
    let length = document.createElement('p');
    let death = document.createElement('p');
    let children = document.createElement('p');
    let img = document.createElement('img');
  

    h2.innerHTML = `${prophet.name} <span class="highlight">${prophet.lastname} </span>`;
    birthdate.innerHTML = `Date of Birth:${prophet.birthdate}`;
    birthplace.innerHTML = `Place of Birth:${prophet.birthplace}`;
    death.innerHTML = `Died on :${prophet.death}`;
    length.innerHTML = `Length:${prophet.length}`;
    children.innerHTML = `Children:${prophet.numofchildren}`;
    img.setAttribute('src', prophet.imageurl);
    img.setAttribute('alt', prophet.name + prophet.lastname);
  
    card.appendChild(h2);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(length);
    card.appendChild(death);
    card.appendChild(children);
    card.appendChild(img);


    document.querySelector('div.cards').appendChild(card);
  });
  });
