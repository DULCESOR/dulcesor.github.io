// /assets/js/header.js
document.addEventListener("DOMContentLoaded", () => {
  const headerHost = document.getElementById("site-header");
  if (!headerHost) return;

  const navItems = [
    { href: "/index.html", label: "INICIO" },
    { href: "/asociacion.html", label: "ASOCIACIÓN" },
    { href: "/proyectos.html", label: "PROYECTOS" },
    { href: "/concursos.html", label: "CONCURSOS" },
    { href: "/rutas.html", label: "RUTAS MONACALES" },
    { href: "/patrocinadores.html", label: "PATROCINADORES" },
    { href: "/contacto.html", label: "CONTACTO" },
  ];

  const langItems = ["ES", "EN", "PT", "FR", "IT"];

  headerHost.innerHTML = `
    <div class="topbar">
      <a class="brandLogoOnly" href="/index.html" aria-label="DULCESOR - Inicio">
        <img class="brandLogo" src="/assets/logos/logo-asociacion.png" alt="DULCESOR">
      </a>

      <div class="lang" aria-label="Idiomas">
        ${langItems
          .map(
            (l) =>
              `<button class="langBtn" type="button" data-lang="${l.toLowerCase()}">${l}</button>`
          )
          .join("")}
      </div>
    </div>

    <nav aria-label="Menú principal">
      ${navItems.map((it) => `<a href="${it.href}">${it.label}</a>`).join("")}
    </nav>
  `;

  // 1) Marcar link actual del menú
  const path = window.location.pathname || "/index.html";
  const normalized = path.endsWith("/") ? "/index.html" : path;

  headerHost.querySelectorAll("nav a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === normalized) a.classList.add("current");
    // Caso típico: al entrar por "/" sin index.html
    if (normalized === "/" && href === "/index.html") a.classList.add("current");
  });

  // 2) Idiomas: marca activo y delega a i18n.js si existe
  const getSavedLang = () => (localStorage.getItem("lang") || "es").toLowerCase();
  const setActiveLangUI = (lang) => {
    headerHost.querySelectorAll(".langBtn").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
  };

  setActiveLangUI(getSavedLang());

  headerHost.querySelectorAll(".langBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;

      localStorage.setItem("lang", lang);
      setActiveLangUI(lang);

      // Si tu i18n.js expone alguna función, la usamos. Si no, recargamos.
      if (typeof window.setLanguage === "function") {
        window.setLanguage(lang);
      } else if (typeof window.applyI18n === "function") {
        window.applyI18n(lang);
      } else {
        window.location.reload();
      }
    });
  });
});
