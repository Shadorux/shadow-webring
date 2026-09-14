(() => {
  const script = document.currentScript;
  if (!script) return;

  const site = script.dataset.site;
  const base = script.dataset.base || "https://shadorux.github.io/shadow-webring";
  if (!site) {
    console.warn("Shadow Webring: missing data-site attribute.");
    return;
  }

  const wrap = document.createElement("nav");
  wrap.className = "shadow-webring";
  wrap.setAttribute("aria-label", "Shadow Webring navigation");
  wrap.innerHTML = `
    <a href="${base}/navigate.html?site=${encodeURIComponent(site)}&to=prev">← PREV</a>
    <a href="${base}/" target="_blank" rel="noopener">◆ SHADOW WEBRING ◆</a>
    <a href="${base}/navigate.html?site=${encodeURIComponent(site)}&to=random">RANDOM</a>
    <a href="${base}/navigate.html?site=${encodeURIComponent(site)}&to=next">NEXT →</a>
  `;

  Object.assign(wrap.style, {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.8rem",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.75rem 1rem",
    border: "1px solid #75020f",
    background: "#090909",
    color: "#f4f4f4",
    font: "700 12px/1.4 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
    textTransform: "uppercase"
  });

  wrap.querySelectorAll("a").forEach((a) => {
    a.style.color = "#f4f4f4";
    a.style.textDecoration = "none";
  });

  script.insertAdjacentElement("afterend", wrap);
})();
