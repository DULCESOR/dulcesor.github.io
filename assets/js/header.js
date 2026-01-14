/* =====================================================
   header.js — Inyección del header global
   - Logo alineado con INICIO
   - Idiomas alineados con CONTACTO
   - Re-aplica i18n tras inyectar (clave del bug)
   ===================================================== */

(function () {
  function normalizePath(p) {
    const file = (p || "").split("?")[0].split("#")[0].split("/").pop();
    return file || "index.html";
  }

  function buildHeader(currentFile) {
    // Ajusta este logo si quieres otro nombre/archivo
    const logoSrc = "/assets/logos/logo-asociacion.png";

    return `
      <header id="site-header">
        <div class="topbar">
          <a class="brandLogoOnly" href="/index.html" aria-label="DULCESOR">
            <img class="brandLogo" src="${logoSrc}" alt="DULCESOR" />
          </a>

          <nav aria-label="Navegación principal">
            <a href="/index.html" data-nav="index.html" class="${currentFile === "index.html" ? "current" : ""}">
              <span data-i18n="nav_home">Inicio</span>
            </a>
            <a href="/asociacion.html" data-nav="asociacion.html" class="${currentFile === "asociacion.html" ? "current" : ""}">
              <span data-i18n="nav_association">Asociación</span>
            </a>
            <a href="/proyectos.html" data-nav="proyectos.html" class="${currentFile === "proyectos.html" ? "current" : ""}">
              <span data-i18n="nav_projects">Proyectos</span>
            </a>
            <a href="/concursos.html" data-nav="concursos.html" class="${currentFile === "concursos.html" ? "current" : ""}">
              <span data-i18n="nav_contests">Concursos</span>
            </a>
            <a href="/rutas.html" data-nav="rutas.html" class="${currentFile === "rutas.html" ? "current" : ""}">
              <span data-i18n="nav_routes">Rutas monacales</span>
            </a>
            <a href="/patrocinadores.html" data-nav="patrocinadores.html" class="${currentFile === "patrocinadores.html" ? "current" : ""}">
              <span data-i18n="nav_sponsors">Patrocinadores</span>
            </a>
            <a href="/contacto.html" data-nav="contacto.html" class="${currentFile === "contacto.html" ? "current" : ""}">
              <span data-i18n="nav_contact">Contacto</span>
            </a>
          </nav>

          <div class="lang" aria-label="Idiomas">
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

  function init() {
    const mount = document.getElementById("site-header");
    // Si la página NO tiene contenedor, no rompemos nada
    if (!mount) return;

    const currentFile = normalizePath(window.location.pathname);
    mount.outerHTML = buildHeader(currentFile);

    // Eventos idioma
    document.querySelectorAll(".langBtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (window.dulcesorI18n?.setLanguage) {
          window.dulcesorI18n.setLanguage(btn.dataset.lang);
        }
      });
    });

    // Activar botón según idioma actual
    const lang = window.dulcesorI18n?.getLang ? window.dulcesorI18n.getLang() : "es";
    document.querySelectorAll(".langBtn").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });

    // CLAVE: re-aplicar i18n tras inyectar el header
    if (window.dulcesorI18n?.applyI18n) {
      window.dulcesorI18n.applyI18n();
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
