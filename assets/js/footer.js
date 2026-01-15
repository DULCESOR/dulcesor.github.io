/* =====================================================
   footer.js — Footer global (DULCESOR)
   - Inyecta el footer en #site-footer
   - Aplica i18n y reemplaza {year} por el año actual
   ===================================================== */

(function () {
  const FOOTER_HOST_ID = "site-footer";

  function replaceYearTokens(root) {
    if (!root) return;
    const year = String(new Date().getFullYear());

    // Reemplaza {year} en textos (solo nodos con texto)
    root.querySelectorAll("*").forEach((el) => {
      // Evita tocar contenedores que tengan hijos (para no romper estructuras)
      if (el.children && el.children.length > 0) return;

      const t = el.textContent;
      if (t && t.includes("{year}")) {
        el.textContent = t.replace(/\{year\}/g, year);
      }
    });
  }

  function applyFooterI18nAndYear(host) {
    // 1) Traduce
    window.dulcesorI18n?.applyI18n?.();
    // 2) Sustituye {year} => 2026 (o el año actual)
    replaceYearTokens(host);
  }

  function buildFooterHTML() {
    return `
      <footer class="siteFooter" role="contentinfo">
        <div class="footerInner">
          <!-- IMPORTANTE: en i18n, footer_line1 debería incluir {year} -->
          <div class="footerLine1" data-i18n="footer_line1"></div>
          <div class="footerLine2" data-i18n="footer_line2"></div>
        </div>
      </footer>
    `;
  }

  function hookLanguageChange(host) {
    // Si existe setLanguage, la envolvemos para re-aplicar año tras traducir.
    const api = window.dulcesorI18n;
    if (!api || typeof api.setLanguage !== "function") return;

    if (api.__footerWrapped) return; // evita envolver más de una vez
    api.__footerWrapped = true;

    const originalSetLanguage = api.setLanguage.bind(api);
    api.setLanguage = function (lang) {
      originalSetLanguage(lang);
      // i18n ya habrá cambiado textos; ahora arreglamos {year}
      replaceYearTokens(host);
    };
  }

  function init() {
    const host = document.getElementById(FOOTER_HOST_ID);
    if (!host) return;

    host.innerHTML = buildFooterHTML();

    // Aplica i18n + año una vez cargado
    applyFooterI18nAndYear(host);

    // Reforzar (por si header/footer se inyectan en orden distinto)
    setTimeout(() => applyFooterI18nAndYear(host), 50);

    // Para que al cambiar idioma no vuelva a salir {year}
    hookLanguageChange(host);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
