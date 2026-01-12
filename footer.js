// footer.js
(() => {
  function footerHTML() {
    return `
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

  window.DULCESOR = window.DULCESOR || {};
  window.DULCESOR.renderFooter = () => {
    const mount = document.getElementById("site-footer");
    if (!mount) return;
    mount.innerHTML = footerHTML();
  };
})();
