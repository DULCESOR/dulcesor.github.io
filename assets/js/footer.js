// /assets/js/footer.js
document.addEventListener("DOMContentLoaded", () => {
  const host = document.getElementById("site-footer");
  if (!host) return;

  host.innerHTML = `
    <div class="siteFooter">
      <div class="footerInner">
        <div class="footerLine1" data-i18n="footer_line1">
          © Asociación Cultural ‘DULCESOR’ – Repostería Monacal Conventual
        </div>
        <div class="footerLine2" data-i18n="footer_line2">
          Asociación cultural sin ánimo de lucro · En proceso de inscripción · Valladolid (España) · Sitio web desarrollado por Apolo Studio Creativo
        </div>
      </div>
    </div>
  `;

  // Aplica traducciones al footer recién inyectado
  const activeLang = typeof window.getLanguage === "function" ? window.getLanguage() : "es";
  if (typeof window.applyI18n === "function") window.applyI18n(activeLang);
});
