let shows__array = [
    {
        "date": "Mon Sept 06 2021",
        "venue": "Ronald Lane",
        "location": "San Francisco, CA"
    },

    {
        "date": "Tue Sept 21 2021 ",
        "venue": "Pier 3 East",
        "location": "San Francisco, CA"
    },

    {
        "date": "Fri Oct 15 2021 ",
        "venue": "View Loungue",
        "location": "San Francisco, CA"
    },

    {
        "date": "Sat Nov 06 2021",
        "venue": "Hyatt Agency",
        "location": "San Francisco, CA"
    },

    {
        "date": "Fri Nov 26 2021",
        "venue": "Moscow Center",
        "location": "San Francisco, CA"
    },

    {
        "date": "Wed Dec 15 2021",
        "venue": "Pres Club",
        "location": "San Francisco, CA"
    }
];

let table = document.querySelector(".shows__table");

let divTable = document.createElement("div");
divTable.className = "tablet__header";

let headerDates = document.createElement("p");
headerDates.innerText = "DATES";
headerDates.className = "tablet__head";
let headerVenue = document.createElement("p");
headerVenue.innerText = "VENUE";
headerVenue.className = "tablet__head";
let headerLocation = document.createElement("p");
headerLocation.innerText = "LOCATION";
headerLocation.className = "tablet__head";

divTable.appendChild(headerDates);
divTable.appendChild(headerVenue);
divTable.appendChild(headerLocation);
table.appendChild(divTable);

function displayShow(showObj) {
    let shows__card = document.createElement("div");
    shows__card.className = "shows__card";

    let shows__dateText = document.createElement("p");
    shows__dateText.innerText = "DATE";
    shows__dateText.className = "shows__heading";
    shows__card.appendChild(shows__dateText);

    let shows__date = document.createElement("h3");
    shows__date.innerText = showObj["date"];
    shows__card.appendChild(shows__date);

    let shows__venueText = document.createElement("p");
    shows__venueText.innerText = "VENUE";
    shows__venueText.className = "shows__heading";
    shows__card.appendChild(shows__venueText);

    let shows__venue = document.createElement("p");
    shows__venue.innerText = showObj["venue"];
    shows__card.appendChild(shows__venue);

    let shows__locationText = document.createElement("p");
    shows__locationText.innerText = "LOCATION";
    shows__locationText.className = "shows__heading";
    shows__card.appendChild(shows__locationText);

    let shows__location = document.createElement("p");
    shows__location.innerText = showObj["location"];
    shows__card.appendChild(shows__location);

    document.querySelector(".shows__table").appendChild(shows__card);

    let shows__button = document.createElement("button");
    shows__button.innerText = "BUY TICKETS";
    shows__button.classList.add("shows__button");
    shows__card.appendChild(shows__button);
}

for (let i = 0; i < shows__array.length; i++) {
    displayShow(shows__array[i]);
}