// footer.js
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer"); // o el contenedor que uses
  if (!footer) return;

  footer.innerHTML = `
    <div class="site-footer">
      <div class="footer-row footer-row--top">
        © Asociación Cultural ‘DULCESOR’ – Repostería Monacal Conventual
      </div>

      <div class="footer-row footer-row--bottom">
        Asociación cultural sin ánimo de lucro · En proceso de inscripción · Valladolid (España) · Sitio web desarrollado por Apolo Studio Creativo
      </div>
    </div>
  `;
});
