document.addEventListener("DOMContentLoaded", () => {
  const host = document.getElementById("site-footer");
  if (!host) return;

  // Año actual dinámico
  const year = new Date().getFullYear();

  host.innerHTML = `
    <footer class="siteFooter" role="contentinfo">
      <div class="footerInner">
        <div class="footerLine1" data-i18n="footer_line1">
          © ${year} Asociación Cultural ‘DULCESOR’ – Repostería Monacal Conventual
        </div>
        <div class="footerLine2" data-i18n="footer_line2">
          Asociación cultural sin ánimo de lucro · En proceso de inscripción · Valladolid (España) · Web desarrollada por Apolo Studio Creativo
        </div>
      </div>
    </footer>
  `;

  // Aplicar traducciones (por si se cambia el idioma)
  window.dulcesorI18n?.applyI18n?.();
});
