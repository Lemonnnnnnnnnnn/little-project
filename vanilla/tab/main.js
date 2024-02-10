const icons = document.querySelectorAll(".icons i");
const indicator = document.querySelector(".indicator");
const tabs = document.querySelectorAll(".content .tab");
let activeIndex = 0;

function init() {
  addEvent();
  updateView();
}

function addEvent() {
  for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener("click", () => {
      activeIndex = i;
      updateView();
    });
  }
}

function updateView() {
  updateIcons();
  updateIndicator();
  updateContent();
}

function updateIcons() {
  for (let i = 0; i < icons.length; i++) {
    if (i == activeIndex) {
      icons[i].classList.add("active");
    } else {
      icons[i].classList.remove("active");
    }
  }
}

function updateIndicator() {
  const topDict = {
    0: 0,
    1: "25%",
    2: "50%",
    3: "75%",
  };

  indicator.style.top = topDict[activeIndex];
}

function updateContent() {
  tabs.forEach((tab) => tab.classList.remove("active"));
  tabs[activeIndex].classList.add("active");
}

window.addEventListener("load", init);
