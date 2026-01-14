(function () {
  function normalizePath(p) {
    const file = (p || "")
      .split("?")[0]
      .split("#")[0]
      .split("/")
      .filter(Boolean)
      .pop();
    return file || "index.html";
  }

  function buildHeader(currentFile) {
    // Estructura REAL del repo: assets/logos/...
    const logoSrc = "assets/logos/logo-asociacion.png";

    return `
      <header class="siteHeader" role="banner">
        <div class="topbar">
          <a class="brandLogoOnly" href="index.html" aria-label="DULCESOR - inicio">
            <img class="brandLogo" src="${logoSrc}" alt="Logotipo Asociación Cultural DULCESOR" />
          </a>

          <nav class="headerNav" aria-label="Navegación principal">
            <a href="index.html" class="${currentFile === "index.html" ? "current" : ""}">
              <span data-i18n="nav_home">Inicio</span>
            </a>
            <a href="asociacion.html" class="${currentFile === "asociacion.html" ? "current" : ""}">
              <span data-i18n="nav_association">Asociación</span>
            </a>
            <a href="proyectos.html" class="${currentFile === "proyectos.html" ? "current" : ""}">
              <span data-i18n="nav_projects">Proyectos</span>
            </a>
            <a href="concursos.html" class="${currentFile === "concursos.html" ? "current" : ""}">
              <span data-i18n="nav_contests">Concursos</span>
            </a>
            <a href="rutas.html" class="${currentFile === "rutas.html" ? "current" : ""}">
              <span data-i18n="nav_routes">Rutas monacales</span>
            </a>
            <a href="patrocinadores.html" class="${currentFile === "patrocinadores.html" ? "current" : ""}">
              <span data-i18n="nav_sponsors">Patrocinadores</span>
            </a>
            <a href="contacto.html" class="${currentFile === "contacto.html" ? "current" : ""}">
              <span data-i18n="nav_contact">Contacto</span>
            </a>
          </nav>

          <div class="lang" aria-label="Selección de idioma">
            <button class="langBtn" type="button" data-lang="es">ES</button>
            <button class="langBtn" type="button" data-lang="en">EN</button>
            <button class="langBtn" type="button" data-lang="pt">PT</button>
            <button class="langBtn" type="button" data-lang="fr">FR</button>
            <button class="langBtn" type="button" data-lang="it">IT</button>
          </div>
        </div>
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

    // sincroniza <html lang="">
    document.documentElement.lang = lang;
  }

  function init() {
    const mount = document.getElementById("site-header");
    if (!mount) return;

    const currentFile = normalizePath(window.location.pathname);

    // NO usamos outerHTML: mantenemos el contenedor estable (menos errores)
    mount.innerHTML = buildHeader(currentFile);

    // Enlaces nav: el CSS global ya los pinta (nav a / nav a.current)
    // Idiomas
    document.querySelectorAll(".langBtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;

        // setLanguage ya hace applyI18n()
        window.dulcesorI18n?.setLanguage?.(lang);

        // marca activo + lang del documento
        markActiveLang();

        // notifica a otros componentes (footer.js)
        document.dispatchEvent(new CustomEvent("dulcesor:langchange"));
      });
    });

    // Estado inicial
    markActiveLang();
    window.dulcesorI18n?.applyI18n?.();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
