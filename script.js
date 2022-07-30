
const btn1 = document.querySelector("#btn-1");
const text1 = document.querySelector(".show-1");
btn1.addEventListener("click", button);
function button() {
  text1.classList.toggle("hide-1");

  btn1.textContent == "Read More"
    ? (btn1.textContent = "Read Less")
    : (btn1.textContent = "Read More");
}

const btn2 = document.querySelector("#btn-2");
const text2 = document.querySelector(".show-2");

function Button() {
  text2.classList.toggle("hide-2");

  btn2.textContent == "Read More"
    ? (btn2.textContent = "Read Less")
    : (btn2.textContent = "Read More");
}
btn2.addEventListener("click", Button);