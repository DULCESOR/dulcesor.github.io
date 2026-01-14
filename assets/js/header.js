/* =====================================================
   header.js — Header global DULCESOR
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("header");
  header.className = "site-header";

  header.innerHTML = `
    <div class="header-inner">

      <!-- LOGO -->
      <div class="header-logo">
        <a href="index.html">
          <img src="assets/logos/logo-asociacion.png" alt="DULCESOR">
        </a>
      </div>

      <!-- NAV -->
      <nav class="header-nav">
        <a href="index.html" data-i18n="nav_home">Inicio</a>
        <a href="asociacion.html" data-i18n="nav_association">Asociación</a>
        <a href="proyectos.html" data-i18n="nav_projects">Proyectos</a>
        <a href="concursos.html" data-i18n="nav_contests">Concursos</a>
        <a href="rutas.html" data-i18n="nav_routes">Rutas monacales</a>
        <a href="patrocinadores.html" data-i18n="nav_sponsors">Patrocinadores</a>
        <a href="contacto.html" data-i18n="nav_contact">Contacto</a>
      </nav>

      <!-- IDIOMAS -->
      <div class="header-langs">
        <button onclick="setLanguage('es')">ES</button>
        <button onclick="setLanguage('en')">EN</button>
        <button onclick="setLanguage('pt')">PT</button>
        <button onclick="setLanguage('fr')">FR</button>
        <button onclick="setLanguage('it')">IT</button>
      </div>

    </div>
  `;

  document.body.prepend(header);
});
