(function () {
  function normalizePath(pathname) {
    const clean = (pathname || "").split("?")[0].split("#")[0];
    let last = clean.split("/").filter(Boolean).pop() || "index.html";
    if (!last.includes(".")) last = `${last}.html`;
    return last || "index.html";
  }

  function buildHeader(currentFile) {
    const logoSrc = "/assets/img/logo-asociacion.png";

    // RRSS (por ahora "Próximamente"): botones sin enlace, pero con hover (color)
    const socials = `
      <div class="socials" aria-label="Redes sociales (Próximamente)">
        <button class="socialBtn ig" type="button" aria-disabled="true" title="Próximamente" aria-label="Instagram (Próximamente)"></button>
        <button class="socialBtn fb" type="button" aria-disabled="true" title="Próximamente" aria-label="Facebook (Próximamente)"></button>
        <button class="socialBtn in" type="button" aria-disabled="true" title="Próximamente" aria-label="LinkedIn (Próximamente)"></button>
        <button class="socialBtn wa" type="button" aria-disabled="true" title="Próximamente" aria-label="WhatsApp Business (Próximamente)"></button>
      </div>
    `.trim();

    return `
<header id="site-header" class="siteHeader" role="banner">
  <div class="headerInner">

    <div class="topbar">
      <a class="brand" href="/index.html" aria-label="DULCESOR - inicio">
        <img class="brandLogo" src="${logoSrc}" alt="Logotipo Asociación Cultural DULCESOR" />
      </a>

      <div class="topbarRight">
        ${socials}

        <div class="lang" aria-label="Selección de idioma">
          <button class="langBtn" type="button" data-lang="es" aria-label="Español" title="Español">
            <img class="langFlag" src="/assets/iccons/es.svg" alt="" />
          </button>

          <button class="langBtn" type="button" data-lang="fr" aria-label="Français" title="Français">
            <img class="langFlag" src="/assets/iccons/fr.svg" alt="" />
          </button>

          <button class="langBtn" type="button" data-lang="it" aria-label="Italiano" title="Italiano">
            <img class="langFlag" src="/assets/iccons/it.svg" alt="" />
          </button>
          
            <button class="langBtn" type="button" data-lang="pt" aria-label="Português" title="Português">
            <img class="langFlag" src="/assets/iccons/pt.svg" alt="" />
          </button>

            <button class="langBtn" type="button" data-lang="en" aria-label="English" title="English">
            <img class="langFlag" src="/assets/iccons/gb.svg" alt="" />
          </button>
        </div>
      </div>
    </div>

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

    // RRSS: mientras estén “Próximamente”, no hacen nada al click
    document.querySelectorAll(".socialBtn[aria-disabled='true']").forEach((b) => {
      b.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
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
