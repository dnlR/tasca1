import { Holyday } from "./classes/holyday.js";
let holydays;
const form = document.querySelector("#holyday_new");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector("#name");
    const price = document.querySelector("#price");
    const country = document.querySelector("#country");
    const description = document.querySelector("#description");
    let values = [name.value, price.valueAsNumber, country.value, description.value];
    const newHolyday = new Holyday(...values);
    if (Array.isArray(holydays) && holydays.length) {
        holydays.push(newHolyday);
    }
    else {
        holydays = [newHolyday];
    }
    const holydayULList = document.querySelector("#holydays_list>ul");
    const holydayLI = document.createElement('li');
    const holydayLIHeader = document.createElement('h4');
    holydayLIHeader.innerText = newHolyday.name;
    holydayLIHeader.addEventListener('click', (e) => {
        const holydayDetail = document.querySelector('#holyday_detail');
        // empty previous holyday detail before updating with the new one clicked
        holydayDetail.innerHTML = '';
        const holydayName = document.createElement('p');
        holydayName.innerText = `Name: ${newHolyday.name}`;
        const holydayPrice = document.createElement('p');
        holydayPrice.innerText = `Price: ${newHolyday.price.toString()}`;
        const holydayCountry = document.createElement('p');
        holydayCountry.innerText = `Country: ${newHolyday.country}`;
        const holydayDescription = document.createElement('p');
        holydayDescription.innerText = `Description: ${newHolyday.description}`;
        holydayDetail.append(holydayName, holydayPrice, holydayCountry, holydayDescription);
        // holydayDetail.innerText = newHolyday.description;
    });
    holydayLI.append(holydayLIHeader);
    holydayULList.append(holydayLI);
});
//# sourceMappingURL=app.js.map