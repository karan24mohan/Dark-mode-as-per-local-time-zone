const hours = new Date().getHours();

const card_place_1 = document.querySelector("#card_place1");
const card_place_2 = document.querySelector("#card_place2");
const card_place_3 = document.querySelector("#card_place3");

if (hours >= 18) {
  card_place_1.classList.add("dark");
  card_place_2.classList.add("dark");
  card_place_3.classList.add("dark");
} else {
}
