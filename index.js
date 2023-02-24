const body = document.body;

function handleResize() {
  if (window.innerWidth < 600) {
    body.classList.remove("middle");
    body.classList.add("small");
  } else if (window.innerWidth >= 600 && window.innerWidth <= 1000) {
    body.classList.remove("small", "big");
    body.classList.add("middle");
  } else {
    body.classList.remove("middle");
    body.classList.add("big");
  }
}

window.addEventListener("resize", handleResize);
