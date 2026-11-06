// Dark mode functionality

// Find the dark mode switch and its text label
const darkModeSwitch = document.querySelector(".dark-mode-switch");
const modeLabel = document.querySelector(".mode-label");

// Check localStorage to see whether dark mode was saved as active
const savedDarkMode = localStorage.getItem("darkMode") === "true";

// Apply the saved dark mode when the page loads
document.documentElement.classList.toggle("dark-mode", savedDarkMode);

// Check that the dark mode switch exists on the current page
if (darkModeSwitch) {
  // Set the switch state to match the saved preference
  darkModeSwitch.setAttribute("aria-pressed", savedDarkMode);

  // Update the label to show the saved mode
  if (modeLabel) {
    modeLabel.textContent = savedDarkMode ? "Dark Mode" : "Bright Mode";
  }

  // Listen for clicks on the switch
  darkModeSwitch.addEventListener("click", () => {
    // Toggle the "dark-mode" class on the HTML element
    // This activates or deactivates the dark mode styles in CSS
    const darkModeEnabled =
      document.documentElement.classList.toggle("dark-mode");

    // Save the new mode preference in localStorage
    localStorage.setItem("darkMode", darkModeEnabled);

    // Update the accessibility state of the switch
    darkModeSwitch.setAttribute("aria-pressed", darkModeEnabled);

    // Update the label to show the current mode
    if (modeLabel) {
      modeLabel.textContent = darkModeEnabled ? "Dark Mode" : "Bright Mode";
    }
  });
}
