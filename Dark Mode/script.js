// Get the toggle button element
const toggleButton = document.getElementById("theme-toggle");

// Check for saved theme in localStorage and apply it
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

// Add click event listener to the button
toggleButton.addEventListener("click", () => {
  // Toggle the 'dark-mode' class on the body
  document.body.classList.toggle("dark-mode");

  // Save the user's theme preference in localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
