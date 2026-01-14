/* =====================================================
   footer.js — Footer global (DULCESOR)
   - Inyecta el footer en <div id="site-footer"></div>
   - Año dinámico (NO depende de i18n)
   - Textos traducibles via data-i18n
   ===================================================== */

(function () {
  function buildFooter(year) {
    return `
      <footer class="siteFooter" role="contentinfo">
        <div class="footerInner">
          <div class="footerLine1">
            © <span id="footer-year">${year}</span>
            <span data-i18n="footer_line1">Asociación Cultural “DULCESOR” – Repostería Monacal Conventual</span>
          </div>

          <div class="footerLine2" data-i18n="footer_line2">
            Asociación cultural sin ánimo de lucro · En proceso de inscripción · Valladolid (España) · Web desarrollada por Apolo Studio Creativo
          </div>
        </div>
      </footer>
    `;
  }

  function initFooter() {
    const host = document.getElementById("site-footer");
    if (!host) return;

    const year = new Date().getFullYear();
    host.innerHTML = buildFooter(year);

    // Aplica traducciones al footer inyectado
    window.dulcesorI18n?.applyI18n?.();
  }

  document.addEventListener("DOMContentLoaded", initFooter);
})();
