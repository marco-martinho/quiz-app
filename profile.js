const darkModeSwitch = document.querySelector(".dark-mode-switch");
const modeLabel = document.querySelector(".mode-label");

const savedDarkMode = localStorage.getItem("darkMode") === "true";

document.documentElement.classList.toggle("dark-mode", savedDarkMode);

if (darkModeSwitch) {
  darkModeSwitch.setAttribute("aria-pressed", savedDarkMode);

  if (modeLabel) {
    modeLabel.textContent = savedDarkMode ? "Dark Mode" : "Bright Mode";
  }

  darkModeSwitch.addEventListener("click", () => {
    const darkModeEnabled =
      document.documentElement.classList.toggle("dark-mode");

    localStorage.setItem("darkMode", darkModeEnabled);

    darkModeSwitch.setAttribute("aria-pressed", darkModeEnabled);

    if (modeLabel) {
      modeLabel.textContent = darkModeEnabled ? "Dark Mode" : "Bright Mode";
    }
  });
}
