const container = document.querySelector("main");

for (let i = 0; i < 150; i++) {
  const span = document.createElement("span");
  container.appendChild(span);
}

let cursor = document.getElementById("cursor");

window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});
