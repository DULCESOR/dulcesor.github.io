(function () {
  const headerEl = document.getElementById("site-header");
  if (!headerEl) return;

  const page = document.body.getAttribute("data-page") || "";

  headerEl.innerHTML = `
    <div class="topbar">
      <div class="brand">
        <div class="mark" aria-label="DULCESOR">D</div>
        <div>
          <strong class="gold">DULCESOR</strong>
          <small data-i18n="brand_sub">ASOCIACIÓN CULTURAL</small>
        </div>
      </div>

      <div class="lang" aria-label="Idiomas">
        <button class="langBtn" data-lang="es">ES</button>
        <button class="langBtn" data-lang="en">EN</button>
        <button class="langBtn" data-lang="pt">PT</button>
        <button class="langBtn" data-lang="fr">FR</button>
        <button class="langBtn" data-lang="it">IT</button>
      </div>
    </div>

    <nav aria-label="Menú">
      <a data-nav="inicio" href="index.html" data-i18n="nav_inicio">INICIO</a>
      <a data-nav="asociacion" href="asociacion.html" data-i18n="nav_asociacion">ASOCIACIÓN</a>
      <a data-nav="proyectos" href="proyectos.html" data-i18n="nav_proyectos">PROYECTOS</a>
      <a data-nav="concursos" href="concursos.html" data-i18n="nav_concursos">CONCURSOS</a>
      <a data-nav="rutas" href="rutas.html" data-i18n="nav_rutas">RUTAS MONACALES</a>
      <a data-nav="patrocinadores" href="patrocinadores.html" data-i18n="nav_patrocinadores">PATROCINADORES</a>
      <a data-nav="contacto" href="contacto.html" data-i18n="nav_contacto">CONTACTO</a>
    </nav>
  `;

  // marcar página actual
  const current = headerEl.querySelector(`a[data-nav="${page}"]`);
  if (current) current.classList.add("current");

  // idioma guardado
  let saved = "es";
  try { saved = localStorage.getItem("dulcesor_lang") || "es"; } catch (e) {}

  // aplicar idioma (función en i18n.js)
  if (window.DULCESOR_I18N && typeof window.DULCESOR_I18N.applyLang === "function") {
    window.DULCESOR_I18N.applyLang(saved);
  }

  // estado botones idioma + eventos
  headerEl.querySelectorAll(".langBtn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === saved);
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      if (window.DULCESOR_I18N && typeof window.DULCESOR_I18N.applyLang === "function") {
        window.DULCESOR_I18N.applyLang(lang);
      }
      headerEl.querySelectorAll(".langBtn").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
      try { localStorage.setItem("dulcesor_lang", lang); } catch (e) {}
    });
  });
})();
