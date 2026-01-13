// /assets/js/header.js
document.addEventListener("DOMContentLoaded", () => {
  const host = document.getElementById("site-header");
  if (!host) return;

  host.innerHTML = `
    <div class="topbar">
      <a class="brandLogoOnly" href="/index.html" aria-label="DULCESOR - Inicio">
        <img class="brandLogo" src="/assets/logos/logo-asociacion.png" alt="DULCESOR">
      </a>

      <div class="lang" aria-label="Idiomas">
        <button class="langBtn" type="button" data-lang="es">ES</button>
        <button class="langBtn" type="button" data-lang="en">EN</button>
        <button class="langBtn" type="button" data-lang="pt">PT</button>
        <button class="langBtn" type="button" data-lang="fr">FR</button>
        <button class="langBtn" type="button" data-lang="it">IT</button>
      </div>
    </div>

    <nav aria-label="Menú principal">
      <a href="/index.html" data-i18n="nav_home">INICIO</a>
      <a href="/asociacion.html" data-i18n="nav_assoc">ASOCIACIÓN</a>
      <a href="/proyectos.html" data-i18n="nav_projects">PROYECTOS</a>
      <a href="/concursos.html" data-i18n="nav_contests">CONCURSOS</a>
      <a href="/rutas.html" data-i18n="nav_routes">RUTAS MONACALES</a>
      <a href="/patrocinadores.html" data-i18n="nav_sponsors">PATROCINADORES</a>
      <a href="/contacto.html" data-i18n="nav_contact">CONTACTO</a>
    </nav>
  `;

  // Marca "current"
  const path = (window.location.pathname || "/index.html").toLowerCase();
  const normalized = path.endsWith("/") ? "/index.html" : path;

  host.querySelectorAll("nav a").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === normalized || (normalized === "/" && href === "/index.html")) {
      a.classList.add("current");
    }
  });

  // Idiomas (UI + llamada a setLanguage)
  const activeLang = typeof window.getLanguage === "function" ? window.getLanguage() : "es";

  const setActiveBtn = (lang) => {
    host.querySelectorAll(".langBtn").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
  };
  setActiveBtn(activeLang);

  host.querySelectorAll(".langBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      setActiveBtn(lang);
      if (typeof window.setLanguage === "function") window.setLanguage(lang);
    });
  });

  // Aplica traducciones al header recién inyectado
  if (typeof window.applyI18n === "function") window.applyI18n(activeLang);
});
