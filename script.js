"use strict";

// const submit = document.querySelector(".sub-btn");
// const sectionRating = document.querySelector(".section-rating");
// const sectionThankYou = document.querySelector(".section-thank-you");
// const selectedRate = document.querySelector(".selected-rate");

// let rate = 0;

// const amghezi = function (x) {
//   rate = x;
//   console.log(rate);
// };

// submit.addEventListener("click", function () {
//   if (rate === 0) {
//     alert("Hey motherfucker, please rate us!");
//   } else {
//     sectionThankYou.classList.remove("hidden");
//     sectionRating.classList.add("hidden");
//     selectedRate.textContent = rate;
//   }
// });
//////////////////////////////////////////////////////////////////
// const rate = document.querySelector(".rate");
const selectedRate = document.querySelector(".selected-rate");
const subBTN = document.querySelector(".sub-btn");
const sectionRating = document.querySelector(".section-rating");
const sectionThankYou = document.querySelector(".section-thank-you");

let rate = 0;
const myRate = function (r) {
  rate = r;
};

subBTN.addEventListener("click", function () {
  sectionRating.classList.add("hidden");
  sectionThankYou.classList.remove("hidden");
  selectedRate.textContent = rate;
});
