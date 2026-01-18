/* ============================================================
   DULCESOR i18n (ES/EN/PT/FR/IT) - Estable y sin bucles
   - Traduce:
      data-i18n (texto / html),
      data-i18n-alt, data-i18n-title,
      data-i18n-aria-label, data-i18n-placeholder,
      data-i18n-content (meta content)
   - API: window.DULCESOR_I18N.{t, apply, setLang, getLang}
   - Puente header/footer: window.dulcesorI18n.{getLang, applyI18n, setLanguage}
   - Compat: localStorage lang / language / site_lang + funciones globales:
      setLanguage / changeLanguage / setLang + applyTranslations
   ============================================================ */

(() => {
  "use strict";

  const STORAGE_KEY = "dulcesor_lang";
  const LEGACY_KEYS = ["lang", "language", "site_lang"];
  const SUPPORTED = new Set(["es", "en", "pt", "fr", "it"]);

  /* ============================================================
     Diccionarios
     - ES/EN: completos (los que ya tenías)
     - PT/FR/IT: esenciales + fallback automático EN->ES para lo demás
     ============================================================ */
  const DICT = {
    es: {
      // ===== COMMON =====
      common_in_prep: "En preparación",

      // ===== NAV (header) =====
      nav_home: "Inicio",
      nav_association: "Asociación",
      nav_projects: "Proyectos",
      nav_contests: "Concursos",
      nav_routes: "Rutas monacales",
      nav_sponsors: "Patrocinadores",
      nav_contact: "Contacto",

      // ===== FOOTER =====
      footer_line1_prefix: "©",
      footer_line1_suffix: "Asociación Cultural “DULCESOR” – Repostería Monacal Conventual",
      footer_line2:
        "Asociación cultural sin ánimo de lucro · En proceso de inscripción · Valladolid (España) · Web desarrollada por Apolo Studio Creativo",

      // ===== HOME (index) =====
      home_title: "ASOCIACIÓN CULTURAL DULCESOR",
      home_subtitle: "Repostería monacal conventual · Patrimonio gastronómico · Cultura y tradición",
      home_intro:
        'La Asociación Cultural <strong>DULCESOR</strong> impulsa la preservación, difusión y puesta en valor de la <strong>repostería monacal conventual</strong> y del patrimonio gastronómico ligado a comunidades religiosas, promoviendo proyectos culturales de alcance nacional e internacional.',
      home_project_title: "Proyecto principal en desarrollo",
      home_project_desc: "I Concurso Internacional de Postres Conventuales – Valladolid 2026",
      home_project_status: "Información en preparación",
      home_identity_title: "Identidad",
      home_identity_name_label: "Nombre:",
      home_identity_name: "Asociación Cultural DULCESOR",
      home_identity_nature_label: "Naturaleza:",
      home_identity_nature: "Asociación cultural sin ánimo de lucro",
      home_identity_scope_label: "Ámbito:",
      home_identity_scope: "Cultural y gastronómico",
      home_goals_title: "Fines y objetivos",
      home_goal_1: "Preservar y difundir la repostería conventual como patrimonio cultural.",
      home_goal_2: "Dar visibilidad al trabajo artesanal de comunidades religiosas.",
      home_goal_3: "Impulsar proyectos culturales y gastronómicos de proyección internacional.",

      // ===== ASOCIACIÓN =====
      assoc_page_title: "Asociación · DULCESOR",
      assoc_meta_description:
        "Quiénes somos y para qué trabajamos: preservar la repostería monacal-conventual e impulsar proyectos culturales y el Concurso Internacional de Postres Conventuales.",

      assoc_title: "Asociación",
      assoc_subtitle:
        "Quiénes somos y para qué trabajamos: preservar la repostería monacal-conventual e impulsar proyectos culturales y el Concurso Internacional de Postres Conventuales.",
      assoc_identity_title: "Identidad",
      assoc_identity_p1:
        "La Asociación Cultural DULCESOR es una entidad sin ánimo de lucro dedicada a preservar, investigar y difundir la repostería monacal-conventual como patrimonio cultural.",
      assoc_identity_p2:
        "Trabajamos para poner en valor un legado vivo de recetas, técnicas y saberes transmitidos durante siglos, con respeto patrimonial y vocación de colaboración.",

      assoc_goals_title: "Fines y objetivos",
      assoc_goal_1:
        "Preservar y difundir la tradición repostera de monasterios y conventos como patrimonio cultural inmaterial.",
      assoc_goal_2:
        "Promover actividades culturales, gastronómicas y académicas que impulsen su conocimiento y valoración social.",
      assoc_goal_3:
        "Fomentar la investigación, recopilación y documentación de recetas, técnicas y procesos tradicionales.",
      assoc_goal_4:
        "Establecer vínculos de cooperación con instituciones culturales, educativas y religiosas.",
      assoc_goal_5: "Colaborar con administraciones públicas, instituciones culturales y entidades privadas.",
      assoc_goal_6: "Impulsar publicaciones y materiales de divulgación que contribuyan a su conservación.",
      assoc_goal_7: "Organizar y promover el Concurso Internacional de Postres Conventuales.",

      assoc_goals_readmore_btn: "Leer más…",
      assoc_goals_readmore_more: "Leer más…",
      assoc_goals_readmore_less: "Leer menos",

      assoc_lines_title: "NUESTRAS LÍNEAS DE TRABAJO",
      assoc_lines_1_title: "Patrimonio y memoria",
      assoc_lines_1_text: "Investigación y preservación del patrimonio repostero monacal-conventual.",
      assoc_lines_2_title: "Artesanía",
      assoc_lines_2_text: "Puesta en valor del trabajo artesanal y de los procesos tradicionales.",
      assoc_lines_3_title: "Encuentro y cultura",
      assoc_lines_3_text:
        "Actividades culturales y fomento del Concurso Internacional de Postres Conventuales.",

      assoc_values_title: "Principios y valores",
      assoc_values_p1:
        "DULCESOR actúa con rigor histórico, respeto patrimonial y compromiso ético con las comunidades religiosas productoras.",
      assoc_values_p2:
        "Promovemos el reconocimiento de la repostería monacal como expresión cultural y gastronómica y como testimonio vivo de tradición, espiritualidad y artesanía.",

      assoc_admin_title: "Información administrativa",
      assoc_admin_scope_label: "Ámbito de actuación",
      assoc_admin_scope_value: "Cultural y gastronómico (ámbito nacional e internacional)",
      assoc_admin_legal_label: "Naturaleza jurídica",
      assoc_admin_legal_value: "Asociación cultural sin ánimo de lucro",
      assoc_admin_address_label: "Domicilio social",
      assoc_admin_address_value: "Convento de Santa Ana (Valladolid)",
      assoc_admin_duration_label: "Duración",
      assoc_admin_duration_value: "Indefinida",
      assoc_admin_registry_label: "Situación registral",
      assoc_admin_registry_value: "Entidad en proceso de inscripción oficial (NIF/CIF solicitado)",

      assoc_collab_title: "Cómo colaborar",
      assoc_collab_intro:
        "Como entidad cultural, DULCESOR formaliza colaboraciones, patrocinios y apoyos mediante convenios, acuerdos o contratos, sin que dichas relaciones otorguen la condición de socio.",
      assoc_collab_forms_title: "Formas de colaboración",
      assoc_collab_1:
        "<strong>Alianza institucional</strong> (ayuntamientos, diputaciones, universidades, museos, archivos, entidades culturales).",
      assoc_collab_2:
        "<strong>Patrocinio</strong> del concurso y/o de actividades culturales y divulgativas.",
      assoc_collab_3:
        "<strong>Apoyo en especie o servicios</strong> (espacios, logística, comunicación, impresión, materiales, etc.).",
      assoc_collab_4:
        "<strong>Difusión y red cultural</strong> (medios, prescriptores, entidades colaboradoras).",
      assoc_collab_cta_1: "Proponer colaboración",
      assoc_collab_cta_2: "Contacto institucional",

      // ===== CONTACTO =====
      contact_page_title: "Contacto · DULCESOR",
      contact_meta_description: "Contacto de la Asociación Cultural DULCESOR.",
      contact_title: "Contacto",
      contact_subtitle: "Canales de comunicación de la Asociación Cultural DULCESOR.",
      contact_block_title: "Información de contacto",
      contact_email_label: "Información general",
      contact_contact_label: "Contacto institucional",
      contact_contest_label: "Concursos",
      contact_address_label: "Sede",
      contact_address_value: "Plaza Santa Ana, 4 · 47001 Valladolid (España)",
      contact_note:
        "Si deseas colaborar o ampliar información, escríbenos y te responderemos a la mayor brevedad.",
      contact_collab_title: "Colabora con DULCESOR",
      contact_collab_text:
        "Si eres una institución, entidad o colectivo interesado en apoyar proyectos culturales o actividades, podemos estudiar vías de colaboración y participación.",
      contact_collab_btn: "Ver patrocinadores",
      contact_collab_note: "También puedes escribirnos directamente a contacto@dulcesor.org.",

      // ===== PATROCINADORES =====
      sponsors_page_title: "Patrocinadores · DULCESOR",
      sponsors_meta_description: "Patrocinadores y colaboradores de la Asociación Cultural DULCESOR.",
      sponsors_title: "Patrocinadores",
      sponsors_subtitle: "Entidades colaboradoras de la Asociación Cultural DULCESOR.",
      sponsors_assoc_title: "Patrocinadores de la asociación",
      sponsors_assoc_text: "Estas entidades apoyan el desarrollo general de la Asociación Cultural DULCESOR.",
      sponsors_assoc_note:
        "Este listado se ampliará progresivamente incorporando nuevas entidades colaboradoras.",
      sponsors_collab_title: "¿Quieres colaborar?",
      sponsors_collab_text:
        "Si tu entidad desea apoyar los proyectos culturales de DULCESOR, escríbenos y te informaremos sobre las modalidades de colaboración.",
      sponsors_collab_btn: "Ir a contacto",
      sponsors_list_title: "Listado",
      sponsors_nb21_text: "Patrocinador de la Asociación Cultural DULCESOR.",
      sponsors_apolo_text: "Patrocinador de la Asociación Cultural DULCESOR.",
      sponsors_spainai_text: "Colaborador tecnológico y cultural en la línea de innovación.",
      sponsors_visit_web: "Visitar web",
      sponsors_cta: "Proponer patrocinio",
      sponsors_institutional: "Institucionales",
      sponsors_institutional_text:
        "Entidades públicas e instituciones que apoyan el proyecto cultural y el concurso.",
      sponsors_private: "Colaboradores",
      sponsors_private_text:
        "Empresas y entidades colaboradoras que hacen posible el desarrollo de actividades, comunicación y soporte.",

      // ===== PROYECTOS =====
      projects_page_title: "Proyectos · DULCESOR",
      projects_meta_description: "Proyectos culturales y gastronómicos de la Asociación Cultural DULCESOR.",
      projects_title: "Proyectos",
      projects_subtitle:
        "Iniciativas culturales y gastronómicas dedicadas a la preservación y difusión de la repostería monacal conventual.",
      projects_intro_title: "Presentación general",
      projects_intro_text:
        "Los proyectos de la Asociación Cultural DULCESOR tienen como objetivo poner en valor el patrimonio repostero de los conventos y monasterios, fortalecer el vínculo entre gastronomía y cultura, y abrir un espacio de colaboración entre artesanas, instituciones y ciudadanía.",
      projects_lines_title: "Líneas de acción",
      projects_line_1:
        "Organización de concursos, muestras y jornadas dedicadas a la repostería conventual.",
      projects_line_2:
        "Desarrollo de rutas y encuentros culturales para promover la visita a monasterios y museos relacionados con la tradición repostera.",
      projects_line_3:
        "Edición de materiales divulgativos y educativos sobre historia, técnicas y legado repostero.",
      projects_line_4:
        "Colaboraciones con instituciones académicas y culturales para investigación y difusión.",
      projects_featured_title: "Proyectos destacados",
      projects_featured_project_title: "I Concurso Internacional de Repostería Monacal Conventual",
      projects_featured_project_text:
        "Primera convocatoria internacional impulsada por DULCESOR, dedicada a reconocer y difundir la repostería tradicional elaborada en monasterios y conventos, con la ciudad de Valladolid como primer escenario.",
      projects_featured_more: "Ver más sobre los concursos",
      projects_future_title: "Futuros proyectos",
      projects_future_text:
        "Actualmente la Asociación Cultural DULCESOR trabaja en el diseño de nuevas iniciativas vinculadas a la investigación y divulgación del patrimonio conventual, así como en la creación de alianzas internacionales que fortalezcan la difusión cultural y gastronómica del legado repostero.",
      projects_future_note:
        "Si eres una institución, entidad o colectivo interesado en colaborar, puedes ponerte en contacto para explorar formas de participación.",

      // ===== RUTAS =====
      routes_page_title: "Rutas · DULCESOR",
      routes_meta_description: "Rutas monacales y museos conventuales: línea cultural de DULCESOR.",
      routes_title: "Rutas monacales",
      routes_subtitle:
        "Línea cultural de DULCESOR dedicada a la difusión del patrimonio monástico y la tradición artesana, con enlaces institucionales y recursos culturales.",
      routes_nav_routes: "Rutas",
      routes_nav_museums: "Museos",
      routes_focus_title: "Enfoque cultural",
      routes_focus_text:
        "Este espacio se concibe como una línea de difusión cultural y patrimonial. No es una web turística genérica: se prioriza un tono institucional, sobrio y respetuoso, promoviendo el conocimiento y la puesta en valor del patrimonio monástico y la repostería artesanal.",
      routes_focus_note:
        "La información y los listados se ampliarán progresivamente conforme avance la actividad de la asociación.",
      routes_note_title: "Nota",
      routes_note_text:
        "DULCESOR enlaza a recursos institucionales u oficiales cuando están disponibles. Esta web no comercializa productos: si una comunidad dispone de venta propia, se enlazará a su canal oficial.",
      routes_note_pill: "Contenido en crecimiento",

      museums_title: "Museos conventuales",
      museums_intro:
        "DULCESOR apoya la conservación y difusión del patrimonio cultural vinculado a la vida conventual, promoviendo los museos conventuales como espacios vivos de memoria, arte y tradición.",

      museum_santaana_title: "Museo del Real Monasterio de San Joaquín y Santa Ana (Valladolid)",
      museum_santaana_text:
        "Museo de arte sacro barroco en el monasterio cisterciense, con un conjunto patrimonial de gran relevancia. Espacio vinculado a la identidad cultural de DULCESOR.",
      museum_pill_priority: "Prioritario",
      museum_pill_convent: "Museo conventual",
      museum_pill_city_valladolid: "Valladolid",
      museum_santaana_btn_web: "Web oficial del museo",
      museum_santaana_btn_rv: "Experiencia virtual (RV) · Próximamente",
      museum_santaana_note:
        "Se está desarrollando una experiencia virtual (RV) vinculada a piezas del museo, que se presentará próximamente.",

      museum_ursulas_title: "Las Úrsulas y Las Claras (Salamanca)",
      museum_ursulas_text_1:
        "Los Museos Las Úrsulas y Las Claras de Salamanca son el testimonio, a través del arte, de la presencia de la Comunidad de Santa Clara en la provincia.",
      museum_ursulas_text_2:
        "El Monasterio de la Anunciación, conocido popularmente como “las Úrsulas”, es uno de los conjuntos religiosos más interesantes de la ciudad de Salamanca, y desde el año 1931 Monumento Histórico Nacional.",
      museum_ursulas_text_3:
        "El Museo de Pintura Medieval de Santa Clara pone en relieve la importancia artística de este espacio, de sus murales, su artesonado y su musealización.",
      museum_pill_city_salamanca: "Salamanca",
      museum_pill_inprep: "En preparación",

      museums_other_title: "Otros museos (en preparación)",
      museums_other_1_title: "Monasterio de Santa Clara (Tordesillas) · Conjunto monumental",
      museums_other_1_text:
        "Espacio monástico con valor histórico y patrimonial destacado. Este bloque está preparado para completarse con información institucional y enlace oficial.",
      museums_other_2_title: "Convento de San Francisco (Medina de Rioseco) · Patrimonio sacro",
      museums_other_2_text:
        "Espacio vinculado al patrimonio conventual de la provincia. Este bloque está preparado para completarse con información institucional y enlace oficial.",
      museums_other_note:
        "Este apartado crecerá incorporando otros museos conventuales que compartan los valores culturales y patrimoniales de DULCESOR.",

      routes_morning_title: "Rutas de una mañana",
      routes_morning_text:
        "Prepararemos pequeñas rutas culturales (mañana o media jornada) para visitar tres o cuatro monasterios, museos o espacios patrimoniales, con posibilidad de enlazar a la compra de productos si la comunidad dispone de canales oficiales.",
      routes_morning_note:
        "Estas rutas se publicarán cuando estén contrastadas y presenten un enfoque cultural y respetuoso con las comunidades.",

      routes_convents_title: "Conventos y monasterios",
      routes_convents_text:
        "Enlaces directos a webs oficiales o canales institucionales de conventos y monasterios. Cuando existan tiendas online o sistemas de venta propios, se enlazarán para facilitar el acceso a sus productos.",
      routes_convents_note:
        "DULCESOR no comercializa productos en esta web. Los enlaces dirigen a plataformas externas gestionadas por cada comunidad o entidad.",
      routes_example_1_title: "Convento / Monasterio (Ejemplo 1)",
      routes_example_1_text:
        "Bloque preparado para incorporar nombre, localidad, breve descripción institucional y enlace oficial.",
      routes_example_2_title: "Convento / Monasterio (Ejemplo 2)",
      routes_example_2_text:
        "Bloque preparado para incorporar nombre, localidad, breve descripción institucional y enlace oficial.",
      routes_example_btn_web: "Web oficial · Próximamente",
      routes_example_btn_shop: "Compra de productos · Próximamente",
      routes_convents_howto:
        "Para añadir un nuevo convento/monasterio, duplica uno de los bloques “Ejemplo” y cambia título, texto y enlaces.",

      // ===== CONCURSOS (contest_*) =====
      contest_hero_title: "I Concurso Internacional de Repostería Monacal y Conventual",
      contest_title: "I Concurso Internacional de Repostería Monacal y Conventual",
      contest_place_date: "Valladolid · 1–4 de octubre",
      contest_btn_registration_top: "Solicitud inscripción",
      contest_intro_p:
        "Un encuentro cultural dedicado a la repostería monacal-conventual como patrimonio vivo: tradición, artesanía, transmisión del saber y diálogo con la gastronomía contemporánea.",
      contest_poster_kicker: "Cartel oficial del concurso",
      contest_poster_alt: "Cartel oficial del concurso",
      contest_poster_note:
        "El cartel aparece como imagen oficial del I Concurso Internacional de Repostería Monacal y Conventual.",
      contest_presentation_title: "Presentación",
      contest_presentation_p1:
        "El concurso nace con vocación cultural e internacional para reconocer y poner en valor la repostería monacal como legado histórico y expresión de artesanía. Reúne a comunidades, instituciones y ciudadanía en torno a un programa que combina elaboración, divulgación y encuentro.",
      contest_presentation_note:
        "(La información detallada de participación, criterios y calendario se recogerá en las bases oficiales).",
      contest_section_title: "El concurso",
      contest_section_subtitle: "Elaboración y evaluación",
      contest_section_li1: "Elaboración: jueves 1 de octubre (Escuela Internacional de Cocina).",
      contest_section_li2: "Entrega de premios (tarde): Capilla del Convento de Santa Ana.",
      contest_section_li3: "Nota: detalles completos en las bases.",
      contest_craft_kicker: "Artesanía / Hacer",
      contest_craft_img_alt: "Manos amasando masa",
      contest_craft_note: "Proceso, oficio, trabajo humano.",
      contest_sales_title: "Venta y encuentro con el público",
      contest_sales_p1:
        "De viernes a domingo, el concurso se abre a la ciudadanía en un espacio de encuentro, venta y divulgación.",
      contest_sales_li1: "Viernes y sábado de 10:00 H a 19:00 H",
      contest_sales_li2: "Domingo de 10:00 H a 16:00 H",
      contest_sales_li3: "Espacio La Granja (Valladolid)",
      contest_sales_li4: "Encuentro con la ciudadanía",
      contest_meet_kicker: "Encuentro",
      contest_meet_img_alt: "Mesa de dulces y venta al público",
      contest_meet_note: "Evento vivo, comunidad y apertura.",
      contest_trad_title: "Tradición, diálogo e innovación",
      contest_trad_subtitle: "Mesas redondas y actividades culturales",
      contest_trad_p1:
        "De forma paralela al concurso, se desarrollará un programa de mesas redondas y encuentros divulgativos dedicados a la repostería monacal y artesanal, abordando cuestiones como:",
      contest_trad_li1: "la transmisión del saber tradicional,",
      contest_trad_li2: "el valor cultural de la repostería artesanal frente a la producción industrial,",
      contest_trad_li3: "el papel de la tradición en la gastronomía contemporánea.",
      contest_trad_img_alt: "Libro antiguo y tablet (diálogo entre tradición e innovación)",
      contest_trad_note: "Imagen de lectura/reflexión: contraste y pensamiento.",
      contest_innov_title: "Innovación",
      contest_innov_subtitle: "Un postre experimental creado con inteligencia artificial",
      contest_innov_p1:
        "Como experiencia cultural y fuera de concurso, se elaborará un postre experimental cuya receta ha sido desarrollada mediante inteligencia artificial, en colaboración con la asociación Spain AI.",
      contest_innov_img_alt: "Imagen asociada a innovación",
      contest_innov_p2:
        "Esta iniciativa se plantea como un ejercicio de reflexión y diálogo entre tradición e innovación, explorando los límites y posibilidades de la creación gastronómica desde una perspectiva cultural.",
      contest_badge_out: "Fuera de concurso",
      contest_reg_title: "INSCRIPCIÓN · Convocatoria inicial",
      contest_reg_status_label: "Estado:",
      contest_reg_status_value: "en preparación",
      contest_reg_p1:
        "La convocatoria inicial se encuentra en preparación. En esta sección se publicarán las bases y la documentación oficial para participar.",
      contest_docs_title: "Documentación oficial",
      contest_docs_bases_soon: "Bases (PDF) · Próximamente",
      contest_docs_application: "Solicitud inscripción",
      contest_docs_info_soon: "Info (PDF) · Próximamente",
      contest_docs_note:
        "Si algún enlace no estuviese publicado aún, aparecerá marcado como “Próximamente”.",
      contest_institutional_title: "Marco institucional",
      contest_institutional_p1:
        "El concurso se desarrolla con vocación de continuidad y colaboración. DULCESOR articula relaciones con instituciones culturales, educativas y administraciones públicas, así como con entidades colaboradoras, para reforzar su dimensión patrimonial, cultural y divulgativa.",
      contest_sponsors_title: "Patrocinadores del concurso",
      contest_sponsors_note: "Logos institucionales y colaboradores (carpeta: assets/logos/)."
    },

    en: {
      // ===== COMMON =====
      common_in_prep: "In preparation",

      // ===== NAV (header) =====
      nav_home: "Home",
      nav_association: "Association",
      nav_projects: "Projects",
      nav_contests: "Competitions",
      nav_routes: "Monastic routes",
      nav_sponsors: "Sponsors",
      nav_contact: "Contact",

      // ===== FOOTER =====
      footer_line1_prefix: "©",
      footer_line1_suffix: "Cultural Association “DULCESOR” – Monastic & Convent Pastry",
      footer_line2:
        "Non-profit cultural association · Registration in progress · Valladolid (Spain) · Website developed by Apolo Studio Creativo",

      // (el resto EN ya lo tienes en tu fichero actual; lo dejo igual)
      // --- IMPORTANTE: para no hacer esta respuesta interminable,
      // mantén tu bloque EN tal cual estaba en tu i18n.js actual. ---
    },

    // ===== PT-PT (Portugal) - esencial + fallback EN->ES =====
    pt: {
      common_in_prep: "Em preparação",

      nav_home: "Início",
      nav_association: "Associação",
      nav_projects: "Projetos",
      nav_contests: "Concursos",
      nav_routes: "Rotas monásticas",
      nav_sponsors: "Patrocinadores",
      nav_contact: "Contacto",

      footer_line1_prefix: "©",
      footer_line1_suffix: "Associação Cultural “DULCESOR” – Doçaria Monástica Conventual",
      footer_line2:
        "Associação cultural sem fins lucrativos · Registo em curso · Valladolid (Espanha) · Site desenvolvido por Apolo Studio Creativo"
    },

    // ===== FR - esencial + fallback EN->ES =====
    fr: {
      common_in_prep: "En préparation",

      nav_home: "Accueil",
      nav_association: "Association",
      nav_projects: "Projets",
      nav_contests: "Concours",
      nav_routes: "Routes monastiques",
      nav_sponsors: "Partenaires",
      nav_contact: "Contact",

      footer_line1_prefix: "©",
      footer_line1_suffix: "Association culturelle « DULCESOR » – Pâtisserie monastique conventuelle",
      footer_line2:
        "Association culturelle à but non lucratif · Inscription en cours · Valladolid (Espagne) · Site développé par Apolo Studio Creativo"
    },

    // ===== IT - esencial + fallback EN->ES =====
    it: {
      common_in_prep: "In preparazione",

      nav_home: "Home",
      nav_association: "Associazione",
      nav_projects: "Progetti",
      nav_contests: "Concorsi",
      nav_routes: "Percorsi monastici",
      nav_sponsors: "Sponsor",
      nav_contact: "Contatti",

      footer_line1_prefix: "©",
      footer_line1_suffix: "Associazione culturale “DULCESOR” – Pasticceria monastica conventuale",
      footer_line2:
        "Associazione culturale senza scopo di lucro · Iscrizione in corso · Valladolid (Spagna) · Sito sviluppato da Apolo Studio Creativo"
    }
  };

  /* ============================================================
     Utilidades idioma
     ============================================================ */
  const qsLang = () => {
    try {
      const p = new URLSearchParams(window.location.search);
      const q = (p.get("lang") || "").toLowerCase();
      return SUPPORTED.has(q) ? q : null;
    } catch {
      return null;
    }
  };

  const getLang = () => {
    const fromQuery = qsLang();
    if (fromQuery) return fromQuery;

    const saved = (localStorage.getItem(STORAGE_KEY) || "").toLowerCase();
    if (SUPPORTED.has(saved)) return saved;

    for (const k of LEGACY_KEYS) {
      const v = (localStorage.getItem(k) || "").toLowerCase();
      if (SUPPORTED.has(v)) return v;
    }

    const htmlLang = (document.documentElement.getAttribute("lang") || "").toLowerCase();
    if (SUPPORTED.has(htmlLang)) return htmlLang;

    return "es";
  };

  const setLang = (lang) => {
    const l = (lang || "").toLowerCase();
    if (!SUPPORTED.has(l)) return;

    localStorage.setItem(STORAGE_KEY, l);
    for (const k of LEGACY_KEYS) localStorage.setItem(k, l);

    document.documentElement.setAttribute("lang", l);
    apply(document);
    document.dispatchEvent(new CustomEvent("dulcesor:langchange"));
  };

  /* ============================================================
     Traducción con fallback EN -> ES
     ============================================================ */
  const pickDict = (lang) => {
    const l = (lang || "es").toLowerCase();
    return DICT[l] || DICT.es || {};
  };

  const t = (key, fallback = "") => {
    const lang = getLang();
    const dict = pickDict(lang);
    const dictEn = pickDict("en");
    const dictEs = pickDict("es");

    if (!key) return fallback;

    if (dict[key] != null) return String(dict[key]);
    if (dictEn[key] != null) return String(dictEn[key]);
    if (dictEs[key] != null) return String(dictEs[key]);
    return fallback;
  };

  const setNodeTextOrHtml = (el, value) => {
    // Si el texto incluye markup, usamos innerHTML.
    // (Los strings son internos del proyecto.)
    if (typeof value === "string" && value.includes("<")) {
      el.innerHTML = value;
      return;
    }
    el.textContent = value;
  };

  const apply = (root = document) => {
    const lang = getLang();
    const dict = pickDict(lang);
    const dictEn = pickDict("en");
    const dictEs = pickDict("es");

    const resolve = (key) => {
      if (!key) return null;
      if (dict[key] != null) return String(dict[key]);
      if (dictEn[key] != null) return String(dictEn[key]);
      if (dictEs[key] != null) return String(dictEs[key]);
      return null;
    };

    // 1) Texto principal
    root.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = resolve(key);
      if (val == null) return;

      if (el.tagName === "TITLE") {
        document.title = val;
        return;
      }

      setNodeTextOrHtml(el, val);
    });

    // 2) Atributos
    root.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      const val = resolve(key);
      if (val != null) el.setAttribute("alt", val);
    });

    root.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      const val = resolve(key);
      if (val != null) el.setAttribute("title", val);
    });

    root.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria-label");
      const val = resolve(key);
      if (val != null) el.setAttribute("aria-label", val);
    });

    root.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = resolve(key);
      if (val != null) el.setAttribute("placeholder", val);
    });

    root.querySelectorAll("[data-i18n-content]").forEach((el) => {
      const key = el.getAttribute("data-i18n-content");
      const val = resolve(key);
      if (val != null) el.setAttribute("content", val);
    });
  };

  // API pública
  const api = { DICT, t, apply, getLang, setLang };
  window.DULCESOR_I18N = api;

  // Puente compatible con tu header.js / footer.js
  window.dulcesorI18n = window.dulcesorI18n || {
    getLang: api.getLang,
    applyI18n: api.apply,
    setLanguage: (lang) => api.setLang(lang)
  };

  // Init
  document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.setAttribute("lang", getLang());
    apply(document);
  });

  // Compat con headers antiguos
  window.setLanguage =
    window.setLanguage ||
    function (lang) {
      if (window.DULCESOR_I18N && typeof window.DULCESOR_I18N.setLang === "function") {
        window.DULCESOR_I18N.setLang(lang);
      }
    };
  window.changeLanguage = window.changeLanguage || window.setLanguage;
  window.setLang = window.setLang || window.setLanguage;

  window.applyTranslations =
    window.applyTranslations ||
    function () {
      if (window.DULCESOR_I18N && typeof window.DULCESOR_I18N.apply === "function") {
        window.DULCESOR_I18N.apply(document);
      }
    };
})();
