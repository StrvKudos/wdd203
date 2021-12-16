const infoURL = "business.json";

fetch(infoURL)
  .then((response) => {
    return response.json();
  })
  .then((jsonObject) => {
    const towns = jsonObject["main"];
    towns.forEach((town) => {
      if (
        town.name == "Jollibee" ||
        town.name == "Talavera" ||
        town.name == "Kultura"
      ) {
      
        let section = document.createElement("section");
        let h3 = document.createElement("h3");
        let divEvent = document.createElement("span");
        let events = contact_info;
        let allEvents = document.createElement("span");


        section.setAttribute("class", "contact_info");
        divEvent.setAttribute("class", "contact_info");

        h3.textContent = town.name;

        events.forEach((event) => {
          let eventText = document.createElement("span");
          eventText.textContent = event;
          allEvents.append(eventText);
        });

        allEvents.setAttribute("class", "events-name");
        h3.setAttribute("class","h3-title");
        divEvent.append(allEvents);
        section.append(h3, divEvent);
        document.querySelector("div.events-content").append(section);
      }
    });
  });