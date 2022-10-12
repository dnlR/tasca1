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

  const holydayULList = document.querySelector("#holydays_list>ul") as HTMLUListElement;
  const holydayLI = document.createElement('li');
  const holydayLIHeader = document.createElement('h4');
  holydayLIHeader.innerText = newHolyday.name;
  holydayLIHeader.addEventListener('click', (e: Event) => {
    const holydayDetail = document.querySelector('#holyday_detail') as HTMLDivElement;
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
  });
  holydayLI.append(holydayLIHeader);
  holydayULList.append(holydayLI);
});