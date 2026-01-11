(function(){
  function currentPage(){
    const p = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    return p || "index.html";
  }

  function setCurrentNav(root){
    const p = currentPage();
    root.querySelectorAll("nav a").forEach(a=>{
      const href = (a.getAttribute("href") || "").toLowerCase();
      a.classList.toggle("current", href === p);
    });
  }

  function injectHeader(){
    const host = document.getElementById("site-header");
    if(!host) return null;

    host.innerHTML = `
      <div class="topbar">
        <div class="brand">
          <div class="mark" aria-label="DULCESOR">D</div>
          <div>
            <strong class="gold">DULCESOR</strong>
            <small data-i18n="brand_sub">ASOCIACIÓN CULTURAL</small>
          </div>
        </div>

        <div class="lang" aria-label="Idiomas">
          <button class="langBtn active" data-lang="es">ES</button>
          <button class="langBtn" data-lang="en">EN</button>
          <button class="langBtn" data-lang="pt">PT</button>
          <button class="langBtn" data-lang="fr">FR</button>
          <button class="langBtn" data-lang="it">IT</button>
        </div>
      </div>

      <nav aria-label="Menú">
        <a href="index.html" data-i18n="nav_inicio">INICIO</a>
        <a href="asociacion.html" data-i18n="nav_asociacion">ASOCIACIÓN</a>
        <a href="proyectos.html" data-i18n="nav_proyectos">PROYECTOS</a>
        <a href="concursos.html" data-i18n="nav_concursos">CONCURSOS</a>
        <a href="rutas.html" data-i18n="nav_rutas">RUTAS MONACALES</a>
        <a href="patrocinadores.html" data-i18n="nav_patrocinadores">PATROCINADORES</a>
        <a href="contacto.html" data-i18n="nav_contacto">CONTACTO</a>
      </nav>
    `;

    setCurrentNav(host);
    return host;
  }

  function injectFooter(){
    const host = document.getElementById("site-footer");
    if(!host) return;

    host.innerHTML = `
      <footer class="siteFooter">
        <div class="footerInner">
          <div class="footerLine1">
            © <span class="gold">Asociación Cultural ‘DULCESOR’</span> – Repostería Monacal Conventual
          </div>
          <div class="footerLine2">
            Asociación cultural sin ánimo de lucro · En proceso de inscripción
          </div>
          <div class="footerLine3">
            Valladolid (España)
          </div>
          <div class="footerLine4">
            Sitio web desarrollado por Apolo Studio Creativo
          </div>
        </div>
      </footer>
    `;
  }

  document.addEventListener("DOMContentLoaded", ()=>{
    injectHeader();
    injectFooter();

    // Inicializa idiomas después de insertar header/footer
    if(window.DULCESOR_I18N && typeof window.DULCESOR_I18N.initI18n === "function"){
      window.DULCESOR_I18N.initI18n();
    }
  });
})();
