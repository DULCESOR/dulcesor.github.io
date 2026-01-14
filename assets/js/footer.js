(function () {
  function buildFooterHTML(year) {
    return `
      <footer class="siteFooter" role="contentinfo">
        <div class="footerInner">
          <div class="footerLine1">
            <span>${year}</span>
            <span> · </span>
            <span data-i18n="footer_line1">Asociación Cultural “DULCESOR” – Repostería Monacal Conventual</span>
          </div>

          <div class="footerLine2" data-i18n="footer_line2">
            Asociación cultural sin ánimo de lucro · En proceso de inscripción · Valladolid (España)
          </div>

          <div class="footerLine3" data-i18n="footer_line3">
            Web desarrollada por Apolo Studio Creativo
          </div>
        </div>
      </footer>
    `;
  }

  function renderFooter() {
    const host = document.getElementById("site-footer");
    if (!host) return;
    const year = new Date().getFullYear();
    host.innerHTML = buildFooterHTML(year);
    window.dulcesorI18n?.applyI18n?.();
  }

  function init() {
    renderFooter();

    // Re-render cuando cambia el idioma (si tu i18n reusa setLanguage)
    if (window.dulcesorI18n?.setLanguage && !window.dulcesorI18n.__footerPatched) {
      const original = window.dulcesorI18n.setLanguage.bind(window.dulcesorI18n);
      window.dulcesorI18n.setLanguage = function (lang) {
        original(lang);
        // solo reaplica traducciones; el año no cambia
        window.dulcesorI18n?.applyI18n?.();
      };
      window.dulcesorI18n.__footerPatched = true;
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();

