// /assets/js/footer.js
document.addEventListener("DOMContentLoaded", () => {
  const footerHost = document.getElementById("site-footer");
  if (!footerHost) return;

  footerHost.innerHTML = `
    <div class="siteFooter">
      <div class="footerInner">
        <div class="footerLine1">
          © Asociación Cultural ‘DULCESOR’ – Repostería Monacal Conventual
        </div>
        <div class="footerLine2">
          Asociación cultural sin ánimo de lucro · En proceso de inscripción · Valladolid (España) · Sitio web desarrollado por Apolo Studio Creativo
        </div>
      </div>
    </div>
  `;
});
