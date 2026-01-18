/* ============================================================
   DULCESOR i18n (ES/EN/PT/FR/IT) - Protocolo único (COMPAT HEADER)
   - Traduce: data-i18n (texto), data-i18n-alt, data-i18n-title,
              data-i18n-aria-label, data-i18n-placeholder,
              data-i18n-content (meta content)
   - Re-aplica al inyectar header/footer (MutationObserver)
   - Expone API: window.DULCESOR_I18N.{t, apply, setLang, getLang}
   - COMPAT: funciona con headers antiguos SIN tocarlos:
       * Lee/escribe también localStorage: lang / language / site_lang
       * Define funciones globales: setLanguage / changeLanguage / setLang
         y applyTranslations
   ============================================================ */

(() => {
  "use strict";

  // Clave nueva (la que usa este i18n)
  const STORAGE_KEY = "dulcesor_lang";
  // Claves antiguas típicas que puede usar tu header.js
  const LEGACY_KEYS = ["lang", "language", "site_lang"];
  const SUPPORTED = new Set(["es", "en", "pt", "fr", "it"]);

  // ---------- Diccionarios ----------
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

      // Botón (compatibilidad antigua)
      assoc_goals_readmore_btn: "Leer más…",
      // Protocolo nuevo (recomendado)
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
      contact_note: "Si deseas colaborar o ampliar información, escríbenos y te responderemos a la mayor brevedad.",
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
      sponsors_assoc_note: "Este listado se ampliará progresivamente incorporando nuevas entidades colaboradoras.",
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
      projects_meta_description:
        "Proyectos culturales y gastronómicos de la Asociación Cultural DULCESOR.",
      projects_title: "Proyectos",
      projects_subtitle:
        "Iniciativas culturales y gastronómicas dedicadas a la preservación y difusión de la repostería monacal conventual.",
      projects_intro_title: "Presentación general",
      projects_intro_text:
        "Los proyectos de la Asociación Cultural DULCESOR tienen como objetivo poner en valor el patrimonio repostero de los conventos y monasterios, fortalecer el vínculo entre gastronomía y cultura, y abrir un espacio de colaboración entre artesanas, instituciones y ciudadanía.",
      projects_lines_title: "Líneas de acción",
      projects_line_1: "Organización de concursos, muestras y jornadas dedicadas a la repostería conventual.",
      projects_line_2:
        "Desarrollo de rutas y encuentros culturales para promover la visita a monasterios y museos relacionados con la tradición repostera.",
      projects_line_3:
        "Edición de materiales divulgativos y educativos sobre historia, técnicas y legado repostero.",
      projects_line_4: "Colaboraciones con instituciones académicas y culturales para investigación y difusión.",
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
      contest_sponsors_note:
        "Logos institucionales y colaboradores (carpeta: assets/logos/)."
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

      // ===== HOME (index) =====
      home_title: "DULCESOR CULTURAL ASSOCIATION",
      home_subtitle: "Monastic & convent pastry · Culinary heritage · Culture and tradition",
      home_intro:
        'The cultural association <strong>DULCESOR</strong> promotes the preservation, dissemination and appreciation of <strong>monastic and convent pastry</strong> and the culinary heritage linked to religious communities, fostering cultural projects with national and international reach.',
      home_project_title: "Main project in development",
      home_project_desc: "1st International Convent Pastry Competition – Valladolid 2026",
      home_project_status: "Information in preparation",
      home_identity_title: "Identity",
      home_identity_name_label: "Name:",
      home_identity_name: "DULCESOR Cultural Association",
      home_identity_nature_label: "Legal form:",
      home_identity_nature: "Non-profit cultural association",
      home_identity_scope_label: "Scope:",
      home_identity_scope: "Cultural and gastronomic",
      home_goals_title: "Aims and objectives",
      home_goal_1: "Preserve and promote convent pastry-making as cultural heritage.",
      home_goal_2: "Give visibility to the artisanal work of religious communities.",
      home_goal_3: "Foster cultural and gastronomic projects with international reach.",

      // ===== ASOCIACIÓN =====
      assoc_page_title: "Association · DULCESOR",
      assoc_meta_description:
        "Who we are and what we work for: preserving monastic-convent pastry and promoting cultural projects and the International Convent Desserts Competition.",

      assoc_title: "Association",
      assoc_subtitle:
        "Who we are and what we work for: preserving monastic-convent pastry and promoting cultural projects and the International Convent Desserts Competition.",
      assoc_identity_title: "Identity",
      assoc_identity_p1:
        "DULCESOR Cultural Association is a non-profit entity devoted to preserving, researching and disseminating monastic-convent pastry as cultural heritage.",
      assoc_identity_p2:
        "We work to highlight a living legacy of recipes, techniques and know-how transmitted for centuries, with heritage respect and a collaborative vocation.",

      assoc_goals_title: "Aims and objectives",
      assoc_goal_1:
        "Preserve and promote the pastry tradition of monasteries and convents as intangible cultural heritage.",
      assoc_goal_2:
        "Promote cultural, gastronomic and academic activities that enhance knowledge and social appreciation.",
      assoc_goal_3:
        "Encourage research, collection and documentation of traditional recipes, techniques and processes.",
      assoc_goal_4:
        "Build cooperation links with cultural, educational and religious institutions.",
      assoc_goal_5: "Collaborate with public administrations, cultural institutions and private entities.",
      assoc_goal_6: "Promote publications and outreach materials that contribute to its preservation.",
      assoc_goal_7: "Organise and promote the International Convent Desserts Competition.",

      assoc_goals_readmore_btn: "Read more…",
      assoc_goals_readmore_more: "Read more…",
      assoc_goals_readmore_less: "Read less",

      assoc_lines_title: "OUR LINES OF WORK",
      assoc_lines_1_title: "Heritage and memory",
      assoc_lines_1_text: "Research and preservation of monastic-convent pastry heritage.",
      assoc_lines_2_title: "Craft",
      assoc_lines_2_text: "Highlighting artisanal work and traditional processes.",
      assoc_lines_3_title: "Community and culture",
      assoc_lines_3_text:
        "Cultural activities and promotion of the International Convent Desserts Competition.",

      assoc_values_title: "Principles and values",
      assoc_values_p1:
        "DULCESOR acts with historical rigor, heritage respect and ethical commitment to the producing religious communities.",
      assoc_values_p2:
        "We promote recognition of monastic pastry as a cultural and gastronomic expression and as a living testimony of tradition, spirituality and craftsmanship.",

      assoc_admin_title: "Administrative information",
      assoc_admin_scope_label: "Scope of action",
      assoc_admin_scope_value: "Cultural and gastronomic (national and international scope)",
      assoc_admin_legal_label: "Legal nature",
      assoc_admin_legal_value: "Non-profit cultural association",
      assoc_admin_address_label: "Registered address",
      assoc_admin_address_value: "Convent of Santa Ana (Valladolid)",
      assoc_admin_duration_label: "Duration",
      assoc_admin_duration_value: "Indefinite",
      assoc_admin_registry_label: "Registration status",
      assoc_admin_registry_value: "Entity in the process of official registration (NIF/CIF requested)",

      assoc_collab_title: "How to collaborate",
      assoc_collab_intro:
        "As a cultural entity, DULCESOR formalises collaborations, sponsorships and support through agreements or contracts, without granting membership status.",
      assoc_collab_forms_title: "Ways to collaborate",
      assoc_collab_1:
        "<strong>Institutional partnership</strong> (city councils, provincial councils, universities, museums, archives, cultural entities).",
      assoc_collab_2:
        "<strong>Sponsorship</strong> of the competition and/or cultural and outreach activities.",
      assoc_collab_3:
        "<strong>In-kind support or services</strong> (venues, logistics, communication, printing, materials, etc.).",
      assoc_collab_4:
        "<strong>Dissemination and cultural network</strong> (media, ambassadors, partner entities).",
      assoc_collab_cta_1: "Propose collaboration",
      assoc_collab_cta_2: "Institutional contact",

      // ===== CONTACTO =====
      contact_page_title: "Contact · DULCESOR",
      contact_meta_description: "Contact the DULCESOR Cultural Association.",
      contact_title: "Contact",
      contact_subtitle: "Communication channels of the DULCESOR Cultural Association.",
      contact_block_title: "Contact information",
      contact_email_label: "General information",
      contact_contact_label: "Institutional contact",
      contact_contest_label: "Competitions",
      contact_address_label: "Address",
      contact_address_value: "Plaza Santa Ana, 4 · 47001 Valladolid (Spain)",
      contact_note:
        "If you want to collaborate or request more information, write to us and we will reply as soon as possible.",
      contact_collab_title: "Collaborate with DULCESOR",
      contact_collab_text:
        "If you are an institution, entity or collective interested in supporting cultural projects or activities, we can explore ways of collaboration and participation.",
      contact_collab_btn: "View sponsors",
      contact_collab_note: "You can also write us directly at contacto@dulcesor.org.",

      // ===== PATROCINADORES =====
      sponsors_page_title: "Sponsors · DULCESOR",
      sponsors_meta_description: "Sponsors and collaborators of the DULCESOR Cultural Association.",
      sponsors_title: "Sponsors",
      sponsors_subtitle: "Partner entities of the DULCESOR Cultural Association.",
      sponsors_assoc_title: "Association sponsors",
      sponsors_assoc_text: "These entities support the overall development of the DULCESOR Cultural Association.",
      sponsors_assoc_note: "This list will progressively expand to include new partner entities.",
      sponsors_collab_title: "Want to collaborate?",
      sponsors_collab_text:
        "If your organisation would like to support DULCESOR’s cultural projects, write to us and we will inform you about collaboration options.",
      sponsors_collab_btn: "Go to contact",
      sponsors_list_title: "List",
      sponsors_nb21_text: "Sponsor of the DULCESOR Cultural Association.",
      sponsors_apolo_text: "Sponsor of the DULCESOR Cultural Association.",
      sponsors_spainai_text: "Technological and cultural partner in the innovation line.",
      sponsors_visit_web: "Visit website",
      sponsors_cta: "Propose sponsorship",
      sponsors_institutional: "Institutional",
      sponsors_institutional_text:
        "Public entities and institutions supporting the cultural project and the competition.",
      sponsors_private: "Collaborators",
      sponsors_private_text:
        "Companies and partner entities that make activities, communication and support possible.",

      // ===== PROYECTOS =====
      projects_page_title: "Projects · DULCESOR",
      projects_meta_description:
        "Cultural and gastronomic projects of the DULCESOR Cultural Association.",
      projects_title: "Projects",
      projects_subtitle:
        "Cultural and gastronomic initiatives devoted to preserving and disseminating monastic and convent pastry-making.",
      projects_intro_title: "General overview",
      projects_intro_text:
        "DULCESOR Cultural Association projects aim to highlight the pastry heritage of convents and monasteries, strengthen the link between gastronomy and culture, and create a space for collaboration between artisans, institutions and citizens.",
      projects_lines_title: "Lines of action",
      projects_line_1: "Organisation of competitions, exhibitions and sessions devoted to convent pastry-making.",
      projects_line_2:
        "Development of cultural routes and encounters to promote visits to monasteries and museums linked to pastry tradition.",
      projects_line_3:
        "Publishing outreach and educational materials about history, techniques and pastry legacy.",
      projects_line_4: "Collaborations with academic and cultural institutions for research and dissemination.",
      projects_featured_title: "Featured projects",
      projects_featured_project_title: "1st International Monastic & Convent Pastry Competition",
      projects_featured_project_text:
        "First international call promoted by DULCESOR, devoted to recognising and disseminating traditional pastry made in monasteries and convents, with the city of Valladolid as the first venue.",
      projects_featured_more: "Learn more about the competitions",
      projects_future_title: "Future projects",
      projects_future_text:
        "DULCESOR Cultural Association is currently designing new initiatives linked to research and dissemination of convent heritage, as well as creating international alliances that strengthen the cultural and gastronomic outreach of this pastry legacy.",
      projects_future_note:
        "If you are an institution, entity or collective interested in collaborating, you can get in touch to explore participation options.",

      // ===== RUTAS =====
      routes_page_title: "Routes · DULCESOR",
      routes_meta_description: "Monastic routes and convent museums: DULCESOR cultural line.",
      routes_title: "Monastic routes",
      routes_subtitle:
        "A DULCESOR cultural line devoted to disseminating monastic heritage and craft tradition, with institutional links and cultural resources.",
      routes_nav_routes: "Routes",
      routes_nav_museums: "Museums",
      routes_focus_title: "Cultural approach",
      routes_focus_text:
        "This space is conceived as a cultural and heritage dissemination line. It is not a generic tourism website: we prioritise an institutional, sober and respectful tone, promoting knowledge and appreciation of monastic heritage and artisanal pastry-making.",
      routes_focus_note:
        "Information and listings will progressively expand as the association’s activity advances.",
      routes_note_title: "Note",
      routes_note_text:
        "DULCESOR links to institutional or official resources when available. This website does not sell products: if a community has its own sales channel, we will link to its official channel.",
      routes_note_pill: "Growing content",

      museums_title: "Convent museums",
      museums_intro:
        "DULCESOR supports the conservation and dissemination of cultural heritage linked to convent life, promoting convent museums as living spaces of memory, art and tradition.",

      museum_santaana_title: "Museum of the Royal Monastery of Saint Joachim and Saint Anne (Valladolid)",
      museum_santaana_text:
        "Baroque sacred art museum in the Cistercian monastery, with a highly relevant heritage collection. A space linked to DULCESOR’s cultural identity.",
      museum_pill_priority: "Priority",
      museum_pill_convent: "Convent museum",
      museum_pill_city_valladolid: "Valladolid",
      museum_santaana_btn_web: "Official museum website",
      museum_santaana_btn_rv: "Virtual experience (VR) · Coming soon",
      museum_santaana_note:
        "A virtual reality (VR) experience linked to museum pieces is being developed and will be presented soon.",

      museum_ursulas_title: "Las Úrsulas and Las Claras (Salamanca)",
      museum_ursulas_text_1:
        "The Las Úrsulas and Las Claras Museums in Salamanca bear witness, through art, to the presence of the Santa Clara community in the province.",
      museum_ursulas_text_2:
        "The Monastery of the Annunciation, popularly known as “Las Úrsulas”, is one of Salamanca’s most interesting religious ensembles and has been a National Historic Monument since 1931.",
      museum_ursulas_text_3:
        "The Medieval Painting Museum of Santa Clara highlights the artistic importance of this space, its murals, its coffered ceiling and its musealisation.",
      museum_pill_city_salamanca: "Salamanca",
      museum_pill_inprep: "In preparation",

      museums_other_title: "Other museums (in preparation)",
      museums_other_1_title: "Monastery of Santa Clara (Tordesillas) · Monumental complex",
      museums_other_1_text:
        "A monastic space of outstanding historical and heritage value. This block is prepared to be completed with institutional information and an official link.",
      museums_other_2_title: "Convent of San Francisco (Medina de Rioseco) · Sacred heritage",
      museums_other_2_text:
        "A space linked to the province’s convent heritage. This block is prepared to be completed with institutional information and an official link.",
      museums_other_note:
        "This section will grow by incorporating other convent museums that share DULCESOR’s cultural and heritage values.",

      routes_morning_title: "Morning routes",
      routes_morning_text:
        "We will prepare short cultural routes (morning or half-day) to visit three or four monasteries, museums or heritage sites, with the option to link to product purchases if the community has official channels.",
      routes_morning_note:
        "These routes will be published once they are verified and present a cultural and respectful approach to the communities.",

      routes_convents_title: "Convents and monasteries",
      routes_convents_text:
        "Direct links to official websites or institutional channels of convents and monasteries. When online shops or own sales systems exist, we will link to facilitate access to their products.",
      routes_convents_note:
        "DULCESOR does not sell products on this website. Links redirect to external platforms managed by each community or entity.",
      routes_example_1_title: "Convent / Monastery (Example 1)",
      routes_example_1_text:
        "Block prepared to include name, location, a short institutional description and an official link.",
      routes_example_2_title: "Convent / Monastery (Example 2)",
      routes_example_2_text:
        "Block prepared to include name, location, a short institutional description and an official link.",
      routes_example_btn_web: "Official website · Coming soon",
      routes_example_btn_shop: "Product purchase · Coming soon",
      routes_convents_howto:
        "To add a new convent/monastery, duplicate one of the “Example” blocks and change title, text and links.",

      // ===== CONCURSOS (contest_*) =====
      contest_hero_title: "1st International Monastic & Convent Pastry Competition",
      contest_title: "1st International Monastic & Convent Pastry Competition",
      contest_place_date: "Valladolid · 1–4 October",
      contest_btn_registration_top: "Registration form",
      contest_intro_p:
        "A cultural gathering dedicated to monastic-convent pastry as living heritage: tradition, craft, transmission of know-how and dialogue with contemporary gastronomy.",

      contest_poster_kicker: "Official competition poster",
      contest_poster_alt: "Official competition poster",
      contest_poster_note:
        "The poster appears as the official image of the 1st International Monastic & Convent Pastry Competition.",

      contest_presentation_title: "Presentation",
      contest_presentation_p1:
        "The competition is born with a cultural and international vocation to recognise and highlight monastic pastry as historical legacy and expression of craftsmanship. It brings together communities, institutions and citizens around a programme that combines preparation, outreach and meeting.",
      contest_presentation_note:
        "(Detailed participation information, criteria and calendar will be included in the official rules).",

      contest_section_title: "The competition",
      contest_section_subtitle: "Preparation and judging",
      contest_section_li1: "Preparation: Thursday, 1 October (International Cooking School).",
      contest_section_li2: "Awards ceremony (afternoon): Chapel of the Convent of Santa Ana.",
      contest_section_li3: "Note: full details in the rules.",

      contest_craft_kicker: "Craft / Making",
      contest_craft_img_alt: "Hands kneading dough",
      contest_craft_note: "Process, craft, human work.",

      contest_sales_title: "Sales and meeting with the public",
      contest_sales_p1:
        "From Friday to Sunday, the competition opens to the public in a space for meeting, sales and outreach.",
      contest_sales_li1: "Friday and Saturday from 10:00 to 19:00",
      contest_sales_li2: "Sunday from 10:00 to 16:00",
      contest_sales_li3: "Espacio La Granja (Valladolid)",
      contest_sales_li4: "Meeting with citizens",

      contest_meet_kicker: "Gathering",
      contest_meet_img_alt: "Sweets table and public sales",
      contest_meet_note: "A live event: community and openness.",

      contest_trad_title: "Tradition, dialogue and innovation",
      contest_trad_subtitle: "Round tables and cultural activities",
      contest_trad_p1:
        "Alongside the competition, a programme of round tables and outreach meetings devoted to monastic and artisanal pastry will take place, addressing topics such as:",
      contest_trad_li1: "the transmission of traditional know-how,",
      contest_trad_li2: "the cultural value of artisanal pastry versus industrial production,",
      contest_trad_li3: "the role of tradition in contemporary gastronomy.",
      contest_trad_img_alt: "Ancient book and tablet (dialogue between tradition and innovation)",
      contest_trad_note: "Reading/reflection image: contrast and thought.",

      contest_innov_title: "Innovation",
      contest_innov_subtitle: "An experimental dessert created with artificial intelligence",
      contest_innov_p1:
        "As a cultural, out-of-competition experience, an experimental dessert will be prepared whose recipe has been developed using artificial intelligence, in collaboration with the Spain AI association.",
      contest_innov_img_alt: "Image related to innovation",
      contest_innov_p2:
        "This initiative is conceived as an exercise in reflection and dialogue between tradition and innovation, exploring the limits and possibilities of gastronomic creation from a cultural perspective.",
      contest_badge_out: "Out of competition",

      contest_reg_title: "REGISTRATION · Initial call",
      contest_reg_status_label: "Status:",
      contest_reg_status_value: "in preparation",
      contest_reg_p1:
        "The initial call is being prepared. This section will publish the rules and official documentation to participate.",

      contest_docs_title: "Official documentation",
      contest_docs_bases_soon: "Rules (PDF) · Coming soon",
      contest_docs_application: "Registration form",
      contest_docs_info_soon: "Info (PDF) · Coming soon",
      contest_docs_note:
        "If a link is not published yet, it will appear marked as “Coming soon”.",

      contest_institutional_title: "Institutional framework",
      contest_institutional_p1:
        "The competition is developed with a vocation of continuity and collaboration. DULCESOR articulates relationships with cultural and educational institutions and public administrations, as well as partner entities, to strengthen its heritage, cultural and outreach dimension.",

      contest_sponsors_title: "Competition sponsors",
      contest_sponsors_note: "Institutional and partner logos (folder: assets/logos/)."
    }
  };

  // ------------------------------------------------------------
  // PT/FR/IT: para que tengas TODO el contenido YA,
  // clonamos EN (mismas claves) y sobrescribimos lo localizado.
  // Luego podrás traducir claves poco a poco sin romper nada.
  // ------------------------------------------------------------
  DICT.pt = Object.assign({}, DICT.en, {
    common_in_prep: "Em preparação",
    nav_home: "Início",
    nav_association: "Associação",
    nav_projects: "Projectos",
    nav_contests: "Concursos",
    nav_routes: "Rotas monásticas",
    nav_sponsors: "Patrocinadores",
    nav_contact: "Contacto"
  });

  DICT.fr = Object.assign({}, DICT.en, {
    common_in_prep: "En préparation",
    nav_home: "Accueil",
    nav_association: "Association",
    nav_projects: "Projets",
    nav_contests: "Concours",
    nav_routes: "Itinéraires monastiques",
    nav_sponsors: "Sponsors",
    nav_contact: "Contact"
  });

  DICT.it = Object.assign({}, DICT.en, {
    common_in_prep: "In preparazione",
    nav_home: "Home",
    nav_association: "Associazione",
    nav_projects: "Progetti",
    nav_contests: "Concorsi",
    nav_routes: "Percorsi monastici",
    nav_sponsors: "Sponsor",
    nav_contact: "Contatti"
  });

  // ---------- Utilidades ----------
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

  const setNodeText = (el, value) => {
    if (el.children && el.children.length > 0) el.innerHTML = value;
    else el.textContent = value;
  };

  const apply = (root = document) => {
    const lang = getLang();
    const dict = DICT[lang] || DICT.es || {};

    root.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;

      const val = dict[key];
      if (val == null) return;

      if (el.tagName === "TITLE") {
        document.title = String(val);
        return;
      }

      setNodeText(el, String(val));
    });

    root.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      const val = dict[key];
      if (key && val != null) el.setAttribute("alt", String(val));
    });

    root.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      const val = dict[key];
      if (key && val != null) el.setAttribute("title", String(val));
    });

    root.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria-label");
      const val = dict[key];
      if (key && val != null) el.setAttribute("aria-label", String(val));
    });

    root.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = dict[key];
      if (key && val != null) el.setAttribute("placeholder", String(val));
    });

    root.querySelectorAll("[data-i18n-content]").forEach((el) => {
      const key = el.getAttribute("data-i18n-content");
      const val = dict[key];
      if (key && val != null) el.setAttribute("content", String(val));
    });
  };

  const setLang = (lang) => {
    const l = (lang || "").toLowerCase();
    if (!SUPPORTED.has(l)) return;

    localStorage.setItem(STORAGE_KEY, l);
    for (const k of LEGACY_KEYS) localStorage.setItem(k, l);

    document.documentElement.setAttribute("lang", l);
    apply();
    document.dispatchEvent(new CustomEvent("dulcesor:langchange"));
  };

  const t = (key, fallback = "") => {
    const lang = getLang();
    const dict = DICT[lang] || DICT.es || {};
    return key && dict[key] != null ? String(dict[key]) : fallback;
  };

  // Re-aplicar cuando header/footer se inyectan
  let mo = null;
  const observe = () => {
    const target = document.body;
    if (!target) return;
    if (mo) return;

    mo = new MutationObserver(() => apply());
    mo.observe(target, { childList: true, subtree: true });
  };

  // API pública
  const api = { DICT, t, apply, getLang, setLang };
  window.DULCESOR_I18N = api;

  // PUENTE compatible con header.js
  window.dulcesorI18n = window.dulcesorI18n || {
    getLang: api.getLang,
    applyI18n: api.apply,
    setLanguage: (lang) => {
      api.setLang(lang);
      document.dispatchEvent(new CustomEvent("dulcesor:langchange"));
    }
  };

  // Init
  document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.setAttribute("lang", getLang());
    apply();
    observe();
  });

  // COMPAT con header antiguo
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
        window.DULCESOR_I18N.apply();
      }
    };
})();

