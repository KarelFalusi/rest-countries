const toggler = document.querySelector(".js-toggler");
const text = document.querySelector(".js-toggler__text");
let currentTheme = localStorage.getItem("dark-mode");
if (currentTheme === "enabled") {
    document.body.classList.add("dark-mode")
    text.textContent = "☀️ Light Mode";
};

function togglerTheme () {
const isDarkMode = document.body.classList.contains("dark-mode");
if (isDarkMode === true)  {
    localStorage.setItem("dark-mode", "disabled");
    text.textContent = "🌙 Dark Mode";
} else {
    text.textContent = "☀️ Light Mode";
    localStorage.setItem("dark-mode", "enabled");
}
}


toggler.addEventListener("click", () => {
    togglerTheme()
    document.body.classList.toggle("dark-mode");
});
