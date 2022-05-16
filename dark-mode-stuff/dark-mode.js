const bodyEl = document.querySelector("body");
const darkModeBtn = document.getElementById("dark-mode-btn");
let darkModeIsOn = false;

// make sure DOM is loaded before allowing click event
window.addEventListener("DOMContentLoaded", () => {
  darkModeBtn.addEventListener("click", () => {
    // second OR condition is needed so that the if statement can be executed on the first click if darkThemeEnabled === true on page refresh
    if (darkModeIsOn || document.body.classList.contains("dark-mode")) {
      bodyEl.classList.remove("dark-mode");
      darkModeIsOn = false;

      // set dark mode selection in local storage
      let darkThemeEnabled = document.body.classList.contains("dark-mode");
      localStorage.setItem("dark-theme-enabled", darkThemeEnabled);
    } else {
      bodyEl.classList.add("dark-mode");
      darkModeIsOn = true;

      // set dark mode selection in local storage
      let darkThemeEnabled = document.body.classList.contains("dark-mode");
      localStorage.setItem("dark-theme-enabled", darkThemeEnabled);
    }
  });

  // keeps page in previously selected mode
  if (JSON.parse(localStorage.getItem("dark-theme-enabled")) === true) {
    bodyEl.classList.add("dark-mode");
  }
});
