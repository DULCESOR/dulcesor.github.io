document.addEventListener("DOMContentLoaded", () => {
  const host = document.getElementById("site-footer");
  if (!host) return;

  const year = new Date().getFullYear();

  host.innerHTML = `
    <footer class="siteFooter" role="contentinfo">
      <div class="footerInner">
        <div class="footerLine1" data-i18n="footer_line1" data-year="${year}"></div>
        <div class="footerLine2" data-i18n="footer_line2"></div>
      </div>
    </footer>
  `;

  // Aplica traducciones al footer inyectado
  window.dulcesorI18n?.applyI18n?.();
});
