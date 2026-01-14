(function () {
  // Devuelve el nombre del archivo actual (por ejemplo "index.html")
  function normalizePath(pathname) {
    const clean = (pathname || "").split("?")[0].split("#")[0];
    const file = clean.split("/").pop();
    return file && file.length ? file : "index.html";
  }

  function buildHeader(currentFile) {
    const logoSrc = "assets/logos/logo-asociacion.png";

    const navItems = [
      { href: "index.html", key: "nav_home", fallback: "Inicio" },
      { href: "asociacion.html", key: "nav_association", fallback: "Asociación" },
      { href: "proyectos.html", key: "nav_projects", fallback: "Proyectos" },
      { href: "concursos.html", key: "nav_contests", fallback: "Concursos" },
      { href: "rutas.html", key: "nav_routes", fallback: "Rutas monacales" },
      { href: "patrocinadores.html", key: "nav_sponsors", fallback: "Patrocinadores" },
      { href: "contacto.html", key: "nav_contact", fallback: "Contacto" },
    ];

    const navHtml = navItems
      .map((it) => {
        const isCurrent = currentFile === it.href;
        return `
          <a href="${it.href}" class="siteNavLink ${isCurrent ? "current" : ""}" data-nav="${it.href}">
            <span data-i18n="${it.key}">${it.fallback}</span>
          </a>
        `;
      })
      .join("");

    return `
      <header class="siteHeader" role="banner">
        <div class="headerInner">

          <!-- Fila 1: logo izquierda / idiomas derecha -->
          <div class="headerTop">
            <a class="brandLogoOnly" href="index.html" aria-label="DULCESOR - inicio">
              <img class="brandLogo" src="${logoSrc}" alt="Logotipo Asociación Cultural DULCESOR">
            </a>

            <div class="lang" aria-label="Selección de idioma">
              <button class="langBtn" type="button" data-lang="es">ES</button>
              <button class="langBtn" type="button" data-lang="en">EN</button>
              <button class="langBtn" type="button" data-lang="pt">PT</button>
              <button class="langBtn" type="button" data-lang="fr">FR</button>
              <button class="langBtn" type="button" data-lang="it">IT</button>
            </div>
          </div>

          <!-- Fila 2: menú abajo alineado a la izquierda (INICIO en vertical con logo) -->
          <nav class="siteNav" aria-label="Navegación principal">
            ${navHtml}
          </nav>

        </div>
      </header>
    `;
  }

  function markActiveLang() {
    const lang = window.dulcesorI18n?.getLang?.() || "es";
    document.querySelectorAll(".langBtn").forEach((b) => {
      const active = (b.dataset.lang || "es") === lang;
      b.classList.toggle("active", active);
      b.setAttribute("aria-current", active ? "true" : "false");
    });
  }

  function initHeader() {
    const mount = document.getElementById("site-header");
    if (!mount) return;

    const currentFile = normalizePath(window.location.pathname);
    mount.innerHTML = buildHeader(currentFile);

    // Click idioma
    document.querySelectorAll(".langBtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        window.dulcesorI18n?.setLanguage?.(btn.dataset.lang);
        markActiveLang();
        window.dulcesorI18n?.applyI18n?.();
      });
    });

    // Aplicar i18n al header recién inyectado
    markActiveLang();
    window.dulcesorI18n?.applyI18n?.();
  }

  document.addEventListener("DOMContentLoaded", initHeader);
})();
