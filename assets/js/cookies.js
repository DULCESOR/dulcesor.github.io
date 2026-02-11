(() => {
  "use strict";

  // =========================
  // CONFIG
  // =========================
  const GA_MEASUREMENT_ID = "G-KRE7MLMNXY"; // <-- TU ID GA4 NUEVO
  const CONSENT_KEY = "dulcesor_cookie_consent_v1";
  const CONSENT_TTL_DAYS = 365; // recomendado: 12 meses

  // Si NO quieres banner en ciertas páginas, puedes añadir aquí rutas:
  // const DISABLE_ON = new Set(["/cookies.html"]); // ejemplo
  // const path = (location.pathname || "").toLowerCase();
  // if (DISABLE_ON.has(path)) return;

  // =========================
  // i18n interno (sin tocar tu i18n global)
  // =========================
  const STRINGS = {
    es: {
      title: "Cookies",
      text:
        "Usamos cookies de analítica (Google Analytics) para medir el uso del sitio y mejorarlo. Puedes aceptar o rechazar.",
      accept: "Aceptar",
      reject: "Rechazar",
      policy: "Política de cookies",
      aria: "Aviso de cookies",
    },
    en: {
      title: "Cookies",
      text:
        "We use analytics cookies (Google Analytics) to measure site usage and improve it. You can accept or reject.",
      accept: "Accept",
      reject: "Reject",
      policy: "Cookie policy",
      aria: "Cookie notice",
    },
    pt: {
      title: "Cookies",
      text:
        "Usamos cookies de analítica (Google Analytics) para medir o uso do site e melhorá-lo. Pode aceitar ou rejeitar.",
      accept: "Aceitar",
      reject: "Rejeitar",
      policy: "Política de cookies",
      aria: "Aviso de cookies",
    },
    fr: {
      title: "Cookies",
      text:
        "Nous utilisons des cookies d’analyse (Google Analytics) pour mesurer l’usage du site et l’améliorer. Vous pouvez accepter ou refuser.",
      accept: "Accepter",
      reject: "Refuser",
      policy: "Politique de cookies",
      aria: "Bannière de cookies",
    },
    it: {
      title: "Cookie",
      text:
        "Utilizziamo cookie di analisi (Google Analytics) per misurare l’uso del sito e migliorarlo. Puoi accettare o rifiutare.",
      accept: "Accetta",
      reject: "Rifiuta",
      policy: "Informativa cookie",
      aria: "Avviso cookie",
    },
  };

  function getLang() {
    // intenta usar tu sistema si está disponible
    const l =
      window.DULCESOR_I18N?.getLang?.() ||
      document.documentElement.getAttribute("lang") ||
      "es";
    const lang = String(l).toLowerCase();
    return STRINGS[lang] ? lang : "es";
  }

  // =========================
  // Consent storage
  // =========================
  function nowMs() {
    return Date.now();
  }
  function ttlMs(days) {
    return days * 24 * 60 * 60 * 1000;
  }

  function readConsent() {
    try {
      const raw = localStorage.getItem(CONSENT_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (!data || typeof data !== "object") return null;
      if (!data.ts || typeof data.ts !== "number") return null;

      // expiración
      if (nowMs() - data.ts > ttlMs(CONSENT_TTL_DAYS)) {
        localStorage.removeItem(CONSENT_KEY);
        return null;
      }

      // expected: { analytics: true/false, ts: number }
      if (typeof data.analytics !== "boolean") return null;
      return data;
    } catch {
      return null;
    }
  }

  function writeConsent(analytics) {
    try {
      localStorage.setItem(
        CONSENT_KEY,
        JSON.stringify({ analytics: !!analytics, ts: nowMs() })
      );
    } catch {}
  }

  // =========================
  // GA loader (solo si aceptan)
  // =========================
  function loadGA() {
    if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === "G-XXXXXXXXXX") {
      console.warn("[cookies] Falta GA_MEASUREMENT_ID (G-...) en cookies.js");
      return;
    }
    if (window.__DULCESOR_GA_LOADED__) return;
    window.__DULCESOR_GA_LOADED__ = true;

    // crea gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = window.gtag || gtag;

    // carga el script de GA4
    const s = document.createElement("script");
    s.async = true;
    s.src =
      "https://www.googletagmanager.com/gtag/js?id=" +
      encodeURIComponent(GA_MEASUREMENT_ID);
    document.head.appendChild(s);

    // inicializa
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      anonymize_ip: true,

      // Mejora recomendada (si NO haces publicidad/remarketing)
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
  }

  // =========================
  // Banner UI
  // =========================
  function createBanner() {
    const lang = getLang();
    const t = STRINGS[lang];

    // si ya existe, no duplicar
    if (document.getElementById("cookie-banner")) return;

    const banner = document.createElement("div");
    banner.id = "cookie-banner";
    banner.className = "cookieBanner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", t.aria);

    banner.innerHTML = `
      <div class="cookieBanner__inner">
        <div class="cookieBanner__text">
          <div class="cookieBanner__title">${t.title}</div>
          <div class="cookieBanner__body">${t.text}</div>
          <a class="cookieBanner__link" href="/cookies.html">${t.policy}</a>
        </div>

        <div class="cookieBanner__actions">
          <button type="button" class="cookieBtn cookieBtn--reject">${t.reject}</button>
          <button type="button" class="cookieBtn cookieBtn--accept">${t.accept}</button>
        </div>
      </div>
    `.trim();

    // acciones
    banner
      .querySelector(".cookieBtn--accept")
      .addEventListener("click", () => {
        writeConsent(true);
        removeBanner();
        loadGA();
      });

    banner
      .querySelector(".cookieBtn--reject")
      .addEventListener("click", () => {
        writeConsent(false);
        removeBanner();
        // No hacemos nada: GA no se carga
      });

    document.body.appendChild(banner);
  }

  function removeBanner() {
    const el = document.getElementById("cookie-banner");
    if (el) el.remove();
  }

  function init() {
    const consent = readConsent();

    // si ya eligió:
    if (consent) {
      if (consent.analytics) loadGA();
      return;
    }

    // si no eligió aún -> mostrar banner
    createBanner();
  }

  // arranca cuando DOM esté listo
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
