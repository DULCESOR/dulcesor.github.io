/* assets/js/footer.js */
(function () {
  function init() {
    const host = document.getElementById("site-footer");
    if (!host) return;

    const year = new Date().getFullYear();

    host.innerHTML = `
      <footer class="siteFooter" role="contentinfo">
        <div class="footerInner">
          <div class="footerLine1">
            <span class="footerYear">${year}</span>
            <span data-i18n="footer_line1">Asociación Cultural “DULCESOR” – Repostería Monacal Conventual</span>
          </div>
          <div class="footerLine2" data-i18n="footer_line2">
            Asociación cultural sin ánimo de lucro · En proceso de inscripción · Valladolid (España) · Web desarrollada por Apolo Studio Creativo
          </div>
        </div>
      </footer>
    `;

    // Traduce el footer recién inyectado
    window.dulcesorI18n?.applyI18n?.();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
