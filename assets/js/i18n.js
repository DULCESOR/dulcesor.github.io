/* =====================================================
   i18n.js — Sistema de idiomas global (DULCESOR)
   - Traducciones centralizadas
   - applyI18n() para re-traducir tras inyecciones (header/footer)
   - Soporta placeholder {year} en textos (footer)
   ===================================================== */

const translations = {
  es: {
    // NAV
    nav_home: "Inicio",
    nav_association: "Asociación",
    nav_projects: "Proyectos",
    nav_contests: "Concursos",
    nav_routes: "Rutas monacales",
    nav_sponsors: "Patrocinadores",
    nav_contact: "Contacto",

    // ASOCIACIÓN
    assoc_title: "Asociación",
    assoc_subtitle:
      "Identidad, fines y principios de la Asociación Cultural DULCESOR – Repostería Monacal Conventual",

    // CONCURSOS
    contests_title: "Concursos",
    contests_subtitle:
      "Convocatorias culturales y gastronómicas impulsadas por la Asociación Cultural DULCESOR.",
    contests_frame_title: "Marco general",
    contests_frame_text:
      "La Asociación Cultural DULCESOR promueve concursos culturales y gastronómicos destinados a preservar y difundir la repostería monacal conventual.",
    contests_in_prep: "En preparación",
    contests_featured_title: "Convocatoria destacada",
    contests_reg_title: "Inscripción",
    contests_reg_text:
      "La participación estará abierta conforme a las bases oficiales de cada convocatoria.",
    contests_pill_init: "Convocatoria inicial",
    contests_docs_title: "Documentación oficial",
    contests_docs_text:
      "Acceso a la documentación oficial de la convocatoria (bases y solicitud).",
    contests_btn_bases: "Bases (PDF)",
    contests_btn_form: "Solicitud (PDF)",
    contests_pill_pdf: "Documentación en PDF",
    contests_poster_caption:
      "Cartel del I Concurso Internacional de Repostería Monacal Conventual DULCESOR",

    // NUEVO: patrocinadores del concurso
    contests_sponsors_title: "Patrocinadores del concurso",
    contests_sponsors_text:
      "Entidades colaboradoras del concurso (edición actual).",

    // PATROCINADORES (ASOCIACIÓN)
    sponsors_title: "Patrocinadores",
    sponsors_subtitle:
      "Entidades colaboradoras de la Asociación Cultural DULCESOR.",
    sponsors_assoc_title: "Patrocinadores de la asociación",
    sponsors_assoc_text:
      "Estas entidades apoyan el desarrollo general de la Asociación Cultural DULCESOR.",
    sponsors_nb21_name: "NB21",
    sponsors_nb21_text:
      "Patrocinador de la Asociación Cultural DULCESOR.",
    sponsors_visit_web: "Visitar web",

    // FOOTER
    footer_line1: "© {year} Asociación Cultural “DULCESOR” – Repostería Monacal Conventual",
    footer_line2:
      "Asociación cultural sin ánimo de lucro · En proceso de inscripción · Valladolid (España) · Web desarrollada por Apolo Studio Creativo",

    // Alias por compatibilidad (si alguna página usa claves antiguas)
    CONTESTS_TITLE: "Concursos",
    CONTESTS_FRAME_TITLE: "Marco general",
    CONTESTS_FEATURED_TITLE: "Convocatoria destacada",
    CONTESTS_REG_TITLE: "Inscripción",
    CONTESTS_DOCS_TITLE: "Documentación oficial",
    CONTESTS_BTN_BASES: "Bases (PDF)",
    CONTESTS_BTN_FORM: "Solicitud (PDF)",
    CONTESTS_PILL_INITL: "Convocatoria inicial",
    CONTESTS_PILL_PDF: "Documentación en PDF",
    CONTESTS_IN_PREP: "En preparación",
  },

  en: {
    nav_home: "Home",
    nav_association: "Association",
    nav_projects: "Projects",
    nav_contests: "Contests",
    nav_routes: "Monastic routes",
    nav_sponsors: "Sponsors",
    nav_contact: "Contact",

    assoc_title: "Association",
    assoc_subtitle:
      "Identity, principles and objectives of the Cultural Association DULCESOR – Monastic Conventual Pastry",

    contests_title: "Contests",
    contests_subtitle:
      "Cultural and gastronomic calls promoted by the Cultural Association DULCESOR.",
    contests_frame_title: "General framework",
    contests_frame_text:
      "The Cultural Association DULCESOR promotes cultural and gastronomic contests aimed at preserving and promoting monastic conventual pastry traditions.",
    contests_in_prep: "In preparation",
    contests_featured_title: "Featured call",
    contests_reg_title: "Registration",
    contests_reg_text:
      "Participation will be open according to the official rules of each call.",
    contests_pill_init: "Initial call",
    contests_docs_title: "Official documentation",
    contests_docs_text:
      "Access the official documents of the call (rules and application).",
    contests_btn_bases: "Rules (PDF)",
    contests_btn_form: "Application (PDF)",
    contests_pill_pdf: "PDF documentation",
    contests_poster_caption:
      "Poster of the 1st International Monastic Conventual Pastry Contest DULCESOR",

    contests_sponsors_title: "Contest sponsors",
    contests_sponsors_text: "Supporting entities of the contest (current edition).",

    sponsors_title: "Sponsors",
    sponsors_subtitle: "Partner entities of the Cultural Association DULCESOR.",
    sponsors_assoc_title: "Association sponsors",
    sponsors_assoc_text:
      "These entities support the general development of the Cultural Association DULCESOR.",
    sponsors_nb21_name: "NB21",
    sponsors_nb21_text: "Sponsor of the Cultural Association DULCESOR.",
    sponsors_visit_web: "Visit website",

    footer_line1: "© {year} Cultural Association “DULCESOR” – Monastic Conventual Pastry",
    footer_line2:
      "Non-profit cultural association · Registration in progress · Valladolid (Spain) · Website by Apolo Studio Creativo",

    CONTESTS_TITLE: "Contests",
    CONTESTS_FRAME_TITLE: "General framework",
    CONTESTS_FEATURED_TITLE: "Featured call",
    CONTESTS_REG_TITLE: "Registration",
    CONTESTS_DOCS_TITLE: "Official documentation",
    CONTESTS_BTN_BASES: "Rules (PDF)",
    CONTESTS_BTN_FORM: "Application (PDF)",
    CONTESTS_PILL_INITL: "Initial call",
    CONTESTS_PILL_PDF: "PDF documentation",
    CONTESTS_IN_PREP: "In preparation",
  },

  pt: {
    nav_home: "Início",
    nav_association: "Associação",
    nav_projects: "Projetos",
    nav_contests: "Concursos",
    nav_routes: "Rotas monásticas",
    nav_sponsors: "Patrocinadores",
    nav_contact: "Contacto",

    assoc_title: "Associação",
    assoc_subtitle:
      "Identidade, fins e princípios da Associação Cultural DULCESOR – Doçaria Monástica Conventual",

    contests_title: "Concursos",
    contests_subtitle:
      "Convocatórias culturais e gastronómicas promovidas pela Associação Cultural DULCESOR.",
    contests_frame_title: "Enquadramento geral",
    contests_frame_text:
      "A Associação Cultural DULCESOR promove concursos culturais e gastronómicos destinados a preservar e divulgar a doçaria monástica conventual.",
    contests_in_prep: "Em preparação",
    contests_featured_title: "Convocatória em destaque",
    contests_reg_title: "Inscrição",
    contests_reg_text:
      "A participação estará aberta de acordo com o regulamento oficial de cada convocatória.",
    contests_pill_init: "Convocatória inicial",
    contests_docs_title: "Documentação oficial",
    contests_docs_text:
      "Acesso à documentação oficial da convocatória (regulamento e inscrição).",
    contests_btn_bases: "Regulamento (PDF)",
    contests_btn_form: "Inscrição (PDF)",
    contests_pill_pdf: "Documentação em PDF",
    contests_poster_caption:
      "Cartaz do I Concurso Internacional de Doçaria Monástica Conventual DULCESOR",

    contests_sponsors_title: "Patrocinadores do concurso",
    contests_sponsors_text: "Entidades colaboradoras do concurso (edição atual).",

    sponsors_title: "Patrocinadores",
    sponsors_subtitle: "Entidades parceiras da Associação Cultural DULCESOR.",
    sponsors_assoc_title: "Patrocinadores da associação",
    sponsors_assoc_text:
      "Estas entidades apoiam o desenvolvimento geral da Associação Cultural DULCESOR.",
    sponsors_nb21_name: "NB21",
    sponsors_nb21_text: "Patrocinador da Associação Cultural DULCESOR.",
    sponsors_visit_web: "Visitar site",

    footer_line1: "© {year} Associação Cultural “DULCESOR” – Doçaria Monástica Conventual",
    footer_line2:
      "Associação cultural sem fins lucrativos · Inscrição em preparação · Valladolid (Espanha) · Website por Apolo Studio Creativo",
  },

  fr: {
    nav_home: "Accueil",
    nav_association: "Association",
    nav_projects: "Projets",
    nav_contests: "Concours",
    nav_routes: "Routes monastiques",
    nav_sponsors: "Partenaires",
    nav_contact: "Contact",

    assoc_title: "Association",
    assoc_subtitle:
      "Identité, finalités et principes de l’Association Culturelle DULCESOR – Pâtisserie monastique conventuelle",

    contests_title: "Concours",
    contests_subtitle:
      "Appels culturels et gastronomiques portés par l’Association Culturelle DULCESOR.",
    contests_frame_title: "Cadre général",
    contests_frame_text:
      "L’Association Culturelle DULCESOR organise des concours culturels et gastronomiques pour préserver et promouvoir la pâtisserie monastique conventuelle.",
    contests_in_prep: "En préparation",
    contests_featured_title: "Appel à participation",
    contests_reg_title: "Inscription",
    contests_reg_text:
      "La participation sera ouverte conformément au règlement officiel de chaque appel.",
    contests_pill_init: "Appel initial",
    contests_docs_title: "Documentation officielle",
    contests_docs_text:
      "Accès aux documents officiels (règlement et formulaire).",
    contests_btn_bases: "Règlement (PDF)",
    contests_btn_form: "Formulaire (PDF)",
    contests_pill_pdf: "Documentation PDF",
    contests_poster_caption:
      "Affiche du 1er Concours International de Pâtisserie Monastique Conventuelle DULCESOR",

    contests_sponsors_title: "Partenaires du concours",
    contests_sponsors_text: "Entités partenaires du concours (édition actuelle).",

    sponsors_title: "Partenaires",
    sponsors_subtitle: "Entités partenaires de l’Association Culturelle DULCESOR.",
    sponsors_assoc_title: "Partenaires de l’association",
    sponsors_assoc_text:
      "Ces entités soutiennent le développement général de l’Association Culturelle DULCESOR.",
    sponsors_nb21_name: "NB21",
    sponsors_nb21_text: "Partenaire de l’Association Culturelle DULCESOR.",
    sponsors_visit_web: "Visiter le site",

    footer_line1: "© {year} Association Culturelle “DULCESOR” – Pâtisserie monastique conventuelle",
    footer_line2:
      "Association culturelle à but non lucratif · Inscription en cours · Valladolid (Espagne) · Site par Apolo Studio Creativo",
  },

  it: {
    nav_home: "Home",
    nav_association: "Associazione",
    nav_projects: "Progetti",
    nav_contests: "Concorsi",
    nav_routes: "Percorsi monastici",
    nav_sponsors: "Sponsor",
    nav_contact: "Contatti",

    assoc_title: "Associazione",
    assoc_subtitle:
      "Identità, fini e principi dell’Associazione Culturale DULCESOR – Pasticceria monastica conventuale",

    contests_title: "Concorsi",
    contests_subtitle:
      "Bandi culturali e gastronomici promossi dall’Associazione Culturale DULCESOR.",
    contests_frame_title: "Quadro generale",
    contests_frame_text:
      "L’Associazione Culturale DULCESOR promuove concorsi culturali e gastronomici per preservare e valorizzare la pasticceria monastica conventuale.",
    contests_in_prep: "In preparazione",
    contests_featured_title: "Bando in evidenza",
    contests_reg_title: "Iscrizione",
    contests_reg_text:
      "La partecipazione sarà aperta secondo il regolamento ufficiale di ciascun bando.",
    contests_pill_init: "Bando iniziale",
    contests_docs_title: "Documentazione ufficiale",
    contests_docs_text: "Accesso ai documenti ufficiali (regolamento e modulo).",
    contests_btn_bases: "Regolamento (PDF)",
    contests_btn_form: "Modulo (PDF)",
    contests_pill_pdf: "Documentazione PDF",
    contests_poster_caption:
      "Locandina del 1° Concorso Internazionale di Pasticceria Monastica Conventuale DULCESOR",

    contests_sponsors_title: "Sponsor del concorso",
    contests_sponsors_text: "Enti partner del concorso (edizione attuale).",

    sponsors_title: "Sponsor",
    sponsors_subtitle: "Entità partner dell’Associazione Culturale DULCESOR.",
    sponsors_assoc_title: "Sponsor dell’associazione",
    sponsors_assoc_text:
      "Queste entità sostengono lo sviluppo generale dell’Associazione Culturale DULCESOR.",
    sponsors_nb21_name: "NB21",
    sponsors_nb21_text: "Sponsor dell’Associazione Culturale DULCESOR.",
    sponsors_visit_web: "Visita il sito",

    footer_line1: "© {year} Associazione Culturale “DULCESOR” – Pasticceria monastica conventuale",
    footer_line2:
      "Associazione culturale senza scopo di lucro · Iscrizione in corso · Valladolid (Spagna) · Sito di Apolo Studio Creativo",
  },
};

const STORAGE_KEY = "dulcesor_lang";
let currentLang = (localStorage.getItem(STORAGE_KEY) || "es").toLowerCase();
if (!translations[currentLang]) currentLang = "es";

function interpolate(text, el) {
  if (!text) return text;

  // Placeholder {year} (footer)
  const yearAttr = el?.getAttribute?.("data-year");
  if (yearAttr) {
    return text.replaceAll("{year}", yearAttr);
  }

  return text;
}

/** Aplica traducciones a todos los elementos con data-i18n */
function applyI18n() {
  const dict = translations[currentLang] || {};

  // Sincroniza <html lang="">
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const raw = dict[key] || key;
    el.textContent = interpolate(raw, el);
  });
}

/** Cambia idioma global + persiste + reaplica */
function setLanguage(lang) {
  const normalized = (lang || "").toLowerCase();
  if (!translations[normalized]) return;

  currentLang = normalized;
  localStorage.setItem(STORAGE_KEY, currentLang);

  applyI18n();

  // Actualiza botones activos si existen
  document.querySelectorAll(".langBtn").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === currentLang);
    b.setAttribute("aria-current", b.dataset.lang === currentLang ? "true" : "false");
  });
}

/* Exponer funciones globales para header/footer */
window.dulcesorI18n = {
  getLang: () => currentLang,
  setLanguage,
  applyI18n,
};

document.addEventListener("DOMContentLoaded", () => {
  applyI18n();
});

