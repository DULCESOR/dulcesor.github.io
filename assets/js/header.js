/* =====================================================
   header.js — Header global DULCESOR
   - 1 fila: logo | nav | idiomas
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const mount = document.getElementById("site-header");

  // Si no existe el contenedor, no hacemos nada
  if (!mount) return;

  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  const links = [
    { href: "index.html", key: "nav_home", fallback: "Inicio" },
    { href: "asociacion.html", key: "nav_association", fallback: "Asociación" },
    { href: "proyectos.html", key: "nav_projects", fallback: "Proyectos" },
    { href: "concursos.html", key: "nav_contests", fallback: "Concursos" },
    { href: "rutas.html", key: "nav_routes", fallback: "Rutas monacales" },
    { href: "patrocinadores.html", key: "nav_sponsors", fallback: "Patrocinadores" },
    { href: "contacto.html", key: "nav_contact", fallback: "Contacto" },
  ];

  const navHTML = links.map(l => {
    const isCurrent = path === l.href.toLowerCase();
    return `<a href="${l.href}" class="${isCurrent ? "current" : ""}" data-i18n="${l.key}">${l.fallback}</a>`;
  }).join("");

  mount.innerHTML = `
    <div class="headerBar">
      <a class="brandLogoOnly" href="index.html" aria-label="DULCESOR">
        <img class="brandLogo" src="assets/logos/logo-asociacion.png" alt="DULCESOR">
      </a>

      <nav class="headerNav" aria-label="Navegación principal">
        ${navHTML}
      </nav>

      <div class="lang" aria-label="Idiomas">
        <button class="langBtn" type="button" data-lang="es">ES</button>
        <button class="langBtn" type="button" data-lang="en">EN</button>
        <button class="langBtn" type="button" data-lang="pt">PT</button>
        <button class="langBtn" type="button" data-lang="fr">FR</button>
        <button class="langBtn" type="button" data-lang="it">IT</button>
      </div>
    </div>
  `;

  // Activar idioma con setLanguage() (definido en i18n.js)
  const langButtons = mount.querySelectorAll(".langBtn");
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (typeof setLanguage === "function") setLanguage(lang);
      langButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});
