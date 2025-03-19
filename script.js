const toggleButton = document.getElementById("darkModeToggle");
const icon = document.getElementById("icon");

toggleButton.addEventListener("click", function () {
  const body = document.body;
  const container = document.querySelector(".container");

  body.classList.toggle("dark-mode");
  container.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    icon.classList.replace("fa-moon", "fa-lightbulb");
  } else {
    icon.classList.replace("fa-lightbulb", "fa-moon");
  }
});
