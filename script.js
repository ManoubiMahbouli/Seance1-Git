// ---------- Apparition fluide du contenu ----------
window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");
});

// ---------- Mode clair / sombre ----------
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙 Mode sombre";
toggleBtn.className = "toggle-mode";
document.body.appendChild(toggleBtn);

let darkMode = false;
toggleBtn.addEventListener("click", () => {
    darkMode = !darkMode;
    document.body.classList.toggle("dark-mode", darkMode);
    toggleBtn.textContent = darkMode ? "☀️ Mode clair" : "🌙 Mode sombre";
});

// ---------- Animation bulles de fond ----------
function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);

    const size = Math.random() * 60 + 20 + "px";
    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = Math.random() * 100 + "%";

    setTimeout(() => bubble.remove(), 8000);
}

setInterval(createBubble, 600);

// ---------- Effet message sur le bouton GitHub ----------
const githubBtn = document.querySelector("a");
const tooltip = document.createElement("div");
tooltip.className = "tooltip";
tooltip.textContent = "Clique pour visiter mon GitHub !";
document.body.appendChild(tooltip);

githubBtn.addEventListener("mouseenter", (e) => {
    tooltip.style.opacity = "1";
    tooltip.style.left = e.pageX + "px";
    tooltip.style.top = e.pageY - 40 + "px";
});

githubBtn.addEventListener("mouseleave", () => {
    tooltip.style.opacity = "0";
});
