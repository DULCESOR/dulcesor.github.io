// header.js
(() => {
  function headerHTML(currentPage) {
    return `
      <div class="topbar">
        <a class="brand brandLogoOnly" href="index.html" aria-label="DULCESOR">
          <img class="brandLogo" src="logos/logo-asociación.png" alt="DULCESOR" />
        </a>

        <div class="lang" aria-label="Idiomas">
          <button class="langBtn" data-lang="es">ES</button>
          <button class="langBtn" data-lang="en">EN</button>
          <button class="langBtn" data-lang="pt">PT</button>
          <button class="langBtn" data-lang="fr">FR</button>
          <button class="langBtn" data-lang="it">IT</button>
        </div>
      </div>

      <nav aria-label="Menú">
        <a href="index.html" data-i18n="nav_inicio" class="${currentPage==='index' ? 'current' : ''}">INICIO</a>
        <a href="asociacion.html" data-i18n="nav_asociacion" class="${currentPage==='asociacion' ? 'current' : ''}">ASOCIACIÓN</a>
        <a href="proyectos.html" data-i18n="nav_proyectos" class="${currentPage==='proyectos' ? 'current' : ''}">PROYECTOS</a>
        <a href="concursos.html" data-i18n="nav_concursos" class="${currentPage==='concursos' ? 'current' : ''}">CONCURSOS</a>
        <a href="rutas.html" data-i18n="nav_rutas" class="${currentPage==='rutas' ? 'current' : ''}">RUTAS MONACALES</a>
        <a href="patrocinadores.html" data-i18n="nav_patrocinadores" class="${currentPage==='patrocinadores' ? 'current' : ''}">PATROCINADORES</a>
        <a href="contacto.html" data-i18n="nav_contacto" class="${currentPage==='contacto' ? 'current' : ''}">CONTACTO</a>
      </nav>
    `;
  }

  window.DULCESOR = window.DULCESOR || {};
  window.DULCESOR.renderHeader = (currentPage) => {
    const mount = document.getElementById("site-header");
    if (!mount) return;

    mount.innerHTML = headerHTML(currentPage);

    // activar idioma guardado + bind botones
    const lang = window.DULCESOR.getSavedLang ? window.DULCESOR.getSavedLang() : "es";
    window.DULCESOR.applyLang && window.DULCESOR.applyLang(lang);

    mount.querySelectorAll(".langBtn").forEach(btn => {
      btn.addEventListener("click", () => window.DULCESOR.applyLang(btn.dataset.lang));
    });
  };
})();
