//* container rəngi dəyişmir

const guess = document.querySelector("#guess");
const btnplay = document.querySelector("#my_btn");
const message1 = document.querySelector("#message1");
const message2 = document.querySelector("#message2");
const message3 = document.querySelector("#message3");
const randomReqem = Math.trunc(Math.random() * 100) + 1;
console.log(randomReqem);

const container = document.querySelector(".container");
const texmin = document.querySelector("#texmin");
const gizlir = document.querySelector("#gizlir");

let score = 0;

btnplay.addEventListener("click", function () {
  if (Number(guess.value) === randomReqem) {
    if (score < 9) {
      score = score + 1;
      texmin.textContent = score;
      container.style.backgroundColor = "#7bf1a8";
      message3.textContent = "Təxmin doğrudur, siz qazandınız 👏";
      gizlir.textContent = randomReqem;
    }
  } else if (Number(guess.value) > randomReqem) {
    if (score < 9) {
      score = score + 1;
      message3.textContent = "Təxmininiz böyükdür, rəqəmi azaldın 🤔";
      texmin.textContent = score;
      container.style.backgroundColor = "#FFFF00";
    } else {
      message3.textContent = "Uduzdunuz 😢";
      texmin.textContent = "10";
      container.style.backgroundColor = "#e71d36";
      gizlir.textContent = randomReqem;
    }
  } else if (Number(guess.value) < randomReqem) {
    if (score < 9) {
      score = score + 1;
      texmin.textContent = score;
      container.style.backgroundColor = "#FFFF00";
      message3.textContent = "Təxmininiz kiçikdir, rəqəmi artırın 🤔";
    } else {
      message3.textContent = "Uduzdunuz 😢";
      texmin.textContent = "10";
      container.style.backgroundColor = "#e71d36";
      gizlir.textContent = randomReqem;
    }
  }
});
