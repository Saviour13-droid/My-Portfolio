// ---- CONFIG: paste real URLs here. Empty string = link shows as "not added yet". ----
const LINKS = {
  "compressor-live": "", "compressor-code": "",
  "pomodoro-live": "",   "pomodoro-code": "",
  "navbar-live": "",     "navbar-code": ""
};
document.querySelectorAll("[data-key]").forEach(a => {
  const url = LINKS[a.dataset.key];
  if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; }
  else { a.removeAttribute("href"); a.setAttribute("aria-disabled", "true"); a.textContent += " (not added yet)"; }
});
const btn = document.querySelector(".menu"), links = document.getElementById("links");
btn.addEventListener("click", () => btn.setAttribute("aria-expanded", links.classList.toggle("open")));
links.addEventListener("click", e => { if (e.target.closest("a")) { links.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); } });
const nav = [...links.querySelectorAll('a[href^="#"]')];
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) nav.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => io.observe(s));
document.getElementById("year").textContent = new Date().getFullYear();
