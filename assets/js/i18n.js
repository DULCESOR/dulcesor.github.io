/* =====================================================
   i18n.js — DULCESOR (mínimo sólido + evento langchange)
   ===================================================== */

const translations = {
  es: {
    nav_home: "Inicio",
    nav_association: "Asociación",
    nav_projects: "Proyectos",
    nav_contests: "Concursos",
    nav_routes: "Rutas monacales",
    nav_sponsors: "Patrocinadores",
    nav_contact: "Contacto",

    contact_title: "Contacto",
    contact_subtitle: "Canales de comunicación de la Asociación Cultural DULCESOR.",
    contact_block_title: "Información de contacto",
    contact_email_label: "Información general",
    contact_contact_label: "Contacto institucional",
    contact_contest_label: "Concursos",
    contact_address_label: "Sede",
    contact_address_value: "Valladolid (España)",
    contact_note: "Si deseas colaborar o ampliar información, escríbenos y te responderemos a la mayor brevedad.",

    footer_line1_prefix: "©",
    footer_line1_suffix: "Asociación Cultural “DULCESOR” – Repostería Monacal Conventual",
    footer_line2:
      "Asociación cultural sin ánimo de lucro · En proceso de inscripción · Valladolid (España) · Web desarrollada por Apolo Studio Creativo",
  },

  en: {
    nav_home: "Home",
    nav_association: "Association",
    nav_projects: "Projects",
    nav_contests: "Contests",
    nav_routes: "Monastic routes",
    nav_sponsors: "Sponsors",
    nav_contact: "Contact",

    contact_title: "Contact",
    contact_subtitle: "Communication channels of the Cultural Association DULCESOR.",
    contact_block_title: "Contact information",
    contact_email_label: "General information",
    contact_contact_label: "Institutional contact",
    contact_contest_label: "Contests",
    contact_address_label: "Headquarters",
    contact_address_value: "Valladolid (Spain)",
    contact_note: "If you wish to collaborate or request more information, write to us and we will reply as soon as possible.",

    footer_line1_prefix: "©",
    footer_line1_suffix: "Cultural Association “DULCESOR” – Monastic Conventual Pastry",
    footer_line2:
      "Non-profit cultural association · Registration in progress · Valladolid (Spain) · Website developed by Apolo Studio Creativo",
  },

  pt: {
    nav_home: "Início",
    nav_association: "Associação",
    nav_projects: "Projetos",
    nav_contests: "Concursos",
    nav_routes: "Rotas monásticas",
    nav_sponsors: "Patrocinadores",
    nav_contact: "Contacto",

    contact_title: "Contacto",
    contact_subtitle: "Canais de comunicação da Associação Cultural DULCESOR.",
    contact_block_title: "Informação de contacto",
    contact_email_label: "Informação geral",
    contact_contact_label: "Contacto institucional",
    contact_contest_label: "Concursos",
    contact_address_label: "Sede",
    contact_address_value: "Valladolid (Espanha)",
    contact_note: "Se deseja colaborar ou obter mais informação, escreva-nos e responderemos o mais breve possível.",

    footer_line1_prefix: "©",
    footer_line1_suffix: "Associação Cultural “DULCESOR” – Doçaria Monástica Conventual",
    footer_line2:
      "Associação cultural sem fins lucrativos · Inscrição em curso · Valladolid (Espanha) · Site desenvolvido por Apolo Studio Creativo",
  },

  fr: {
    nav_home: "Accueil",
    nav_association: "Association",
    nav_projects: "Projets",
    nav_contests: "Concours",
    nav_routes: "Routes monastiques",
    nav_sponsors: "Partenaires",
    nav_contact: "Contact",

    contact_title: "Contact",
    contact_subtitle: "Canaux de communication de l’Association Culturelle DULCESOR.",
    contact_block_title: "Informations de contact",
    contact_email_label: "Informations générales",
    contact_contact_label: "Contact institutionnel",
    contact_contest_label: "Concours",
    contact_address_label: "Siège",
    contact_address_value: "Valladolid (Espagne)",
    contact_note: "Si vous souhaitez collaborer ou demander plus d’informations, écrivez-nous et nous vous répondrons au plus vite.",

    footer_line1_prefix: "©",
    footer_line1_suffix: "Association Culturelle “DULCESOR” – Pâtisserie monastique conventuelle",
    footer_line2:
      "Association culturelle à but non lucratif · Inscription en cours · Valladolid (Espagne) · Site développé par Apolo Studio Creativo",
  },

  it: {
    nav_home: "Home",
    nav_association: "Associazione",
    nav_projects: "Progetti",
    nav_contests: "Concorsi",
    nav_routes: "Percorsi monastici",
    nav_sponsors: "Sponsor",
    nav_contact: "Contatti",

    contact_title: "Contatti",
    contact_subtitle: "Canali di comunicazione dell’Associazione Culturale DULCESOR.",
    contact_block_title: "Informazioni di contatto",
    contact_email_label: "Informazioni generali",
    contact_contact_label: "Contatto istituzionale",
    contact_contest_label: "Concorsi",
    contact_address_label: "Sede",
    contact_address_value: "Valladolid (Spagna)",
    contact_note: "Se desideri collaborare o ricevere più informazioni, scrivici e ti risponderemo al più presto.",

    footer_line1_prefix: "©",
    footer_line1_suffix: "Associazione Culturale “DULCESOR” – Pasticceria monastica conventuale",
    footer_line2:
      "Associazione culturale senza scopo di lucro · Iscrizione in corso · Valladolid (Spagna) · Sito sviluppato da Apolo Studio Creativo",
  },
};

const STORAGE_KEY = "dulcesor_lang";
let currentLang = (localStorage.getItem(STORAGE_KEY) || "es").toLowerCase();
if (!translations[currentLang]) currentLang = "es";

function applyI18n() {
  const dict = translations[currentLang] || {};
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = dict[key] ?? key;
  });

  // sincroniza <html lang="">
  document.documentElement.lang = currentLang;
}

function setLanguage(lang) {
  const normalized = (lang || "").toLowerCase();
  if (!translations[normalized]) return;

  currentLang = normalized;
  localStorage.setItem(STORAGE_KEY, currentLang);

  applyI18n();

  // notifica a header/footer para que re-marque botones, etc.
  document.dispatchEvent(new CustomEvent("dulcesor:langchange", { detail: { lang: currentLang } }));
}

window.dulcesorI18n = {
  getLang: () => currentLang,
  setLanguage,
  applyI18n,
};

document.addEventListener("DOMContentLoaded", () => {
  applyI18n();
});
