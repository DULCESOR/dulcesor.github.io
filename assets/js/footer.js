(() => {
  "use strict";

  function applyI18nSafe() {
    // Tu i18n actual expone window.DULCESOR_I18N.apply()
    if (window.DULCESOR_I18N?.apply) return window.DULCESOR_I18N.apply();

    // Compat por si existiera
    if (typeof window.applyTranslations === "function") return window.applyTranslations();

    // Si tienes otro wrapper antiguo
    if (window.dulcesorI18n?.applyI18n) return window.dulcesorI18n.applyI18n();
  }

  function ensureCookiesScript() {
    const SRC = "assets/js/cookies.js";
    if (document.querySelector(`script[src="${SRC}"]`)) return;

    const s = document.createElement("script");
    s.src = SRC;
    s.async = true;
    document.head.appendChild(s);
  }

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

    <!-- Enlaces legales -->
    <nav class="footerLine3" aria-label="Enlaces legales">
      <a class="footerLink" href="/cookies.html">Cookies</a>
      <span class="footerSep">·</span>
      <a class="footerLink" href="/aviso-legal.html">Aviso legal</a>
    </nav>
  </div>
</footer>
`.trim();
  }

  function init() {
    const host = document.getElementById("site-footer");
    if (!host) return;

    host.innerHTML = buildFooter();

    // Carga banner + GA (solo si aceptan)
    ensureCookiesScript();

    // Traduce footer si procede
    applyI18nSafe();

    // Si cambia idioma desde header u otros, re-traduce footer
    document.addEventListener("dulcesor:langchange", () => {
      applyI18nSafe();
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
