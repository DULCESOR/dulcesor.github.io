document.addEventListener("DOMContentLoaded", () => {
  const host = document.getElementById("site-header");
  if (!host) return;

  host.innerHTML = `
    <div class="topbar">
      <a class="brandLogoOnly" href="/index.html" aria-label="DULCESOR - Inicio">
        <img
          class="brandLogo"
          src="/assets/logos/logo-asociacion.png"
          alt="Asociación Cultural DULCESOR"
        >
      </a>

      <div class="lang" aria-label="Idiomas">
        <button class="langBtn" data-lang="es">ES</button>
        <button class="langBtn" data-lang="en">EN</button>
        <button class="langBtn" data-lang="pt">PT</button>
        <button class="langBtn" data-lang="fr">FR</button>
        <button class="langBtn" data-lang="it">IT</button>
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

  // Marcar página activa
  const current = (location.pathname === "/" ? "/index.html" : location.pathname).toLowerCase();
  host.querySelectorAll("nav a").forEach(a => {
    if (a.getAttribute("href").toLowerCase() === current) {
      a.classList.add("current");
    }
  });

  // Idiomas
  const setActive = (lang) => {
    host.querySelectorAll(".langBtn").forEach(b =>
      b.classList.toggle("active", b.dataset.lang === lang)
    );
  };

  const lang = window.getLanguage ? window.getLanguage() : "es";
  setActive(lang);

  host.querySelectorAll(".langBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      setActive(btn.dataset.lang);
      if (window.setLanguage) window.setLanguage(btn.dataset.lang);
    });
  });

  if (window.applyI18n) window.applyI18n(lang);
});
