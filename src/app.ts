import { Holyday } from "./classes/holyday.js";
import { IsHolyday } from "./interfaces/isholyday.js";

let holydays: [IsHolyday];

const form = document.querySelector("#holyday_new") as HTMLFormElement;
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  const name = document.querySelector("#name") as HTMLInputElement;
  const price = document.querySelector("#price") as HTMLInputElement;
  const country = document.querySelector("#country") as HTMLInputElement;
  const description = document.querySelector("#description") as HTMLInputElement;

  let values: [string, number, string, string] = [name.value, price.valueAsNumber, country.value, description.value];

  const newHolyday = new Holyday(...values);
  if (Array.isArray(holydays) && holydays.length) {
    holydays.push(newHolyday);
  } else {
    holydays = [newHolyday];
  }

  const holydayULList = document.querySelector("#holydays_list") as HTMLUListElement;
  const holydayLI = document.createElement('li');
  holydayLI.className = 'pure-menu-item';
  const holydayLILink = document.createElement('a');
  holydayLILink.className = "pure-menu-link";
  holydayLILink.innerText = newHolyday.name;

  holydayLILink.addEventListener('click', (e: Event) => {
    const holydayDetail = document.querySelector('#holyday_detail') as HTMLUListElement;

    // empty previous holyday detail before updating with the new one clicked
    holydayDetail.innerHTML = '';

    const holydayName = document.createElement('li');
    holydayName.innerText = `Name: ${newHolyday.name}`;
    const holydayPrice = document.createElement('li');
    holydayPrice.innerText = `Price: ${newHolyday.price.toString()}`;
    const holydayCountry = document.createElement('li');
    holydayCountry.innerText = `Country: ${newHolyday.country}`;
    const holydayDescription = document.createElement('li');
    holydayDescription.innerText = `Description: ${newHolyday.description}`;

    holydayDetail.append(holydayName, holydayPrice, holydayCountry, holydayDescription);
  });

  holydayLI.append(holydayLILink);
  holydayULList.append(holydayLI);

  form.reset();
});