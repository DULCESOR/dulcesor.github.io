(function () {
  function normalizePath(pathname) {
    const clean = (pathname || "").split("?")[0].split("#")[0];
    let last = clean.split("/").filter(Boolean).pop() || "index.html";

    // Si entras por /proyectos o /proyectos/ (sin extensión), lo convertimos a .html
    if (!last.includes(".")) last = `${last}.html`;

    // Si por lo que sea queda vacío
    return last || "index.html";
  }

  function buildHeader(currentFile) {
    // RUTA ABSOLUTA para que no falle con /proyectos/ (slash final) u otras rutas
    const logoSrc = "/assets/img/logo-asociacion.png";

    return `
<header id="site-header" class="siteHeader" role="banner">
  <div class="headerInner">
    <!-- FILA 1: logo izquierda / idiomas derecha -->
    <div class="topbar">
      <a class="brand" href="/index.html" aria-label="DULCESOR - inicio">
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

    <!-- FILA 2: menú -->
    <nav class="mainNav" aria-label="Navegación principal">
      <a href="/index.html" class="${currentFile === "index.html" ? "current" : ""}"><span data-i18n="nav_home">Inicio</span></a>
      <a href="/asociacion.html" class="${currentFile === "asociacion.html" ? "current" : ""}"><span data-i18n="nav_association">Asociación</span></a>
      <a href="/proyectos.html" class="${currentFile === "proyectos.html" ? "current" : ""}"><span data-i18n="nav_projects">Proyectos</span></a>
      <a href="/concursos.html" class="${currentFile === "concursos.html" ? "current" : ""}"><span data-i18n="nav_contests">Concursos</span></a>
      <a href="/rutas.html" class="${currentFile === "rutas.html" ? "current" : ""}"><span data-i18n="nav_routes">Rutas monacales</span></a>
      <a href="/patrocinadores.html" class="${currentFile === "patrocinadores.html" ? "current" : ""}"><span data-i18n="nav_sponsors">Patrocinadores</span></a>
      <a href="/contacto.html" class="${currentFile === "contacto.html" ? "current" : ""}"><span data-i18n="nav_contact">Contacto</span></a>
    </nav>
  </div>
</header>
`.trim();
  }

  function getStoredLangFallback() {
    return (
      (localStorage.getItem("dulcesor_lang") ||
        localStorage.getItem("lang") ||
        localStorage.getItem("language") ||
        localStorage.getItem("site_lang") ||
        "es"
      ).toLowerCase()
    );
  }

  function markActiveLang() {
    const lang =
      window.dulcesorI18n?.getLang?.() ||
      window.DULCESOR_I18N?.getLang?.() ||
      getStoredLangFallback();

    document.querySelectorAll(".langBtn").forEach((b) => {
      const active = b.dataset.lang === lang;
      b.classList.toggle("active", active);
      b.setAttribute("aria-current", active ? "true" : "false");
    });
  }

  function setLangSafe(lang) {
    const l = (lang || "").toLowerCase();

    if (window.dulcesorI18n?.setLanguage) {
      window.dulcesorI18n.setLanguage(l);
      return;
    }

    if (typeof window.setLanguage === "function") {
      window.setLanguage(l);
      return;
    }

    try {
      localStorage.setItem("dulcesor_lang", l);
      localStorage.setItem("lang", l);
      localStorage.setItem("language", l);
      localStorage.setItem("site_lang", l);
      document.documentElement.setAttribute("lang", l);
      document.dispatchEvent(new CustomEvent("dulcesor:langchange"));
    } catch {}
  }

  function applyI18nSafe() {
    if (window.dulcesorI18n?.applyI18n) return window.dulcesorI18n.applyI18n();
    if (typeof window.applyTranslations === "function") return window.applyTranslations();
    if (window.DULCESOR_I18N?.apply) return window.DULCESOR_I18N.apply();
  }

  function init() {
    const mount = document.getElementById("site-header");
    if (!mount) return;

    const currentFile = normalizePath(window.location.pathname);
    mount.outerHTML = buildHeader(currentFile);

    document.querySelectorAll(".langBtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLangSafe(btn.dataset.lang);
        markActiveLang();
        applyI18nSafe();
      });
    });

    markActiveLang();
    applyI18nSafe();

    document.addEventListener("dulcesor:langchange", () => {
      markActiveLang();
      applyI18nSafe();
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
