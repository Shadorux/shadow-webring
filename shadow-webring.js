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

  const route = (to) => `${base}/navigate.html?site=${encodeURIComponent(site)}&to=${to}`;
  wrap.innerHTML = `
    <a class="swr-brand" href="${base}/" target="_blank" rel="noopener">
      <span class="swr-kicker">CONNECTED TO</span>
      <strong>SHADOW <i>WEBRING</i></strong>
    </a>
    <div class="swr-nav">
      <a href="${route("prev")}">← PREV</a>
      <span aria-hidden="true">◆</span>
      <a href="${route("random")}">RANDOM</a>
      <span aria-hidden="true">◆</span>
      <a href="${route("next")}">NEXT →</a>
    </div>
  `;

  Object.assign(wrap.style, {
    boxSizing: "border-box",
    width: "min(100%, 340px)",
    margin: "1rem auto",
    overflow: "hidden",
    border: "1px solid #75020f",
    borderLeft: "5px solid #d10a16",
    background: "linear-gradient(135deg,#080808 0%,#100607 62%,#260207 100%)",
    color: "#f4f4f4",
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
    textTransform: "uppercase",
    boxShadow: "0 8px 24px rgba(0,0,0,.35)"
  });

  const brand = wrap.querySelector(".swr-brand");
  Object.assign(brand.style, {
    display: "block",
    padding: "13px 15px 11px",
    color: "#f4f4f4",
    textDecoration: "none",
    borderBottom: "1px solid #4a080d"
  });
  const kicker = wrap.querySelector(".swr-kicker");
  Object.assign(kicker.style, {
    display: "block",
    marginBottom: "2px",
    color: "#a9a9a9",
    fontSize: "8px",
    fontWeight: "800",
    letterSpacing: ".22em"
  });
  const title = brand.querySelector("strong");
  Object.assign(title.style, {
    display: "block",
    fontSize: "18px",
    lineHeight: "1.15",
    letterSpacing: ".03em"
  });
  const red = brand.querySelector("i");
  Object.assign(red.style, {color: "#f21b2d", fontStyle: "normal"});

  const nav = wrap.querySelector(".swr-nav");
  Object.assign(nav.style, {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "7px",
    padding: "9px 12px",
    background: "#050505",
    fontSize: "10px",
    fontWeight: "800",
    letterSpacing: ".04em"
  });
  nav.querySelectorAll("a").forEach((a) => {
    a.style.color = "#f4f4f4";
    a.style.textDecoration = "none";
  });
  nav.querySelectorAll("span").forEach((span) => { span.style.color = "#75020f"; });

  script.insertAdjacentElement("afterend", wrap);
})();
