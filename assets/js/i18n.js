// /assets/js/i18n.js
(() => {
  // 1) Traducciones (añade/ajusta textos aquí)
  const DICT = {
    es: {
      nav_home: "INICIO",
      nav_assoc: "ASOCIACIÓN",
      nav_projects: "PROYECTOS",
      nav_contests: "CONCURSOS",
      nav_routes: "RUTAS MONACALES",
      nav_sponsors: "PATROCINADORES",
      nav_contact: "CONTACTO",

      footer_line1: "© Asociación Cultural ‘DULCESOR’ – Repostería Monacal Conventual",
      footer_line2:
        "Asociación cultural sin ánimo de lucro · En proceso de inscripción · Valladolid (España) · Sitio web desarrollado por Apolo Studio Creativo",
    },

    en: {
      nav_home: "HOME",
      nav_assoc: "ASSOCIATION",
      nav_projects: "PROJECTS",
      nav_contests: "CONTESTS",
      nav_routes: "MONASTIC ROUTES",
      nav_sponsors: "SPONSORS",
      nav_contact: "CONTACT",

      footer_line1: "© Cultural Association ‘DULCESOR’ – Monastic Convent Pastry",
      footer_line2:
        "Non-profit cultural association · Registration in progress · Valladolid (Spain) · Website developed by Apolo Studio Creativo",
    },

    pt: {
      nav_home: "INÍCIO",
      nav_assoc: "ASSOCIAÇÃO",
      nav_projects: "PROJETOS",
      nav_contests: "CONCURSOS",
      nav_routes: "ROTAS MONÁSTICAS",
      nav_sponsors: "PATROCINADORES",
      nav_contact: "CONTACTO",

      footer_line1: "© Associação Cultural ‘DULCESOR’ – Doçaria Monástica Conventual",
      footer_line2:
        "Associação cultural sem fins lucrativos · Registo em curso · Valladolid (Espanha) · Site desenvolvido por Apolo Studio Creativo",
    },

    fr: {
      nav_home: "ACCUEIL",
      nav_assoc: "ASSOCIATION",
      nav_projects: "PROJETS",
      nav_contests: "CONCOURS",
      nav_routes: "ROUTES MONASTIQUES",
      nav_sponsors: "MÉCÈNES",
      nav_contact: "CONTACT",

      footer_line1: "© Association Culturelle ‘DULCESOR’ – Pâtisserie Monastique Conventuelle",
      footer_line2:
        "Association culturelle à but non lucratif · Inscription en cours · Valladolid (Espagne) · Site développé par Apolo Studio Creativo",
    },

    it: {
      nav_home: "HOME",
      nav_assoc: "ASSOCIAZIONE",
      nav_projects: "PROGETTI",
      nav_contests: "CONCORSI",
      nav_routes: "ITINERARI MONASTICI",
      nav_sponsors: "SPONSOR",
      nav_contact: "CONTATTI",

      footer_line1: "© Associazione Culturale ‘DULCESOR’ – Pasticceria Monastica Conventuale",
      footer_line2:
        "Associazione culturale senza scopo di lucro · Iscrizione in corso · Valladolid (Spagna) · Sito sviluppato da Apolo Studio Creativo",
    },
  };

  const SUPPORTED = Object.keys(DICT);

  function getLanguage() {
    const saved = (localStorage.getItem("lang") || "es").toLowerCase();
    return SUPPORTED.includes(saved) ? saved : "es";
  }

  function t(key, lang = getLanguage()) {
    return (DICT[lang] && DICT[lang][key]) || (DICT.es && DICT.es[key]) || key;
  }

  // 2) Aplica traducciones a cualquier elemento con data-i18n="clave"
  function applyI18n(lang = getLanguage()) {
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key, lang);
    });

    // También soporta placeholders: data-i18n-placeholder="clave"
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      el.setAttribute("placeholder", t(key, lang));
    });
  }

  function setLanguage(lang) {
    const normalized = (lang || "es").toLowerCase();
    const finalLang = SUPPORTED.includes(normalized) ? normalized : "es";
    localStorage.setItem("lang", finalLang);
    applyI18n(finalLang);
  }

  // Expone funciones globales para header.js
  window.getLanguage = getLanguage;
  window.setLanguage = setLanguage;
  window.applyI18n = applyI18n;
  window.t = t;

  // Aplica al cargar
  document.addEventListener("DOMContentLoaded", () => applyI18n(getLanguage()));
})();
