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

    // SVG inline (sin archivos) + desactivados "Próximamente"
    const socials = `
      <div class="socials" aria-label="Redes sociales (Próximamente)"
           style="display:flex; align-items:center; gap:10px;">
        <button class="socialBtn isDisabled" type="button" tabindex="-1"
                aria-disabled="true" title="Próximamente" aria-label="Instagram (Próximamente)"
                style="display:inline-flex; align-items:center; justify-content:center; padding:0; width:34px; height:34px; border:0; background:transparent; opacity:.55; cursor:not-allowed;">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2"></rect>
            <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"></circle>
            <circle cx="17" cy="7" r="1.2" fill="currentColor"></circle>
          </svg>
        </button>

        <button class="socialBtn isDisabled" type="button" tabindex="-1"
                aria-disabled="true" title="Próximamente" aria-label="Facebook (Próximamente)"
                style="display:inline-flex; align-items:center; justify-content:center; padding:0; width:34px; height:34px; border:0; background:transparent; opacity:.55; cursor:not-allowed;">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v3H7v3h3v6h3v-6h3.2l.8-3H13v-3c0-.6.4-1 1-1z"/>
          </svg>
        </button>

        <button class="socialBtn isDisabled" type="button" tabindex="-1"
                aria-disabled="true" title="Próximamente" aria-label="LinkedIn (Próximamente)"
                style="display:inline-flex; align-items:center; justify-content:center; padding:0; width:34px; height:34px; border:0; background:transparent; opacity:.55; cursor:not-allowed;">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path fill="currentColor" d="M6 6.5C6 7.33 5.33 8 4.5 8S3 7.33 3 6.5 3.67 5 4.5 5 6 5.67 6 6.5zM3.5 21h2.2V9H3.5v12zM8.2 9H10.3v1.6h.03c.3-.57 1.05-1.17 2.17-1.17 2.32 0 2.75 1.53 2.75 3.52V21h-2.2v-6.4c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.38V21H8.2V9z"/>
          </svg>
        </button>

        <button class="socialBtn isDisabled" type="button" tabindex="-1"
                aria-disabled="true" title="Próximamente" aria-label="WhatsApp Business (Próximamente)"
                style="display:inline-flex; align-items:center; justify-content:center; padding:0; width:34px; height:34px; border:0; background:transparent; opacity:.55; cursor:not-allowed;">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M20 11.5a8.5 8.5 0 0 1-12.8 7.3L4 20l1.3-3.1A8.5 8.5 0 1 1 20 11.5z"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            <path fill="currentColor" d="M9.2 8.8c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.2.3-.8.8-.8 2s.8 2.4.9 2.6c.1.2 1.6 2.5 3.9 3.4 1.9.8 2.3.6 2.7.6.4 0 1.3-.5 1.5-1 .2-.5.2-.9.1-1-.1-.1-.4-.2-.8-.4-.4-.2-1.3-.6-1.5-.7-.2-.1-.4-.2-.6.2-.2.4-.7.7-.9.9-.2.2-.3.2-.6.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.4-1.9-.1-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.5-1.3-.7-1.8z"/>
          </svg>
        </button>
      </div>
    `.trim();

    return `
<header id="site-header" class="siteHeader" role="banner">
  <div class="headerInner">
    <!-- FILA 1: logo izquierda / idiomas derecha -->
    <div class="topbar">
      <a class="brand" href="/index.html" aria-label="DULCESOR - inicio">
        <img class="brandLogo" src="${logoSrc}" alt="Logotipo Asociación Cultural DULCESOR" />
      </a>

      <div class="topbarRight" style="display:flex; align-items:center; gap:14px;">
        ${socials}

        <div class="lang" aria-label="Selección de idioma">
          <button class="langBtn" type="button" data-lang="es">ES</button>
          <button class="langBtn" type="button" data-lang="en">EN</button>
          <button class="langBtn" type="button" data-lang="pt">PT</button>
          <button class="langBtn" type="button" data-lang="fr">FR</button>
          <button class="langBtn" type="button" data-lang="it">IT</button>
        </div>
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
