/* assets/js/header.js */
(function () {
  function normalizePath(p) {
    const file = (p || "").split("?")[0].split("#")[0].split("/").pop();
    return file || "index.html";
  }

  function buildHeader(currentFile) {
    // Ruta correcta según tu repo: /assets/logos/logo-asociacion.png
    const logoSrc = "assets/logos/logo-asociacion.png";

    const isCurrent = (file) => (currentFile === file ? "current" : "");

    return `
      <header id="site-header" role="banner">
        <div class="topbar">
          <a class="brandLogoOnly" href="index.html" aria-label="DULCESOR - inicio">
            <img class="brandLogo" src="${logoSrc}" alt="Logotipo Asociación Cultural DULCESOR" />
          </a>

          <div class="lang" aria-label="Selección de idioma">
            <button class="langBtn" type="button" data-lang="es">ES</button>
            <button class="langBtn" type="button" data-lang="en">EN</button>
            <button class="langBtn" type="button" data-lang="pt">PT</button>
            <button class="langBtn" type="button" data-lang="fr">FR</button>
            <button class="langBtn" type="button" data-lang="it">IT</button>
          </div>
        </div>

        <nav aria-label="Navegación principal">
          <a href="index.html" class="${isCurrent("index.html")}"><span data-i18n="nav_home">Inicio</span></a>
          <a href="asociacion.html" class="${isCurrent("asociacion.html")}"><span data-i18n="nav_association">Asociación</span></a>
          <a href="proyectos.html" class="${isCurrent("proyectos.html")}"><span data-i18n="nav_projects">Proyectos</span></a>
          <a href="concursos.html" class="${isCurrent("concursos.html")}"><span data-i18n="nav_contests">Concursos</span></a>
          <a href="rutas.html" class="${isCurrent("rutas.html")}"><span data-i18n="nav_routes">Rutas monacales</span></a>
          <a href="patrocinadores.html" class="${isCurrent("patrocinadores.html")}"><span data-i18n="nav_sponsors">Patrocinadores</span></a>
          <a href="contacto.html" class="${isCurrent("contacto.html")}"><span data-i18n="nav_contact">Contacto</span></a>
        </nav>
      </header>
    `;
  }

  function markActiveLang() {
    const lang = window.dulcesorI18n?.getLang?.() || "es";
    document.querySelectorAll(".langBtn").forEach((b) => {
      const active = b.dataset.lang === lang;
      b.classList.toggle("active", active);
      b.setAttribute("aria-current", active ? "true" : "false");
    });
  }

  function init() {
    const mount = document.getElementById("site-header");
    if (!mount) return;

    const currentFile = normalizePath(window.location.pathname);

    // Reemplaza el <div id="site-header"></div> por el <header> completo
    mount.outerHTML = buildHeader(currentFile);

    // Click idioma
    document.querySelectorAll(".langBtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        window.dulcesorI18n?.setLanguage?.(btn.dataset.lang);
        markActiveLang();
      });
    });

    // Estado inicial
    markActiveLang();

    // Traduce el header recién inyectado
    window.dulcesorI18n?.applyI18n?.();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
