const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns =jsonObject ['towns'];
    towns.splice(1,1);
    
  towns.forEach((towns) => {
  let card = document.createElement('section');
  let h2 = document.createElement ('h2');
  let name = document.createElement('h2');
  let motto = document.createElement('p');
  let yearfounded = document.createElement('p');
  let events = document.createElement('p');

  
  name.innerHTML = `Name: ${towns.name}`;
  motto.innerHTML = `Motto: ${towns.motto}`;
  yearfounded.innerHTML = `Yearfounded: ${towns.yearfounded}`;
  events.innerHTML = `Events: ${towns.events[1]}`;
  //
  card.appendChild(h2);
  card.appendChild(name);
  card.appendChild(motto);
  card.appendChild(yearfounded);
  card.appendChild(events);


  document.querySelector ('div.cards').appendChild(card);
  });
  });
