const input = document.querySelector("#email");

input.addEventListener("focus", (event) => {
  event.target.nextElementSibling.nextElementSibling.classList.add("show");
});
