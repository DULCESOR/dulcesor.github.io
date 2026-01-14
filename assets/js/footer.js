(function () {
  function buildFooter() {
    return `
      <footer class="siteFooter" role="contentinfo">
        <div class="footerInner">
          <div class="footerLine1">
            <span class="footerYear"></span>
            <span data-i18n="footer_line1">Asociación Cultural ‘DULCESOR’ – Repostería Monacal Conventual</span>
          </div>
          <div class="footerLine2" data-i18n="footer_line2">
            Asociación cultural sin ánimo de lucro · En proceso de inscripción · Valladolid (España) · Web desarrollada por Apolo Studio Creativo
          </div>
        </div>
      </footer>
    `;
  }

  function setYear() {
    const y = new Date().getFullYear();
    const yearEl = document.querySelector(".footerYear");
    if (yearEl) yearEl.textContent = `© ${y} `;
  }

  function render() {
    const mount = document.getElementById("site-footer");
    if (!mount) return;

    mount.innerHTML = buildFooter();

    // año + traducciones
    setYear();
    window.dulcesorI18n?.applyI18n?.();
  }

  document.addEventListener("DOMContentLoaded", render);

  // Si cambias idioma desde el header, refrescamos footer
  document.addEventListener("dulcesor:langchange", () => {
    setYear();
    window.dulcesorI18n?.applyI18n?.();
  });
})();
