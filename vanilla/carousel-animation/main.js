const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const list = document.querySelector(".list");

prevBtn.addEventListener("click", () => {
  list.classList.remove("toLeft", "toRight");
  toRight();
});

nextBtn.addEventListener("click", () => {
  list.classList.remove("toLeft", "toRight");
  toLeft();
});

function toLeft() {
  list.appendChild(list.firstElementChild);
  list.classList.add("toLeft");
}

function toRight() {
  list.prepend(list.lastElementChild);
  list.classList.add("toRight");
}
