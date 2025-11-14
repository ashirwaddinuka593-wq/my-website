const toggle = document.getElementById("modeToggle");
const body = document.body;
const emoji = document.getElementById("modeEmoji");

toggle.addEventListener("change", () => {
    body.classList.toggle("light");

    if (body.classList.contains("light")) {
        emoji.textContent = "☀";
    } else {
        emoji.textContent = "🌙";
    }
});