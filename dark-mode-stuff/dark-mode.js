const bodyEl = document.querySelector("body");
const darkModeBtn = document.getElementById("dark-mode-btn");
const ModeBtn = document.getElementById("mode-btn");
let darkModeIsOn = true;
let mix2 = new URLSearchParams(window.location.search).get('mix');
console.log(mix2)
if(mix2 == "mixed"){
  ModeBtn.innerHTML = "Modo: Restream + Voice Chat";
}else{
  ModeBtn.innerHTML = "Modo: Restream Only";
}

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

  ModeBtn.addEventListener("click", () => {
    if (mix2 != "mixed"){
      location.search = location.search.replace(/mode=[^&$]*/i, 'mode=mixed');
    }else{
      location.search = location.search.replace(/mode=[^&$]*/i, 'mode=restream');
    }
  });

  // keeps page in previously selected mode
  if (JSON.parse(localStorage.getItem("dark-theme-enabled")) === true) {
    bodyEl.classList.add("dark-mode");
  }
});
