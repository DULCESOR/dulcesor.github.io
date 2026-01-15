(function () {
  function buildFooter() {
    const year = new Date().getFullYear();

    return `
<footer class="siteFooter" role="contentinfo">
  <div class="footerInner">
    <div class="footerLine1">
      <span data-i18n="footer_line1_prefix">©</span>
      <span class="footerYear">${year}</span>
      <span data-i18n="footer_line1_suffix">Asociación Cultural “DULCESOR” – Repostería Monacal Conventual</span>
    </div>
    <div class="footerLine2" data-i18n="footer_line2">
      Asociación cultural sin ánimo de lucro · En proceso de inscripción · Valladolid (España) · Web desarrollada por Apolo Studio Creativo
    </div>
  </div>
</footer>
`.trim();
  }

  function init() {
    const host = document.getElementById("site-footer");
    if (!host) return;

    host.innerHTML = buildFooter();
    window.dulcesorI18n?.applyI18n?.();

    document.addEventListener("dulcesor:langchange", () => {
      window.dulcesorI18n?.applyI18n?.();
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();

