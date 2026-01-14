(function () {
  /**
   * Devuelve el nombre del archivo actual (por ejemplo "index.html")
   */
  function normalizePath(p) {
    const file = (p || "").split("?")[0].split("#")[0].split("/").pop();
    return file || "index.html";
  }

  /**
   * Construye el HTML completo del header
   */
  function buildHeader(currentFile) {
    // Ruta relativa funcional tanto en local como en producción (www.dulcesor.org)
    const logoSrc = "assets/logos/logo-asociacion.png";

    return `
      <header id="site-header" role="banner">
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

  /**
   * Inicializa la inyección del header y la lógica de idioma
   */
  function init() {
    const mount = document.getElementById("site-header");
    if (!mount) return;

    const currentFile = normalizePath(window.location.pathname);
    mount.outerHTML = buildHeader(currentFile);

    // Gestión de idioma
    document.querySelectorAll(".langBtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        window.dulcesorI18n?.setLanguage?.(btn.dataset.lang);
      });
    });

    // Marcar el idioma activo
    const lang = window.dulcesorI18n?.getLang?.() || "es";
    document.querySelectorAll(".langBtn").forEach((b) => {
      const active = b.dataset.lang === lang;
      b.classList.toggle("active", active);
      b.setAttribute("aria-current", active ? "true" : "false");
    });

    // Aplica traducciones al header inyectado
    window.dulcesorI18n?.applyI18n?.();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
