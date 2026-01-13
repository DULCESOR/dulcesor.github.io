// i18n.js
(() => {
  const I18N = {
    es: {
      // Brand / Nav
      brand_sub: "ASOCIACIÓN CULTURAL",
      nav_inicio: "INICIO",
      nav_asociacion: "ASOCIACIÓN",
      nav_proyectos: "PROYECTOS",
      nav_concursos: "CONCURSOS",
      nav_rutas: "RUTAS MONACALES",
      nav_patrocinadores: "PATROCINADORES",
      nav_contacto: "CONTACTO",

      // Contacto (cuerpo)
      c_title: "CONTACTO",
      c_subtitle: "Para información institucional, colaboraciones culturales y consultas generales.",
      c_card_title: "Contacto institucional",
      c_lbl_general: "Mail general",
      c_lbl_concurso: "Concurso",
      c_lbl_contacto: "Contacto",
      c_lbl_dir: "Dirección",
      c_addr: "Plaza Santa Ana 2 · 47001 Valladolid (España)",
      c_note: "Nota: No se facilita teléfono en esta fase. La asociación se encuentra en proceso de inscripción."
    },

    en: {
      brand_sub: "CULTURAL ASSOCIATION",
      nav_inicio: "HOME",
      nav_asociacion: "ASSOCIATION",
      nav_proyectos: "PROJECTS",
      nav_concursos: "CONTESTS",
      nav_rutas: "MONASTIC ROUTES",
      nav_patrocinadores: "SPONSORS",
      nav_contacto: "CONTACT",

      c_title: "CONTACT",
      c_subtitle: "For institutional information, cultural collaborations and general enquiries.",
      c_card_title: "Institutional contact",
      c_lbl_general: "General email",
      c_lbl_concurso: "Contest",
      c_lbl_contacto: "Contact",
      c_lbl_dir: "Address",
      c_addr: "Plaza Santa Ana 2 · 47001 Valladolid (Spain)",
      c_note: "Note: No phone number is provided at this stage. The association is in the registration process."
    },

    pt: {
      brand_sub: "ASSOCIAÇÃO CULTURAL",
      nav_inicio: "INÍCIO",
      nav_asociacion: "ASSOCIAÇÃO",
      nav_proyectos: "PROJETOS",
      nav_concursos: "CONCURSOS",
      nav_rutas: "ROTAS MONÁSTICAS",
      nav_patrocinadores: "PATROCINADORES",
      nav_contacto: "CONTACTO",

      c_title: "CONTACTO",
      c_subtitle: "Para informação institucional, colaborações culturais e questões gerais.",
      c_card_title: "Contacto institucional",
      c_lbl_general: "Email geral",
      c_lbl_concurso: "Concurso",
      c_lbl_contacto: "Contacto",
      c_lbl_dir: "Endereço",
      c_addr: "Plaza Santa Ana 2 · 47001 Valladolid (Espanha)",
      c_note: "Nota: Não é disponibilizado telefone nesta fase. A associação está em processo de inscrição."
    },

    fr: {
      brand_sub: "ASSOCIATION CULTURELLE",
      nav_inicio: "ACCUEIL",
      nav_asociacion: "ASSOCIATION",
      nav_proyectos: "PROJETS",
      nav_concursos: "CONCOURS",
      nav_rutas: "ITINÉRAIRES MONASTIQUES",
      nav_patrocinadores: "PARTENAIRES",
      nav_contacto: "CONTACT",

      c_title: "CONTACT",
      c_subtitle: "Pour toute information institutionnelle, collaborations culturelles et demandes générales.",
      c_card_title: "Contact institutionnel",
      c_lbl_general: "Email général",
      c_lbl_concurso: "Concours",
      c_lbl_contacto: "Contact",
      c_lbl_dir: "Adresse",
      c_addr: "Plaza Santa Ana 2 · 47001 Valladolid (Espagne)",
      c_note: "Note : aucun téléphone n’est communiqué à ce stade. L’association est en cours d’inscription."
    },

    it: {
      brand_sub: "ASSOCIAZIONE CULTURALE",
      nav_inicio: "HOME",
      nav_asociacion: "ASSOCIAZIONE",
      nav_proyectos: "PROGETTI",
      nav_concursos: "CONCORSI",
      nav_rutas: "PERCORSI MONASTICI",
      nav_patrocinadores: "SPONSOR",
      nav_contacto: "CONTATTI",

      c_title: "CONTATTI",
      c_subtitle: "Per informazioni istituzionali, collaborazioni culturali e richieste generali.",
      c_card_title: "Contatto istituzionale",
      c_lbl_general: "Email generale",
      c_lbl_concurso: "Concorso",
      c_lbl_contacto: "Contatti",
      c_lbl_dir: "Indirizzo",
      c_addr: "Plaza Santa Ana 2 · 47001 Valladolid (Spagna)",
      c_note: "Nota: non viene fornito un numero di telefono in questa fase. L’associazione è in fase di iscrizione."
    }
  };

  function applyLang(lang) {
    const dict = I18N[lang] || I18N.es;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (typeof dict[key] === "string") el.innerHTML = dict[key];
    });

    document.querySelectorAll(".langBtn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    try { localStorage.setItem("dulcesor_lang", lang); } catch (e) {}
  }

  function getSavedLang() {
    try { return localStorage.getItem("dulcesor_lang") || "es"; } catch (e) { return "es"; }
  }

  // API pública
  window.DULCESOR = window.DULCESOR || {};
  window.DULCESOR.applyLang = applyLang;
  window.DULCESOR.getSavedLang = getSavedLang;
})();
