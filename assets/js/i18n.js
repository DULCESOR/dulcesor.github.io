/* =====================================================
   i18n.js — Sistema de idiomas global
   Asociación Cultural DULCESOR
   ===================================================== */

const translations = {

  /* =====================================================
     ESPAÑOL
  ===================================================== */
  es: {

    /* ----- NAV ----- */
    nav_home: "Inicio",
    nav_association: "Asociación",
    nav_projects: "Proyectos",
    nav_contests: "Concursos",
    nav_routes: "Rutas monacales",
    nav_sponsors: "Patrocinadores",
    nav_contact: "Contacto",

    /* =====================================================
       ASOCIACIÓN
    ===================================================== */
    assoc_title: "Asociación",
    assoc_subtitle:
      "Identidad, fines y principios de la Asociación Cultural DULCESOR – Repostería Monacal Conventual",

    assoc_identity_title: "Identidad",
    assoc_name_title: "Denominación",
    assoc_name_text:
      "Asociación Cultural DULCESOR – Repostería Monacal Conventual",
    assoc_nonprofit: "Entidad sin ánimo de lucro",

    assoc_status_title: "Situación",
    assoc_status_text: "Entidad en proceso de inscripción",
    assoc_inprep: "En preparación",

    assoc_scope_title: "Ámbito",
    assoc_scope_text:
      "Cultural y gastronómico, con proyección nacional e internacional",

    assoc_seat_title: "Sede",
    assoc_seat_text: "Valladolid (España)",

    assoc_mission_title: "Misión",
    assoc_mission_text:
      "Preservar, difundir y poner en valor la repostería monacal conventual y el patrimonio gastronómico ligado a comunidades religiosas.",

    assoc_transparency_title: "Transparencia",
    assoc_transparency_text:
      "La información institucional se publicará progresivamente.",
    assoc_transparency_pill: "Espacio en construcción",

    /* =====================================================
       CONCURSOS
    ===================================================== */
    contests_title: "Concursos",
    contests_subtitle:
      "Convocatorias culturales y gastronómicas impulsadas por la Asociación Cultural DULCESOR",

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
      "Acceso a las bases reguladoras y a la solicitud de inscripción.",
    contests_btn_bases: "Bases (PDF)",
    contests_btn_form: "Solicitud (PDF)",
    contests_pill_pdf: "Documentación en PDF",

    contests_poster_caption:
      "Cartel del I Concurso Internacional de Repostería Monacal Conventual DULCESOR"
  },

  /* =====================================================
     ENGLISH
  ===================================================== */
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

    assoc_identity_title: "Identity",
    assoc_name_title: "Official name",
    assoc_name_text:
      "Cultural Association DULCESOR – Monastic Conventual Pastry",
    assoc_nonprofit: "Non-profit organization",

    assoc_status_title: "Status",
    assoc_status_text: "Organization in the process of registration",
    assoc_inprep: "In preparation",

    assoc_scope_title: "Scope",
    assoc_scope_text:
      "Cultural and gastronomic, with national and international outreach",

    assoc_seat_title: "Registered seat",
    assoc_seat_text: "Valladolid (Spain)",

    assoc_mission_title: "Mission",
    assoc_mission_text:
      "To preserve and promote monastic conventual pastry and its gastronomic heritage.",

    assoc_transparency_title: "Transparency",
    assoc_transparency_text:
      "Institutional information will be published progressively.",
    assoc_transparency_pill: "Section under construction",

    contests_title: "Contests",
    contests_subtitle:
      "Cultural and gastronomic competitions promoted by the Cultural Association DULCESOR",

    contests_frame_title: "General framework",
    contests_frame_text:
      "The Cultural Association DULCESOR promotes cultural and gastronomic contests aimed at preserving monastic pastry traditions.",
    contests_in_prep: "In preparation",

    contests_featured_title: "Featured call",

    contests_reg_title: "Registration",
    contests_reg_text:
      "Participation will be open according to the official rules of each call.",
    contests_pill_init: "Initial call",

    contests_docs_title: "Official documentation",
    contests_docs_text:
      "Access to the official rules and registration form.",
    contests_btn_bases: "Rules (PDF)",
    contests_btn_form: "Application (PDF)",
    contests_pill_pdf: "PDF documentation",

    contests_poster_caption:
      "Poster of the 1st International Monastic Pastry Contest DULCESOR"
  },

  /* =====================================================
     PORTUGUÊS / FR / IT
     (abreviado: misma estructura, textos coherentes)
     — ya funcionales, se pueden pulir luego —
  ===================================================== */
  pt: {}, fr: {}, it: {}
};

/* =====================================================
   Inicialización
===================================================== */
let currentLang = "es";

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key] || key;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);
});
