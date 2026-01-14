/* =====================================================
   i18n.js — Sistema de idiomas global (DULCESOR)
   - Traducciones centralizadas
   - Soporta alias de claves para compatibilidad entre páginas
   ===================================================== */

const translations = {
  /* =====================================================
     ESPAÑOL
  ===================================================== */
  es: {
    /* ----- NAV (nuevas + alias antiguas) ----- */
    nav_home: "Inicio",
    nav_association: "Asociación",
    nav_projects: "Proyectos",
    nav_contests: "Concursos",
    nav_routes: "Rutas monacales",
    nav_sponsors: "Patrocinadores",
    nav_contact: "Contacto",

    nav_inicio: "Inicio",
    nav_asociacion: "Asociación",
    nav_proyectos: "Proyectos",
    nav_concursos: "Concursos",
    nav_rutas: "Rutas monacales",
    nav_patrocinadores: "Patrocinadores",
    nav_contacto: "Contacto",

    /* ----- BRAND / misc (por si alguna página lo usa) ----- */
    brand_sub: "Repostería Monacal Conventual",

    /* =====================================================
       ASOCIACIÓN (claves nuevas + alias habituales)
    ===================================================== */
    assoc_title: "Asociación",
    assoc_subtitle:
      "Identidad, fines y principios de la Asociación Cultural DULCESOR – Repostería Monacal Conventual",

    assoc_identity_title: "Identidad",
    assoc_name_title: "Denominación",
    assoc_name_text: "Asociación Cultural DULCESOR – Repostería Monacal Conventual",
    assoc_nonprofit: "Entidad sin ánimo de lucro",

    assoc_status_title: "Situación",
    assoc_status_text: "Entidad en proceso de inscripción",
    assoc_inprep: "En preparación",

    assoc_scope_title: "Ámbito",
    assoc_scope_text: "Cultural y gastronómico, con proyección nacional e internacional",

    assoc_seat_title: "Sede",
    assoc_seat_text: "Valladolid (España)",

    assoc_mission_title: "Misión",
    assoc_mission_text:
      "Preservar, difundir y poner en valor la repostería monacal conventual y el patrimonio gastronómico ligado a comunidades religiosas.",

    assoc_transparency_title: "Transparencia",
    assoc_transparency_text: "La información institucional y económica se publicará progresivamente.",
    assoc_transparency_pill: "Espacio en construcción",

    /* Alias habituales (si alguna página no está migrada) */
    title: "Asociación",
    subtitle:
      "Identidad, fines y principios de la Asociación Cultural DULCESOR – Repostería Monacal Conventual",

    /* =====================================================
       CONCURSOS (claves nuevas + alias que pueden aparecer)
    ===================================================== */
    contests_title: "Concursos",
    contests_subtitle: "Convocatorias culturales y gastronómicas impulsadas por la Asociación Cultural DULCESOR.",

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
    contests_docs_text: "Acceso a la documentación oficial de la convocatoria (bases y solicitud).",
    contests_btn_bases: "Bases (PDF)",
    contests_btn_form: "Solicitud (PDF)",
    contests_pill_pdf: "Documentación en PDF",

    contests_poster_caption:
      "Cartel del I Concurso Internacional de Repostería Monacal Conventual DULCESOR",

    /* Alias (por si el HTML usa claves distintas) */
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

    frame_title: "Marco general",
    frame_text:
      "La Asociación Cultural DULCESOR promueve concursos culturales y gastronómicos destinados a preservar y difundir la repostería monacal conventual.",
    in_prep: "En preparación",
    list_title: "Convocatorias",
    docs_title: "Documentación oficial",
    docs_text: "Acceso a la documentación oficial de la convocatoria (bases y solicitud).",
    btn_bases: "Bases (PDF)",
    btn_form: "Solicitud (PDF)",
    pill_intl: "Convocatoria inicial",
    pill_pdf: "Documentación en PDF",
    reg_title: "Inscripción",
    reg_text:
      "La participación estará abierta conforme a las bases oficiales de cada convocatoria.",
    poster_caption:
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

    nav_inicio: "Home",
    nav_asociacion: "Association",
    nav_proyectos: "Projects",
    nav_concursos: "Contests",
    nav_rutas: "Monastic routes",
    nav_patrocinadores: "Sponsors",
    nav_contacto: "Contact",

    brand_sub: "Monastic Conventual Pastry",

    contests_title: "Contests",
    contests_subtitle: "Cultural and gastronomic calls promoted by the Cultural Association DULCESOR.",

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
    contests_docs_text: "Access the official documents of the call (rules and application).",
    contests_btn_bases: "Rules (PDF)",
    contests_btn_form: "Application (PDF)",
    contests_pill_pdf: "PDF documentation",

    contests_poster_caption:
      "Poster of the 1st International Monastic Conventual Pastry Contest DULCESOR",

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

    frame_title: "General framework",
    frame_text:
      "The Cultural Association DULCESOR promotes cultural and gastronomic contests aimed at preserving and promoting monastic conventual pastry traditions.",
    in_prep: "In preparation",
    list_title: "Calls",
    docs_title: "Official documentation",
    docs_text: "Access the official documents of the call (rules and application).",
    btn_bases: "Rules (PDF)",
    btn_form: "Application (PDF)",
    pill_intl: "Initial call",
    pill_pdf: "PDF documentation",
    reg_title: "Registration",
    reg_text:
      "Participation will be open according to the official rules of each call.",
    poster_caption:
      "Poster of the 1st International Monastic Conventual Pastry Contest DULCESOR"
  },

  /* =====================================================
     PORTUGUÊS
  ===================================================== */
  pt: {
    nav_home: "Início",
    nav_association: "Associação",
    nav_projects: "Projetos",
    nav_contests: "Concursos",
    nav_routes: "Rotas monásticas",
    nav_sponsors: "Patrocinadores",
    nav_contact: "Contacto",

    nav_inicio: "Início",
    nav_asociacion: "Associação",
    nav_proyectos: "Projetos",
    nav_concursos: "Concursos",
    nav_rutas: "Rotas monásticas",
    nav_patrocinadores: "Patrocinadores",
    nav_contacto: "Contacto",

    brand_sub: "Doçaria Monástica Conventual",

    contests_title: "Concursos",
    contests_subtitle: "Convocatórias culturais e gastronómicas promovidas pela Associação Cultural DULCESOR.",

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
    contests_docs_text: "Acesso à documentação oficial da convocatória (regulamento e inscrição).",
    contests_btn_bases: "Regulamento (PDF)",
    contests_btn_form: "Inscrição (PDF)",
    contests_pill_pdf: "Documentação em PDF",

    contests_poster_caption:
      "Cartaz do I Concurso Internacional de Doçaria Monástica Conventual DULCESOR",

    CONTESTS_TITLE: "Concursos",
    CONTESTS_FRAME_TITLE: "Enquadramento geral",
    CONTESTS_FEATURED_TITLE: "Convocatória em destaque",
    CONTESTS_REG_TITLE: "Inscrição",
    CONTESTS_DOCS_TITLE: "Documentação oficial",
    CONTESTS_BTN_BASES: "Regulamento (PDF)",
    CONTESTS_BTN_FORM: "Inscrição (PDF)",
    CONTESTS_PILL_INITL: "Convocatória inicial",
    CONTESTS_PILL_PDF: "Documentação em PDF",
    CONTESTS_IN_PREP: "Em preparação",

    frame_title: "Enquadramento geral",
    frame_text:
      "A Associação Cultural DULCESOR promove concursos culturais e gastronómicos destinados a preservar e divulgar a doçaria monástica conventual.",
    in_prep: "Em preparação",
    list_title: "Convocatórias",
    docs_title: "Documentação oficial",
    docs_text: "Acesso à documentação oficial da convocatória (regulamento e inscrição).",
    btn_bases: "Regulamento (PDF)",
    btn_form: "Inscrição (PDF)",
    pill_intl: "Convocatória inicial",
    pill_pdf: "Documentação em PDF",
    reg_title: "Inscrição",
    reg_text:
      "A participação estará aberta de acordo com o regulamento oficial de cada convocatória.",
    poster_caption:
      "Cartaz do I Concurso Internacional de Doçaria Monástica Conventual DULCESOR"
  },

  /* =====================================================
     FRANÇAIS
  ===================================================== */
  fr: {
    nav_home: "Accueil",
    nav_association: "Association",
    nav_projects: "Projets",
    nav_contests: "Concours",
    nav_routes: "Routes monastiques",
    nav_sponsors: "Partenaires",
    nav_contact: "Contact",

    nav_inicio: "Accueil",
    nav_asociacion: "Association",
    nav_proyectos: "Projets",
    nav_concursos: "Concours",
    nav_rutas: "Routes monastiques",
    nav_patrocinadores: "Partenaires",
    nav_contacto: "Contact",

    brand_sub: "Pâtisserie monastique conventuelle",

    contests_title: "Concours",
    contests_subtitle: "Appels culturels et gastronomiques portés par l’Association Culturelle DULCESOR.",

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
    contests_docs_text: "Accès aux documents officiels (règlement et formulaire).",
    contests_btn_bases: "Règlement (PDF)",
    contests_btn_form: "Formulaire (PDF)",
    contests_pill_pdf: "Documentation PDF",

    contests_poster_caption:
      "Affiche du 1er Concours International de Pâtisserie Monastique Conventuelle DULCESOR",

    CONTESTS_TITLE: "Concours",
    CONTESTS_FRAME_TITLE: "Cadre général",
    CONTESTS_FEATURED_TITLE: "Appel à participation",
    CONTESTS_REG_TITLE: "Inscription",
    CONTESTS_DOCS_TITLE: "Documentation officielle",
    CONTESTS_BTN_BASES: "Règlement (PDF)",
    CONTESTS_BTN_FORM: "Formulaire (PDF)",
    CONTESTS_PILL_INITL: "Appel initial",
    CONTESTS_PILL_PDF: "Documentation PDF",
    CONTESTS_IN_PREP: "En préparation",

    frame_title: "Cadre général",
    frame_text:
      "L’Association Culturelle DULCESOR organise des concours culturels et gastronomiques pour préserver et promouvoir la pâtisserie monastique conventuelle.",
    in_prep: "En préparation",
    list_title: "Appels",
    docs_title: "Documentation officielle",
    docs_text: "Accès aux documents officiels (règlement et formulaire).",
    btn_bases: "Règlement (PDF)",
    btn_form: "Formulaire (PDF)",
    pill_intl: "Appel initial",
    pill_pdf: "Documentation PDF",
    reg_title: "Inscription",
    reg_text:
      "La participation sera ouverte conformément au règlement officiel de chaque appel.",
    poster_caption:
      "Affiche du 1er Concours International de Pâtisserie Monastique Conventuelle DULCESOR"
  },

  /* =====================================================
     ITALIANO
  ===================================================== */
  it: {
    nav_home: "Home",
    nav_association: "Associazione",
    nav_projects: "Progetti",
    nav_contests: "Concorsi",
    nav_routes: "Percorsi monastici",
    nav_sponsors: "Sponsor",
    nav_contact: "Contatti",

    nav_inicio: "Home",
    nav_asociacion: "Associazione",
    nav_proyectos: "Progetti",
    nav_concursos: "Concorsi",
    nav_rutas: "Percorsi monastici",
    nav_patrocinadores: "Sponsor",
    nav_contacto: "Contatti",

    brand_sub: "Pasticceria monastica conventuale",

    contests_title: "Concorsi",
    contests_subtitle: "Bandi culturali e gastronomici promossi dall’Associazione Culturale DULCESOR.",

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

    CONTESTS_TITLE: "Concorsi",
    CONTESTS_FRAME_TITLE: "Quadro generale",
    CONTESTS_FEATURED_TITLE: "Bando in evidenza",
    CONTESTS_REG_TITLE: "Iscrizione",
    CONTESTS_DOCS_TITLE: "Documentazione ufficiale",
    CONTESTS_BTN_BASES: "Regolamento (PDF)",
    CONTESTS_BTN_FORM: "Modulo (PDF)",
    CONTESTS_PILL_INITL: "Bando iniziale",
    CONTESTS_PILL_PDF: "Documentazione PDF",
    CONTESTS_IN_PREP: "In preparazione",

    frame_title: "Quadro generale",
    frame_text:
      "L’Associazione Culturale DULCESOR promuove concorsi culturali e gastronomici per preservare e valorizzare la pasticceria monastica conventuale.",
    in_prep: "In preparazione",
    list_title: "Bandi",
    docs_title: "Documentazione ufficiale",
    docs_text: "Accesso ai documenti ufficiali (regolamento e modulo).",
    btn_bases: "Regolamento (PDF)",
    btn_form: "Modulo (PDF)",
    pill_intl: "Bando iniziale",
    pill_pdf: "Documentazione PDF",
    reg_title: "Iscrizione",
    reg_text:
      "La partecipazione sarà aperta secondo il regolamento ufficiale di ciascun bando.",
    poster_caption:
      "Locandina del 1° Concorso Internazionale di Pasticceria Monastica Conventuale DULCESOR"
  }
};

/* =====================================================
   Idioma activo + render
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
