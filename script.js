// Toggle Button And Icon Elements
const toggleButton = document.getElementById("darkModeToggle");
const icon = document.getElementById("icon");

// Event Listener To Toggle the Button
toggleButton.addEventListener("click", function () {
  const body = document.body;
  const container = document.querySelector(".container");

  // Applies Dark Mode On Body And Container
  body.classList.toggle("dark-mode");
  container.classList.toggle("dark-mode");

  // Icon Change For The Button
  if (body.classList.contains("dark-mode")) {
    icon.classList.replace("fa-moon", "fa-lightbulb");
  } else {
    icon.classList.replace("fa-lightbulb", "fa-moon");
  }
});
