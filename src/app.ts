import { holiday } from "./classes/holiday.js";
import { Isholiday } from "./interfaces/isholiday.js";

let holidays: [Isholiday];

const form = document.querySelector("#holiday_new") as HTMLFormElement;
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  const name = document.querySelector("#name") as HTMLInputElement;
  const price = document.querySelector("#price") as HTMLInputElement;
  const country = document.querySelector("#country") as HTMLInputElement;
  const description = document.querySelector("#description") as HTMLInputElement;

  let values: [string, number, string, string] = [name.value, price.valueAsNumber, country.value, description.value];

  const newholiday = new holiday(...values);
  if (Array.isArray(holidays) && holidays.length) {
    holidays.push(newholiday);
  } else {
    holidays = [newholiday];
  }

  const holidayULList = document.querySelector("#holidays_list") as HTMLUListElement;
  const holidayLI = document.createElement('li');
  holidayLI.className = 'pure-menu-item';
  const holidayLILink = document.createElement('a');
  holidayLILink.className = "pure-menu-link";
  holidayLILink.innerText = newholiday.name;

  holidayLILink.addEventListener('click', (e: Event) => {
    const holidayDetail = document.querySelector('#holiday_detail') as HTMLUListElement;

    // empty previous holiday detail before updating with the new one clicked
    holidayDetail.innerHTML = '';

    const holidayName = document.createElement('li');
    holidayName.innerText = `Name: ${newholiday.name}`;
    const holidayPrice = document.createElement('li');
    holidayPrice.innerText = `Price: ${newholiday.price.toString()}`;
    const holidayCountry = document.createElement('li');
    holidayCountry.innerText = `Country: ${newholiday.country}`;
    const holidayDescription = document.createElement('li');
    holidayDescription.innerText = `Description: ${newholiday.description}`;

    holidayDetail.append(holidayName, holidayPrice, holidayCountry, holidayDescription);
  });

  holidayLI.append(holidayLILink);
  holidayULList.append(holidayLI);

  form.reset();
});