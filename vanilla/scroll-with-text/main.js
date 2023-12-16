const section = document.getElementsByTagName("section")[0];

window.addEventListener("scroll", () => {
  const value = window.scrollY;
  /* circle(半径 at 水平 position 垂直 position) */
  section.style.clipPath = `circle(${value * 2}px at left center)`;
});
