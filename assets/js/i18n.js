/* ============================================================
   DULCESOR i18n (ES/EN/PT/FR/IT) — Protocolo único (COMPAT HEADER)
   - Traduce:
       * data-i18n (texto / HTML)
       * data-i18n-alt, data-i18n-title, data-i18n-aria-label,
         data-i18n-placeholder, data-i18n-content (meta content)
   - Re-aplica traducciones al cambiar idioma (sin MutationObserver)
     para evitar bucles de renderizado.
   - API pública: window.DULCESOR_I18N.{t, apply, setLang, getLang}
   - Puente compatible con header.js/footer.js:
       window.dulcesorI18n.{getLang, applyI18n, setLanguage}
   - COMPAT: lee/escribe también localStorage: lang / language / site_lang
             y define: setLanguage / changeLanguage / setLang / applyTranslations
   ============================================================ */

(() => {
  "use strict";

  const STORAGE_KEY = "dulcesor_lang";
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
      home_project_desc: "I Concurso Internacional de Postres Monacal –DULCESOR- Valladolid",
      home_project_status: "Información en preparación",
      home_identity_title: "Identidad",
      home_identity_name_label: "Nombre:",
      home_identity_name: "Asociación Cultural DULCESOR",
      home_identity_nature_label: "Naturaleza:",
      home_identity_nature: "Asociación cultural sin ánimo de lucro",
      home_identity_scope_label: "Ámbito:",
      home_identity_scope: "Cultural y gastronómico",
      home_goals_title: "Fines y objetivos",
      home_goal_1: "Preservar y difundir la repostería monacal como patrimonio cultural.",
      home_goal_2: "Dar visibilidad al trabajo artesanal de comunidades religiosas.",
      home_goal_3: "Impulsar proyectos culturales y gastronómicos de proyección internacional.",

      // ===== ASOCIACIÓN =====
      assoc_page_title: "Asociación · DULCESOR",
      assoc_meta_description:
        "Quiénes somos y para qué trabajamos: preservar la repostería monacal-conventual e impulsar proyectos culturales y el Concurso Internacional de Postres Monacales.",

      assoc_title: "Asociación",
      assoc_subtitle:
        "Quiénes somos y para qué trabajamos: preservar la repostería monacal-conventual e impulsar proyectos culturales y el Concurso Internacional de Postres Monacales.",
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
      assoc_goal_7: "Organizar y promover el Concurso Internacional de Postres Monacales.",

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
        "Actividades culturales y fomento del Concurso Internacional de Postres Monacales.",

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
      projects_line_1: "Organización de concursos, muestras y jornadas dedicadas a la repostería monacal conventual.",
      projects_line_2:
        "Desarrollo de rutas y encuentros culturales para promover la visita a monasterios y museos relacionados con la tradición repostera.",
      projects_line_3:
        "Edición de materiales divulgativos y educativos sobre historia, técnicas y legado repostero.",
      projects_line_4: "Colaboraciones con instituciones académicas y culturales para investigación y difusión.",
      projects_featured_title: "Proyectos destacados",
      projects_featured_project_title: "I Concurso Internacional de Repostería Monacal -DULCESOR-",
      projects_featured_project_text:
        "Primera convocatoria internacional impulsada por DULCESOR, dedicada a reconocer y difundir la repostería tradicional elaborada en monasterios y conventos, con la ciudad de Valladolid como primer escenario.",
      projects_featured_more: "Ver más sobre los concursos",
      projects_future_title: "Futuros proyectos",
      projects_future_text:
        "Actualmente la Asociación Cultural DULCESOR trabaja en el diseño de nuevas iniciativas vinculadas a la investigación y divulgación del patrimonio monacal, así como en la creación de alianzas internacionales que fortalezcan la difusión cultural y gastronómica del legado repostero.",
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
      contest_hero_title: "I Concurso Internacional<br>de Repostería Monacal DULCESOR",
      contest_title: "I Concurso Internacional de Repostería Monacal DULCESOR 2026",
      contest_place_date: "Valladolid · 1–4 de octubre",
      contest_btn_registration_top: "Solicitud inscripción",
      contest_intro_p:
        "Un encuentro cultural dedicado a la repostería monacal-conventual como patrimonio vivo: tradición, artesanía, transmisión del saber y diálogo con la gastronomía contemporánea.",

      contest_poster_kicker: "Cartel oficial del concurso",
      contest_poster_alt: "Cartel oficial del concurso",
      contest_poster_note:
        "El cartel aparece como imagen oficial del I Concurso Internacional de Repostería Monacal DULCESOR 2026",

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

      contest_sponsors_title: "Entidades colaboradoras del concurso",
      contest_sponsors_note:
        ""    },

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
      home_project_desc: "I International Convent Pastry Competition -DULSESOR-– Valladolid 2026",
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
      projects_featured_project_title: "I International Monastic & Convent Pastry Competition",
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
      contest_hero_title: "1st International Competition<br>of Monastic Pastry DULCESOR",
      contest_title: "1st International Competition<br>of Monastic Pastry DULCESOR 2026",
      contest_place_date: "Valladolid · 1–4 October",
      contest_btn_registration_top: "Registration form",
      contest_intro_p:
        "A cultural gathering dedicated to monastic-convent pastry as living heritage: tradition, craft, transmission of know-how and dialogue with contemporary gastronomy.",

      contest_poster_kicker: "Official competition poster",
      contest_poster_alt: "Official competition poster",
      contest_poster_note:
        "The poster appears as the official image of the 1st International Competition<br>of Monastic Pastry DULCESOR 2026.",

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
      contest_sponsors_note: ""    },

    // =========================================================
    // PORTUGUES (Portugal)
    // =========================================================
    pt: {
      // ===== COMMON =====
      common_in_prep: "Em preparação",

      // ===== NAV (header) =====
      nav_home: "Início",
      nav_association: "Associação",
      nav_projects: "Projetos",
      nav_contests: "Concursos",
      nav_routes: "Rotas monásticas",
      nav_sponsors: "Patrocinadores",
      nav_contact: "Contacto",

      // ===== HOME (index) =====
      home_title: "ASSOCIAÇÃO CULTURAL DULCESOR",
      home_subtitle: "Doçaria monástica e conventual · Património gastronómico · Cultura e tradição",
      home_intro:
        'A Associação Cultural <strong>DULCESOR</strong> promove a preservação, a divulgação e a valorização da <strong>doçaria monástica e conventual</strong> e do património gastronómico ligado a comunidades religiosas, impulsionando projetos culturais de alcance nacional e internacional.',
      home_project_title: "Projeto principal em desenvolvimento",
      home_project_desc: "1.º Concurso Internacional de Sobremesas Conventuais – Valladolid 2026",
      home_project_status: "Informação em preparação",
      home_identity_title: "Identidade",
      home_identity_name_label: "Nome:",
      home_identity_name: "Associação Cultural DULCESOR",
      home_identity_nature_label: "Natureza:",
      home_identity_nature: "Associação cultural sem fins lucrativos",
      home_identity_scope_label: "Âmbito:",
      home_identity_scope: "Cultural e gastronómico",
      home_goals_title: "Fins e objetivos",
      home_goal_1: "Preservar e divulgar a doçaria monacal como património cultural.",
      home_goal_2: "Dar visibilidade ao trabalho artesanal das comunidades religiosas.",
      home_goal_3: "Impulsionar projetos culturais e gastronómicos de projeção internacional.",

      // ===== ASOCIACIÓN =====
      assoc_page_title: "Associação · DULCESOR",
      assoc_meta_description:
        "Quem somos e para que trabalhamos: preservar a doçaria monástica-conventual e impulsionar projetos culturais e o Concurso Internacional de Sobremesas Conventuais.",

      assoc_title: "Associação",
      assoc_subtitle:
        "Quem somos e para que trabalhamos: preservar a doçaria monástica-conventual e impulsionar projetos culturais e o Concurso Internacional de Sobremesas Conventuais.",
      assoc_identity_title: "Identidade",
      assoc_identity_p1:
        "A Associação Cultural DULCESOR é uma entidade sem fins lucrativos dedicada a preservar, investigar e divulgar a doçaria monástica-conventual como património cultural.",
      assoc_identity_p2:
        "Trabalhamos para valorizar um legado vivo de receitas, técnicas e saberes transmitidos ao longo de séculos, com respeito patrimonial e vocação de colaboração.",

      assoc_goals_title: "Fins e objetivos",
      assoc_goal_1:
        "Preservar e divulgar a tradição doceira de mosteiros e conventos como património cultural imaterial.",
      assoc_goal_2:
        "Promover atividades culturais, gastronómicas e académicas que reforcem o conhecimento e a valorização social.",
      assoc_goal_3:
        "Fomentar a investigação, a recolha e a documentação de receitas, técnicas e processos tradicionais.",
      assoc_goal_4:
        "Estabelecer vínculos de cooperação com instituições culturais, educativas e religiosas.",
      assoc_goal_5: "Colaborar com administrações públicas, instituições culturais e entidades privadas.",
      assoc_goal_6: "Impulsionar publicações e materiais de divulgação que contribuam para a sua conservação.",
      assoc_goal_7: "Organizar e promover o Concurso Internacional de Sobremesas Conventuais.",

      assoc_goals_readmore_btn: "Ler mais…",
      assoc_goals_readmore_more: "Ler mais…",
      assoc_goals_readmore_less: "Ler menos",

      assoc_lines_title: "AS NOSSAS LINHAS DE TRABALHO",
      assoc_lines_1_title: "Património e memória",
      assoc_lines_1_text: "Investigação e preservação do património doceiro monástico-conventual.",
      assoc_lines_2_title: "Artesanato",
      assoc_lines_2_text: "Valorização do trabalho artesanal e dos processos tradicionais.",
      assoc_lines_3_title: "Encontro e cultura",
      assoc_lines_3_text:
        "Atividades culturais e promoção do Concurso Internacional de Sobremesas Conventuais.",

      assoc_values_title: "Princípios e valores",
      assoc_values_p1:
        "A DULCESOR atua com rigor histórico, respeito patrimonial e compromisso ético com as comunidades religiosas produtoras.",
      assoc_values_p2:
        "Promovemos o reconhecimento da doçaria monástica como expressão cultural e gastronómica e como testemunho vivo de tradição, espiritualidade e artesanato.",

      assoc_admin_title: "Informação administrativa",
      assoc_admin_scope_label: "Âmbito de atuação",
      assoc_admin_scope_value: "Cultural e gastronómico (âmbito nacional e internacional)",
      assoc_admin_legal_label: "Natureza jurídica",
      assoc_admin_legal_value: "Associação cultural sem fins lucrativos",
      assoc_admin_address_label: "Sede",
      assoc_admin_address_value: "Convento de Santa Ana (Valladolid)",
      assoc_admin_duration_label: "Duração",
      assoc_admin_duration_value: "Indefinida",
      assoc_admin_registry_label: "Situação registral",
      assoc_admin_registry_value: "Entidade em processo de inscrição oficial (NIF/CIF solicitado)",

      assoc_collab_title: "Como colaborar",
      assoc_collab_intro:
        "Como entidade cultural, a DULCESOR formaliza colaborações, patrocínios e apoios através de convénios, acordos ou contratos, sem que essas relações confiram a condição de associado.",
      assoc_collab_forms_title: "Formas de colaboração",
      assoc_collab_1:
        "<strong>Parceria institucional</strong> (municípios, instituições académicas, museus, arquivos, entidades culturais).",
      assoc_collab_2:
        "<strong>Patrocínio</strong> do concurso e/ou de atividades culturais e de divulgação.",
      assoc_collab_3:
        "<strong>Apoio em espécie ou serviços</strong> (espaços, logística, comunicação, impressão, materiais, etc.).",
      assoc_collab_4:
        "<strong>Divulgação e rede cultural</strong> (meios, prescritores, entidades colaboradoras).",
      assoc_collab_cta_1: "Propor colaboração",
      assoc_collab_cta_2: "Contacto institucional",

      // ===== CONTACTO =====
      contact_page_title: "Contacto · DULCESOR",
      contact_meta_description: "Contacto da Associação Cultural DULCESOR.",
      contact_title: "Contacto",
      contact_subtitle: "Canais de comunicação da Associação Cultural DULCESOR.",
      contact_block_title: "Informação de contacto",
      contact_email_label: "Informação geral",
      contact_contact_label: "Contacto institucional",
      contact_contest_label: "Concursos",
      contact_address_label: "Sede",
      contact_address_value: "Plaza Santa Ana, 4 · 47001 Valladolid (Espanha)",
      contact_note: "Se deseja colaborar ou obter mais informações, escreva-nos e responderemos com a maior brevidade.",
      contact_collab_title: "Colabore com a DULCESOR",
      contact_collab_text:
        "Se é uma instituição, entidade ou coletivo interessado em apoiar projetos culturais ou atividades, podemos analisar vias de colaboração e participação.",
      contact_collab_btn: "Ver patrocinadores",
      contact_collab_note: "Também pode escrever-nos diretamente para contacto@dulcesor.org.",

      // ===== PATROCINADORES =====
      sponsors_page_title: "Patrocinadores · DULCESOR",
      sponsors_meta_description: "Patrocinadores e colaboradores da Associação Cultural DULCESOR.",
      sponsors_title: "Patrocinadores",
      sponsors_subtitle: "Entidades colaboradoras da Associação Cultural DULCESOR.",
      sponsors_assoc_title: "Patrocinadores da associação",
      sponsors_assoc_text: "Estas entidades apoiam o desenvolvimento geral da Associação Cultural DULCESOR.",
      sponsors_assoc_note: "Esta lista será ampliada progressivamente com a incorporação de novas entidades colaboradoras.",
      sponsors_collab_title: "Quer colaborar?",
      sponsors_collab_text:
        "Se a sua entidade deseja apoiar os projetos culturais da DULCESOR, escreva-nos e informá-lo-emos sobre as modalidades de colaboração.",
      sponsors_collab_btn: "Ir para contacto",
      sponsors_list_title: "Lista",
      sponsors_nb21_text: "Patrocinador da Associação Cultural DULCESOR.",
      sponsors_apolo_text: "Patrocinador da Associação Cultural DULCESOR.",
      sponsors_spainai_text: "Parceiro tecnológico e cultural na linha de inovação.",
      sponsors_visit_web: "Visitar site",
      sponsors_cta: "Propor patrocínio",
      sponsors_institutional: "Institucionais",
      sponsors_institutional_text:
        "Entidades públicas e instituições que apoiam o projeto cultural e o concurso.",
      sponsors_private: "Colaboradores",
      sponsors_private_text:
        "Empresas e entidades colaboradoras que tornam possíveis atividades, comunicação e suporte.",

      // ===== PROYECTOS =====
      projects_page_title: "Projetos · DULCESOR",
      projects_meta_description:
        "Projetos culturais e gastronómicos da Associação Cultural DULCESOR.",
      projects_title: "Projetos",
      projects_subtitle:
        "Iniciativas culturais e gastronómicas dedicadas a preservar e divulgar a doçaria monástica e conventual.",
      projects_intro_title: "Apresentação geral",
      projects_intro_text:
        "Os projetos da Associação Cultural DULCESOR têm como objetivo valorizar o património doceiro dos conventos e mosteiros, reforçar a ligação entre gastronomia e cultura e abrir um espaço de colaboração entre artesãs, instituições e cidadania.",
      projects_lines_title: "Linhas de ação",
      projects_line_1: "Organização de concursos, mostras e jornadas dedicadas à doçaria conventual.",
      projects_line_2:
        "Desenvolvimento de rotas e encontros culturais para promover visitas a mosteiros e museus ligados à tradição doceira.",
      projects_line_3:
        "Edição de materiais de divulgação e educativos sobre história, técnicas e legado doceiro.",
      projects_line_4: "Colaborações com instituições académicas e culturais para investigação e divulgação.",
      projects_featured_title: "Projetos em destaque",
      projects_featured_project_title: "I Concurso Internacional de Doçaria Monacal -DULCESOR- 2026",
      projects_featured_project_text:
        "Primeira convocatória internacional promovida pela DULCESOR, dedicada a reconhecer e divulgar a doçaria tradicional elaborada em mosteiros e conventos, com a cidade de Valladolid como primeiro cenário.",
      projects_featured_more: "Ver mais sobre os concursos",
      projects_future_title: "Projetos futuros",
      projects_future_text:
        "Atualmente, a Associação Cultural DULCESOR trabalha no desenho de novas iniciativas ligadas à investigação e divulgação do património conventual, bem como na criação de alianças internacionais que reforcem a difusão cultural e gastronómica deste legado doceiro.",
      projects_future_note:
        "Se é uma instituição, entidade ou coletivo interessado em colaborar, pode entrar em contacto para explorar formas de participação.",

      // ===== RUTAS =====
      routes_page_title: "Rotas · DULCESOR",
      routes_meta_description: "Rotas monásticas e museus conventuais: linha cultural da DULCESOR.",
      routes_title: "Rotas monásticas",
      routes_subtitle:
        "Linha cultural da DULCESOR dedicada à divulgação do património monástico e da tradição artesanal, com ligações institucionais e recursos culturais.",
      routes_nav_routes: "Rotas",
      routes_nav_museums: "Museus",
      routes_focus_title: "Enfoque cultural",
      routes_focus_text:
        "Este espaço é concebido como uma linha de divulgação cultural e patrimonial. Não é um site turístico genérico: privilegiamos um tom institucional, sóbrio e respeitoso, promovendo o conhecimento e a valorização do património monástico e da doçaria artesanal.",
      routes_focus_note:
        "A informação e as listas serão ampliadas progressivamente à medida que a atividade da associação avance.",
      routes_note_title: "Nota",
      routes_note_text:
        "A DULCESOR liga a recursos institucionais ou oficiais quando disponíveis. Este site não comercializa produtos: se uma comunidade tiver venda própria, será ligado ao seu canal oficial.",
      routes_note_pill: "Conteúdo em crescimento",

      museums_title: "Museus conventuais",
      museums_intro:
        "A DULCESOR apoia a conservação e divulgação do património cultural associado à vida conventual, promovendo os museus conventuais como espaços vivos de memória, arte e tradição.",

      museum_santaana_title: "Museu do Real Mosteiro de São Joaquim e Santa Ana (Valladolid)",
      museum_santaana_text:
        "Museu de arte sacra barroca no mosteiro cisterciense, com um conjunto patrimonial de grande relevância. Espaço ligado à identidade cultural da DULCESOR.",
      museum_pill_priority: "Prioritário",
      museum_pill_convent: "Museu conventual",
      museum_pill_city_valladolid: "Valladolid",
      museum_santaana_btn_web: "Site oficial do museu",
      museum_santaana_btn_rv: "Experiência virtual (RV) · Em breve",
      museum_santaana_note:
        "Está a ser desenvolvida uma experiência de realidade virtual (RV) associada a peças do museu, que será apresentada em breve.",

      museum_ursulas_title: "Las Úrsulas e Las Claras (Salamanca)",
      museum_ursulas_text_1:
        "Os Museus Las Úrsulas e Las Claras de Salamanca são o testemunho, através da arte, da presença da Comunidade de Santa Clara na província.",
      museum_ursulas_text_2:
        "O Mosteiro da Anunciação, conhecido popularmente como “las Úrsulas”, é um dos conjuntos religiosos mais interessantes da cidade de Salamanca e, desde 1931, Monumento Histórico Nacional.",
      museum_ursulas_text_3:
        "O Museu de Pintura Medieval de Santa Clara evidencia a importância artística deste espaço, dos seus murais, do seu teto de caixotões e da sua musealização.",
      museum_pill_city_salamanca: "Salamanca",
      museum_pill_inprep: "Em preparação",

      museums_other_title: "Outros museus (em preparação)",
      museums_other_1_title: "Mosteiro de Santa Clara (Tordesilhas) · Conjunto monumental",
      museums_other_1_text:
        "Espaço monástico com destacado valor histórico e patrimonial. Este bloco está preparado para ser completado com informação institucional e ligação oficial.",
      museums_other_2_title: "Convento de São Francisco (Medina de Rioseco) · Património sacro",
      museums_other_2_text:
        "Espaço ligado ao património conventual da província. Este bloco está preparado para ser completado com informação institucional e ligação oficial.",
      museums_other_note:
        "Esta secção crescerá incorporando outros museus conventuais que partilhem os valores culturais e patrimoniais da DULCESOR.",

      routes_morning_title: "Rotas de uma manhã",
      routes_morning_text:
        "Prepararemos pequenas rotas culturais (manhã ou meia jornada) para visitar três ou quatro mosteiros, museus ou espaços patrimoniais, com possibilidade de ligação à compra de produtos se a comunidade dispuser de canais oficiais.",
      routes_morning_note:
        "Estas rotas serão publicadas quando estiverem confirmadas e apresentarem um enfoque cultural e respeitoso com as comunidades.",

      routes_convents_title: "Conventos e mosteiros",
      routes_convents_text:
        "Ligações diretas a sites oficiais ou canais institucionais de conventos e mosteiros. Quando existirem lojas online ou sistemas de venda próprios, serão ligados para facilitar o acesso aos seus produtos.",
      routes_convents_note:
        "A DULCESOR não comercializa produtos neste site. As ligações remetem para plataformas externas geridas por cada comunidade ou entidade.",
      routes_example_1_title: "Convento / Mosteiro (Exemplo 1)",
      routes_example_1_text:
        "Bloco preparado para incorporar nome, localidade, breve descrição institucional e ligação oficial.",
      routes_example_2_title: "Convento / Mosteiro (Exemplo 2)",
      routes_example_2_text:
        "Bloco preparado para incorporar nome, localidade, breve descrição institucional e ligação oficial.",
      routes_example_btn_web: "Site oficial · Em breve",
      routes_example_btn_shop: "Compra de produtos · Em breve",
      routes_convents_howto:
        "Para adicionar um novo convento/mosteiro, duplique um dos blocos “Exemplo” e altere título, texto e ligações.",

      // ===== CONCURSOS (contest_*) =====
      contest_hero_title: "1º Concurso Internacional<br>de Doçaria Monacal DULCESOR",
      contest_title: "1º Concurso Internacional de Doçaria Monacal DULCESOR 2026",
      contest_place_date: "Valladolid · 1–4 de outubro",
      contest_btn_registration_top: "Pedido de inscrição",
      contest_intro_p:
        "Um encontro cultural dedicado à doçaria monástica-conventual como património vivo: tradição, artesanato, transmissão do saber e diálogo com a gastronomia contemporânea.",

      contest_poster_kicker: "Cartaz oficial do concurso",
      contest_poster_alt: "Cartaz oficial do concurso",
      contest_poster_note:
        "O cartaz aparece como imagem oficial do 1º Concurso Internacional de Doçaria Monacal DULCESOR 2026.",

      contest_presentation_title: "Apresentação",
      contest_presentation_p1:
        "O concurso nasce com vocação cultural e internacional para reconhecer e valorizar a doçaria monástica como legado histórico e expressão de artesanato. Reúne comunidades, instituições e cidadania em torno de um programa que combina confeção, divulgação e encontro.",
      contest_presentation_note:
        "(A informação detalhada de participação, critérios e calendário será incluída nas bases oficiais).",

      contest_section_title: "O concurso",
      contest_section_subtitle: "Confeção e avaliação",
      contest_section_li1: "Confeção: quinta-feira, 1 de outubro (Escola Internacional de Cozinha).",
      contest_section_li2: "Entrega de prémios (tarde): Capela do Convento de Santa Ana.",
      contest_section_li3: "Nota: detalhes completos nas bases.",

      contest_craft_kicker: "Artesanato / Fazer",
      contest_craft_img_alt: "Mãos a amassar massa",
      contest_craft_note: "Processo, ofício, trabalho humano.",

      contest_sales_title: "Venda e encontro com o público",
      contest_sales_p1:
        "De sexta-feira a domingo, o concurso abre-se à cidadania num espaço de encontro, venda e divulgação.",
      contest_sales_li1: "Sexta e sábado das 10:00 às 19:00",
      contest_sales_li2: "Domingo das 10:00 às 16:00",
      contest_sales_li3: "Espaço La Granja (Valladolid)",
      contest_sales_li4: "Encontro com a cidadania",

      contest_meet_kicker: "Encontro",
      contest_meet_img_alt: "Mesa de doces e venda ao público",
      contest_meet_note: "Evento vivo, comunidade e abertura.",

      contest_trad_title: "Tradição, diálogo e inovação",
      contest_trad_subtitle: "Mesas-redondas e atividades culturais",
      contest_trad_p1:
        "Em paralelo ao concurso, terá lugar um programa de mesas-redondas e encontros de divulgação dedicados à doçaria monástica e artesanal, abordando questões como:",
      contest_trad_li1: "a transmissão do saber tradicional,",
      contest_trad_li2: "o valor cultural da doçaria artesanal face à produção industrial,",
      contest_trad_li3: "o papel da tradição na gastronomia contemporânea.",
      contest_trad_img_alt: "Livro antigo e tablet (diálogo entre tradição e inovação)",
      contest_trad_note: "Imagem de leitura/reflexão: contraste e pensamento.",

      contest_innov_title: "Inovação",
      contest_innov_subtitle: "Uma sobremesa experimental criada com inteligência artificial",
      contest_innov_p1:
        "Como experiência cultural e fora de concurso, será confeccionada uma sobremesa experimental cuja receita foi desenvolvida com recurso a inteligência artificial, em colaboração com a associação Spain AI.",
      contest_innov_img_alt: "Imagem associada à inovação",
      contest_innov_p2:
        "Esta iniciativa é concebida como um exercício de reflexão e diálogo entre tradição e inovação, explorando os limites e as possibilidades da criação gastronómica numa perspetiva cultural.",
      contest_badge_out: "Fora de concurso",

      contest_reg_title: "INSCRIÇÃO · Convocatória inicial",
      contest_reg_status_label: "Estado:",
      contest_reg_status_value: "em preparação",
      contest_reg_p1:
        "A convocatória inicial está em preparação. Nesta secção serão publicadas as bases e a documentação oficial para participar.",

      contest_docs_title: "Documentação oficial",
      contest_docs_bases_soon: "Bases (PDF) · Em breve",
      contest_docs_application: "Pedido de inscrição",
      contest_docs_info_soon: "Info (PDF) · Em breve",
      contest_docs_note:
        "Se alguma ligação ainda não estiver publicada, aparecerá assinalada como “Em breve”.",

      contest_institutional_title: "Enquadramento institucional",
      contest_institutional_p1:
        "O concurso desenvolve-se com vocação de continuidade e colaboração. A DULCESOR articula relações com instituições culturais e educativas e com administrações públicas, bem como com entidades colaboradoras, para reforçar a sua dimensão patrimonial, cultural e de divulgação.",

      contest_sponsors_title: "Patrocinadores do concurso",
      contest_sponsors_note: ""
    },

    // =========================================================
    // FRANCAIS
    // =========================================================
    fr: {
      // ===== COMMON =====
      common_in_prep: "En préparation",

      // ===== NAV (header) =====
      nav_home: "Accueil",
      nav_association: "Association",
      nav_projects: "Projets",
      nav_contests: "Concours",
      nav_routes: "Routes monastiques",
      nav_sponsors: "Partenaires",
      nav_contact: "Contact",

      // ===== HOME (index) =====
      home_title: "ASSOCIATION CULTURELLE DULCESOR",
      home_subtitle: "Pâtisserie monastique et conventuelle · Patrimoine gastronomique · Culture et tradition",
      home_intro:
        'L’Association culturelle <strong>DULCESOR</strong> promeut la préservation, la diffusion et la valorisation de la <strong>pâtisserie monastique et conventuelle</strong> ainsi que du patrimoine gastronomique lié aux communautés religieuses, en développant des projets culturels d’envergure nationale et internationale.',
      home_project_title: "Projet principal en développement",
      home_project_desc: "I Concours international de desserts conventuels -DULCESOR-  Valladolid 2026",
      home_project_status: "Informations en préparation",
      home_identity_title: "Identité",
      home_identity_name_label: "Nom :",
      home_identity_name: "Association culturelle DULCESOR",
      home_identity_nature_label: "Nature juridique :",
      home_identity_nature: "Association culturelle à but non lucratif",
      home_identity_scope_label: "Domaine :",
      home_identity_scope: "Culturel et gastronomique",
      home_goals_title: "Finalités et objectifs",
      home_goal_1: "Préserver et promouvoir la pâtisserie conventuelle comme patrimoine culturel.",
      home_goal_2: "Donner de la visibilité au travail artisanal des communautés religieuses.",
      home_goal_3: "Développer des projets culturels et gastronomiques à portée internationale.",

      // ===== ASOCIACIÓN =====
      assoc_page_title: "Association · DULCESOR",
      assoc_meta_description:
        "Qui nous sommes et pour quoi nous travaillons : préserver la pâtisserie monastique-conventuelle et promouvoir des projets culturels et le Concours international de desserts conventuels.",

      assoc_title: "Association",
      assoc_subtitle:
        "Qui nous sommes et pour quoi nous travaillons : préserver la pâtisserie monastique-conventuelle et promouvoir des projets culturels et le Concours international de desserts conventuels.",
      assoc_identity_title: "Identité",
      assoc_identity_p1:
        "L’Association culturelle DULCESOR est une entité à but non lucratif dédiée à la préservation, à la recherche et à la diffusion de la pâtisserie monastique-conventuelle en tant que patrimoine culturel.",
      assoc_identity_p2:
        "Nous œuvrons pour valoriser un héritage vivant de recettes, techniques et savoir-faire transmis au fil des siècles, avec respect patrimonial et esprit de coopération.",

      assoc_goals_title: "Finalités et objectifs",
      assoc_goal_1:
        "Préserver et promouvoir la tradition pâtissière des monastères et couvents comme patrimoine culturel immatériel.",
      assoc_goal_2:
        "Promouvoir des activités culturelles, gastronomiques et académiques qui renforcent sa connaissance et son appréciation sociale.",
      assoc_goal_3:
        "Encourager la recherche, la collecte et la documentation de recettes, techniques et processus traditionnels.",
      assoc_goal_4:
        "Établir des liens de coopération avec des institutions culturelles, éducatives et religieuses.",
      assoc_goal_5: "Collaborer avec les administrations publiques, les institutions culturelles et les entités privées.",
      assoc_goal_6: "Promouvoir des publications et des supports de diffusion contribuant à sa conservation.",
      assoc_goal_7: "Organiser et promouvoir le Concours international de desserts conventuels.",

      assoc_goals_readmore_btn: "Lire la suite…",
      assoc_goals_readmore_more: "Lire la suite…",
      assoc_goals_readmore_less: "Lire moins",

      assoc_lines_title: "NOS AXES DE TRAVAIL",
      assoc_lines_1_title: "Patrimoine et mémoire",
      assoc_lines_1_text: "Recherche et préservation du patrimoine pâtissier monastique-conventuel.",
      assoc_lines_2_title: "Artisanat",
      assoc_lines_2_text: "Valorisation du travail artisanal et des procédés traditionnels.",
      assoc_lines_3_title: "Rencontre et culture",
      assoc_lines_3_text:
        "Activités culturelles et promotion du Concours international de desserts conventuels.",

      assoc_values_title: "Principes et valeurs",
      assoc_values_p1:
        "DULCESOR agit avec rigueur historique, respect patrimonial et engagement éthique envers les communautés religieuses productrices.",
      assoc_values_p2:
        "Nous favorisons la reconnaissance de la pâtisserie monastique comme expression culturelle et gastronomique et comme témoignage vivant de tradition, de spiritualité et d’artisanat.",

      assoc_admin_title: "Informations administratives",
      assoc_admin_scope_label: "Champ d’action",
      assoc_admin_scope_value: "Culturel et gastronomique (portée nationale et internationale)",
      assoc_admin_legal_label: "Nature juridique",
      assoc_admin_legal_value: "Association culturelle à but non lucratif",
      assoc_admin_address_label: "Siège",
      assoc_admin_address_value: "Couvent de Santa Ana (Valladolid)",
      assoc_admin_duration_label: "Durée",
      assoc_admin_duration_value: "Indéfinie",
      assoc_admin_registry_label: "Situation d’enregistrement",
      assoc_admin_registry_value: "Entité en cours d’inscription officielle (NIF/CIF demandé)",

      assoc_collab_title: "Comment collaborer",
      assoc_collab_intro:
        "En tant qu’entité culturelle, DULCESOR formalise collaborations, parrainages et soutiens via des conventions, accords ou contrats, sans que ces relations n’accordent le statut de membre.",
      assoc_collab_forms_title: "Formes de collaboration",
      assoc_collab_1:
        "<strong>Partenariat institutionnel</strong> (collectivités, universités, musées, archives, entités culturelles).",
      assoc_collab_2:
        "<strong>Parrainage</strong> du concours et/ou d’activités culturelles et de diffusion.",
      assoc_collab_3:
        "<strong>Soutien en nature ou services</strong> (lieux, logistique, communication, impression, matériaux, etc.).",
      assoc_collab_4:
        "<strong>Diffusion et réseau culturel</strong> (médias, prescripteurs, partenaires).",
      assoc_collab_cta_1: "Proposer une collaboration",
      assoc_collab_cta_2: "Contact institutionnel",

      // ===== CONTACTO =====
      contact_page_title: "Contact · DULCESOR",
      contact_meta_description: "Contact de l’Association culturelle DULCESOR.",
      contact_title: "Contact",
      contact_subtitle: "Canaux de communication de l’Association culturelle DULCESOR.",
      contact_block_title: "Informations de contact",
      contact_email_label: "Informations générales",
      contact_contact_label: "Contact institutionnel",
      contact_contest_label: "Concours",
      contact_address_label: "Adresse",
      contact_address_value: "Plaza Santa Ana, 4 · 47001 Valladolid (Espagne)",
      contact_note: "Si vous souhaitez collaborer ou obtenir plus d’informations, écrivez-nous et nous vous répondrons dans les plus brefs délais.",
      contact_collab_title: "Collaborer avec DULCESOR",
      contact_collab_text:
        "Si vous êtes une institution, une entité ou un collectif intéressé par le soutien à des projets culturels ou à des activités, nous pouvons étudier des voies de collaboration et de participation.",
      contact_collab_btn: "Voir les partenaires",
      contact_collab_note: "Vous pouvez aussi nous écrire directement à contacto@dulcesor.org.",

      // ===== PATROCINADORES =====
      sponsors_page_title: "Partenaires · DULCESOR",
      sponsors_meta_description: "Partenaires et collaborateurs de l’Association culturelle DULCESOR.",
      sponsors_title: "Partenaires",
      sponsors_subtitle: "Entités partenaires de l’Association culturelle DULCESOR.",
      sponsors_assoc_title: "Partenaires de l’association",
      sponsors_assoc_text: "Ces entités soutiennent le développement global de l’Association culturelle DULCESOR.",
      sponsors_assoc_note: "Cette liste s’enrichira progressivement avec l’intégration de nouveaux partenaires.",
      sponsors_collab_title: "Vous souhaitez collaborer ?",
      sponsors_collab_text:
        "Si votre organisation souhaite soutenir les projets culturels de DULCESOR, écrivez-nous et nous vous informerons des modalités de collaboration.",
      sponsors_collab_btn: "Aller au contact",
      sponsors_list_title: "Liste",
      sponsors_nb21_text: "Partenaire de l’Association culturelle DULCESOR.",
      sponsors_apolo_text: "Partenaire de l’Association culturelle DULCESOR.",
      sponsors_spainai_text: "Partenaire technologique et culturel sur le volet innovation.",
      sponsors_visit_web: "Visiter le site",
      sponsors_cta: "Proposer un partenariat",
      sponsors_institutional: "Institutionnels",
      sponsors_institutional_text:
        "Entités publiques et institutions soutenant le projet culturel et le concours.",
      sponsors_private: "Collaborateurs",
      sponsors_private_text:
        "Entreprises et entités partenaires rendant possibles les activités, la communication et le support.",

      // ===== PROYECTOS =====
      projects_page_title: "Projets · DULCESOR",
      projects_meta_description:
        "Projets culturels et gastronomiques de l’Association culturelle DULCESOR.",
      projects_title: "Projets",
      projects_subtitle:
        "Initiatives culturelles et gastronomiques dédiées à la préservation et à la diffusion de la pâtisserie monastique et conventuelle.",
      projects_intro_title: "Présentation générale",
      projects_intro_text:
        "Les projets de l’Association culturelle DULCESOR visent à valoriser le patrimoine pâtissier des couvents et monastères, à renforcer le lien entre gastronomie et culture et à créer un espace de collaboration entre artisanes, institutions et citoyennes/citoyens.",
      projects_lines_title: "Axes d’action",
      projects_line_1: "Organisation de concours, expositions et journées dédiées à la pâtisserie conventuelle.",
      projects_line_2:
        "Développement de routes et de rencontres culturelles pour promouvoir la visite de monastères et de musées liés à la tradition pâtissière.",
      projects_line_3:
        "Édition de supports de diffusion et éducatifs sur l’histoire, les techniques et l’héritage pâtissier.",
      projects_line_4: "Collaborations avec des institutions académiques et culturelles pour la recherche et la diffusion.",
      projects_featured_title: "Projets phares",
      projects_featured_project_title: "I Concours international de pâtisserie monastique -DULCESOR- 2026",
      projects_featured_project_text:
        "Première édition internationale portée par DULCESOR, dédiée à la reconnaissance et à la diffusion de la pâtisserie traditionnelle élaborée dans les monastères et couvents, avec la ville de Valladolid comme premier cadre.",
      projects_featured_more: "En savoir plus sur les concours",
      projects_future_title: "Projets futurs",
      projects_future_text:
        "L’Association culturelle DULCESOR travaille actuellement à la conception de nouvelles initiatives liées à la recherche et à la diffusion du patrimoine conventuel, ainsi qu’à la création d’alliances internationales renforçant la diffusion culturelle et gastronomique de cet héritage.",
      projects_future_note:
        "Si vous êtes une institution, une entité ou un collectif intéressé par une collaboration, vous pouvez nous contacter pour explorer des formes de participation.",

      // ===== RUTAS =====
      routes_page_title: "Routes · DULCESOR",
      routes_meta_description: "Routes monastiques et musées conventuels : ligne culturelle de DULCESOR.",
      routes_title: "Routes monastiques",
      routes_subtitle:
        "Ligne culturelle de DULCESOR dédiée à la diffusion du patrimoine monastique et de la tradition artisanale, avec des liens institutionnels et des ressources culturelles.",
      routes_nav_routes: "Routes",
      routes_nav_museums: "Musées",
      routes_focus_title: "Approche culturelle",
      routes_focus_text:
        "Cet espace est conçu comme une ligne de diffusion culturelle et patrimoniale. Ce n’est pas un site touristique générique : nous privilégions un ton institutionnel, sobre et respectueux, en promouvant la connaissance et la valorisation du patrimoine monastique et de la pâtisserie artisanale.",
      routes_focus_note:
        "Les informations et listes seront enrichies progressivement au fur et à mesure de l’avancement de l’activité de l’association.",
      routes_note_title: "Note",
      routes_note_text:
        "DULCESOR renvoie vers des ressources institutionnelles ou officielles lorsqu’elles sont disponibles. Ce site ne vend pas de produits : si une communauté dispose de son propre canal de vente, nous renverrons vers son canal officiel.",
      routes_note_pill: "Contenu en croissance",

      museums_title: "Musées conventuels",
      museums_intro:
        "DULCESOR soutient la conservation et la diffusion du patrimoine culturel lié à la vie conventuelle, en promouvant les musées conventuels comme espaces vivants de mémoire, d’art et de tradition.",

      museum_santaana_title: "Musée du Monastère Royal de Saint Joachim et Sainte Anne (Valladolid)",
      museum_santaana_text:
        "Musée d’art sacré baroque au sein du monastère cistercien, avec un ensemble patrimonial de grande importance. Un espace lié à l’identité culturelle de DULCESOR.",
      museum_pill_priority: "Prioritaire",
      museum_pill_convent: "Musée conventuel",
      museum_pill_city_valladolid: "Valladolid",
      museum_santaana_btn_web: "Site officiel du musée",
      museum_santaana_btn_rv: "Expérience virtuelle (VR) · Bientôt",
      museum_santaana_note:
        "Une expérience en réalité virtuelle (VR) liée à des pièces du musée est en cours de développement et sera présentée prochainement.",

      museum_ursulas_title: "Las Úrsulas et Las Claras (Salamanque)",
      museum_ursulas_text_1:
        "Les musées Las Úrsulas et Las Claras de Salamanque témoignent, à travers l’art, de la présence de la communauté de Santa Clara dans la province.",
      museum_ursulas_text_2:
        "Le monastère de l’Annonciation, connu populairement comme “las Úrsulas”, est l’un des ensembles religieux les plus intéressants de la ville de Salamanque et est Monument historique national depuis 1931.",
      museum_ursulas_text_3:
        "Le musée de peinture médiévale de Santa Clara met en évidence l’importance artistique de cet espace, de ses fresques, de son plafond à caissons et de sa muséalisation.",
      museum_pill_city_salamanca: "Salamanque",
      museum_pill_inprep: "En préparation",

      museums_other_title: "Autres musées (en préparation)",
      museums_other_1_title: "Monastère de Santa Clara (Tordesillas) · Ensemble monumental",
      museums_other_1_text:
        "Espace monastique d’une grande valeur historique et patrimoniale. Ce bloc est prêt à être complété avec des informations institutionnelles et un lien officiel.",
      museums_other_2_title: "Couvent de San Francisco (Medina de Rioseco) · Patrimoine sacré",
      museums_other_2_text:
        "Espace lié au patrimoine conventuel de la province. Ce bloc est prêt à être complété avec des informations institutionnelles et un lien officiel.",
      museums_other_note:
        "Cette section grandira en intégrant d’autres musées conventuels partageant les valeurs culturelles et patrimoniales de DULCESOR.",

      routes_morning_title: "Routes d’une matinée",
      routes_morning_text:
        "Nous préparerons de courtes routes culturelles (matinée ou demi-journée) pour visiter trois ou quatre monastères, musées ou sites patrimoniaux, avec la possibilité de renvoyer vers l’achat de produits si la communauté dispose de canaux officiels.",
      routes_morning_note:
        "Ces routes seront publiées lorsqu’elles seront vérifiées et présenteront une approche culturelle et respectueuse des communautés.",

      routes_convents_title: "Couvents et monastères",
      routes_convents_text:
        "Liens directs vers les sites officiels ou canaux institutionnels des couvents et monastères. Lorsqu’il existe des boutiques en ligne ou des systèmes de vente propres, nous renverrons vers ceux-ci pour faciliter l’accès à leurs produits.",
      routes_convents_note:
        "DULCESOR ne commercialise pas de produits sur ce site. Les liens redirigent vers des plateformes externes gérées par chaque communauté ou entité.",
      routes_example_1_title: "Couvent / Monastère (Exemple 1)",
      routes_example_1_text:
        "Bloc prêt à intégrer nom, localité, courte description institutionnelle et lien officiel.",
      routes_example_2_title: "Couvent / Monastère (Exemple 2)",
      routes_example_2_text:
        "Bloc prêt à intégrer nom, localité, courte description institutionnelle et lien officiel.",
      routes_example_btn_web: "Site officiel · Bientôt",
      routes_example_btn_shop: "Achat de produits · Bientôt",
      routes_convents_howto:
        "Pour ajouter un nouveau couvent/monastère, dupliquez l’un des blocs “Exemple” et modifiez titre, texte et liens.",

      // ===== CONCURSOS (contest_*) =====
      contest_hero_title: "1er Concours international<br>de pâtisserie monastique DULCESOR",
      contest_title: "1er Concours international de pâtisserie monastique DULCESOR 2026",
      contest_place_date: "Valladolid · 1–4 octobre",
      contest_btn_registration_top: "Demande d’inscription",
      contest_intro_p:
        "Une rencontre culturelle dédiée à la pâtisserie monastique-conventuelle en tant que patrimoine vivant : tradition, artisanat, transmission du savoir-faire et dialogue avec la gastronomie contemporaine.",

      contest_poster_kicker: "Affiche officielle du concours",
      contest_poster_alt: "Affiche officielle du concours",
      contest_poster_note:
        "L’affiche apparaît comme l’image officielle du 1er Concours international de pâtisserie monastique DULCESOR 2026.",

      contest_presentation_title: "Présentation",
      contest_presentation_p1:
        "Le concours naît avec une vocation culturelle et internationale afin de reconnaître et de valoriser la pâtisserie monastique comme héritage historique et expression de l’artisanat. Il réunit communautés, institutions et citoyennes/citoyens autour d’un programme mêlant confection, diffusion et rencontre.",
      contest_presentation_note:
        "(Les informations détaillées de participation, critères et calendrier seront incluses dans le règlement officiel).",

      contest_section_title: "Le concours",
      contest_section_subtitle: "Confection et évaluation",
      contest_section_li1: "Confection : jeudi 1er octobre (École internationale de cuisine).",
      contest_section_li2: "Remise des prix (après-midi) : chapelle du couvent de Santa Ana.",
      contest_section_li3: "Note : détails complets dans le règlement.",

      contest_craft_kicker: "Artisanat / Faire",
      contest_craft_img_alt: "Mains pétrissant la pâte",
      contest_craft_note: "Processus, métier, travail humain.",

      contest_sales_title: "Vente et rencontre avec le public",
      contest_sales_p1:
        "Du vendredi au dimanche, le concours s’ouvre au public dans un espace de rencontre, de vente et de diffusion.",
      contest_sales_li1: "Vendredi et samedi de 10 h 00 à 19 h 00",
      contest_sales_li2: "Dimanche de 10 h 00 à 16 h 00",
      contest_sales_li3: "Espacio La Granja (Valladolid)",
      contest_sales_li4: "Rencontre avec le public",

      contest_meet_kicker: "Rencontre",
      contest_meet_img_alt: "Table de douceurs et vente au public",
      contest_meet_note: "Événement vivant : communauté et ouverture.",

      contest_trad_title: "Tradition, dialogue et innovation",
      contest_trad_subtitle: "Tables rondes et activités culturelles",
      contest_trad_p1:
        "En parallèle du concours, un programme de tables rondes et de rencontres de diffusion dédiées à la pâtisserie monastique et artisanale sera développé, abordant des thèmes tels que :",
      contest_trad_li1: "la transmission du savoir-faire traditionnel,",
      contest_trad_li2: "la valeur culturelle de la pâtisserie artisanale face à la production industrielle,",
      contest_trad_li3: "le rôle de la tradition dans la gastronomie contemporaine.",
      contest_trad_img_alt: "Livre ancien et tablette (dialogue entre tradition et innovation)",
      contest_trad_note: "Image de lecture/réflexion : contraste et pensée.",

      contest_innov_title: "Innovation",
      contest_innov_subtitle: "Un dessert expérimental créé avec l’intelligence artificielle",
      contest_innov_p1:
        "Comme expérience culturelle hors concours, un dessert expérimental sera préparé, dont la recette a été développée à l’aide de l’intelligence artificielle, en collaboration avec l’association Spain AI.",
      contest_innov_img_alt: "Image associée à l’innovation",
      contest_innov_p2:
        "Cette initiative est conçue comme un exercice de réflexion et de dialogue entre tradition et innovation, explorant les limites et les possibilités de la création gastronomique dans une perspective culturelle.",
      contest_badge_out: "Hors concours",

      contest_reg_title: "INSCRIPTION · Appel initial",
      contest_reg_status_label: "Statut :",
      contest_reg_status_value: "en préparation",
      contest_reg_p1:
        "L’appel initial est en préparation. Dans cette section seront publiés le règlement et la documentation officielle pour participer.",

      contest_docs_title: "Documentation officielle",
      contest_docs_bases_soon: "Règlement (PDF) · Bientôt",
      contest_docs_application: "Demande d’inscription",
      contest_docs_info_soon: "Info (PDF) · Bientôt",
      contest_docs_note:
        "Si un lien n’est pas encore publié, il apparaîtra marqué comme “Bientôt”.",

      contest_institutional_title: "Cadre institutionnel",
      contest_institutional_p1:
        "Le concours s’inscrit dans une logique de continuité et de collaboration. DULCESOR articule des relations avec des institutions culturelles et éducatives et avec les administrations publiques, ainsi qu’avec des entités partenaires, afin de renforcer sa dimension patrimoniale, culturelle et de diffusion.",

      contest_sponsors_title: "Partenaires du concours",
      contest_sponsors_note: ""
    },

    // =========================================================
    // ITALIANO
    // =========================================================
    it: {
      // ===== COMMON =====
      common_in_prep: "In preparazione",

      // ===== NAV (header) =====
      nav_home: "Home",
      nav_association: "Associazione",
      nav_projects: "Progetti",
      nav_contests: "Concorsi",
      nav_routes: "Percorsi monastici",
      nav_sponsors: "Sponsor",
      nav_contact: "Contatti",

      // ===== HOME (index) =====
      home_title: "ASSOCIAZIONE CULTURALE DULCESOR",
      home_subtitle: "Pasticceria monastica e conventuale · Patrimonio gastronomico · Cultura e tradizione",
      home_intro:
        'L’Associazione culturale <strong>DULCESOR</strong> promuove la conservazione, la diffusione e la valorizzazione della <strong>pasticceria monastica e conventuale</strong> e del patrimonio gastronomico legato alle comunità religiose, sviluppando progetti culturali di portata nazionale e internazionale.',
      home_project_title: "Progetto principale in sviluppo",
      home_project_desc: "I Concorso internazionale di dolci conventuali -DULCESOR- Valladolid 2026",
      home_project_status: "Informazioni in preparazione",
      home_identity_title: "Identità",
      home_identity_name_label: "Nome:",
      home_identity_name: "Associazione culturale DULCESOR",
      home_identity_nature_label: "Natura giuridica:",
      home_identity_nature: "Associazione culturale senza scopo di lucro",
      home_identity_scope_label: "Ambito:",
      home_identity_scope: "Culturale e gastronomico",
      home_goals_title: "Finalità e obiettivi",
      home_goal_1: "Preservare e promuovere la pasticceria conventuale come patrimonio culturale.",
      home_goal_2: "Dare visibilità al lavoro artigianale delle comunità religiose.",
      home_goal_3: "Promuovere progetti culturali e gastronomici di proiezione internazionale.",

      // ===== ASOCIACIÓN =====
      assoc_page_title: "Associazione · DULCESOR",
      assoc_meta_description:
        "Chi siamo e per cosa lavoriamo: preservare la pasticceria monastica-conventuale e promuovere progetti culturali e il Concorso internazionale di dolci conventuali.",

      assoc_title: "Associazione",
      assoc_subtitle:
        "Chi siamo e per cosa lavoriamo: preservare la pasticceria monastica-conventuale e promuovere progetti culturali e il Concorso internazionale di dolci conventuali.",
      assoc_identity_title: "Identità",
      assoc_identity_p1:
        "L’Associazione culturale DULCESOR è un ente senza scopo di lucro dedicato a preservare, ricercare e diffondere la pasticceria monastica-conventuale come patrimonio culturale.",
      assoc_identity_p2:
        "Lavoriamo per valorizzare un’eredità viva di ricette, tecniche e saperi trasmessi per secoli, con rispetto del patrimonio e vocazione collaborativa.",

      assoc_goals_title: "Finalità e obiettivi",
      assoc_goal_1:
        "Preservare e promuovere la tradizione dolciaria di monasteri e conventi come patrimonio culturale immateriale.",
      assoc_goal_2:
        "Promuovere attività culturali, gastronomiche e accademiche che ne rafforzino la conoscenza e la valorizzazione sociale.",
      assoc_goal_3:
        "Incoraggiare la ricerca, la raccolta e la documentazione di ricette, tecniche e processi tradizionali.",
      assoc_goal_4:
        "Stabilire legami di cooperazione con istituzioni culturali, educative e religiose.",
      assoc_goal_5: "Collaborare con amministrazioni pubbliche, istituzioni culturali ed entità private.",
      assoc_goal_6: "Promuovere pubblicazioni e materiali divulgativi che contribuiscano alla sua conservazione.",
      assoc_goal_7: "Organizzare e promuovere il Concorso internazionale di dolci conventuali.",

      assoc_goals_readmore_btn: "Leggi di più…",
      assoc_goals_readmore_more: "Leggi di più…",
      assoc_goals_readmore_less: "Leggi meno",

      assoc_lines_title: "LE NOSTRE LINEE DI LAVORO",
      assoc_lines_1_title: "Patrimonio e memoria",
      assoc_lines_1_text: "Ricerca e conservazione del patrimonio dolciario monastico-conventuale.",
      assoc_lines_2_title: "Artigianato",
      assoc_lines_2_text: "Valorizzazione del lavoro artigianale e dei processi tradizionali.",
      assoc_lines_3_title: "Incontro e cultura",
      assoc_lines_3_text:
        "Attività culturali e promozione del Concorso internazionale di dolci conventuali.",

      assoc_values_title: "Principi e valori",
      assoc_values_p1:
        "DULCESOR agisce con rigore storico, rispetto del patrimonio e impegno etico verso le comunità religiose produttrici.",
      assoc_values_p2:
        "Promuoviamo il riconoscimento della pasticceria monastica come espressione culturale e gastronomica e come testimonianza viva di tradizione, spiritualità e artigianato.",

      assoc_admin_title: "Informazioni amministrative",
      assoc_admin_scope_label: "Ambito di azione",
      assoc_admin_scope_value: "Culturale e gastronomico (ambito nazionale e internazionale)",
      assoc_admin_legal_label: "Natura giuridica",
      assoc_admin_legal_value: "Associazione culturale senza scopo di lucro",
      assoc_admin_address_label: "Sede",
      assoc_admin_address_value: "Convento di Santa Ana (Valladolid)",
      assoc_admin_duration_label: "Durata",
      assoc_admin_duration_value: "Indeterminata",
      assoc_admin_registry_label: "Stato di registrazione",
      assoc_admin_registry_value: "Ente in fase di registrazione ufficiale (NIF/CIF richiesto)",

      assoc_collab_title: "Come collaborare",
      assoc_collab_intro:
        "In quanto ente culturale, DULCESOR formalizza collaborazioni, sponsorizzazioni e sostegni tramite convenzioni, accordi o contratti, senza che tali relazioni conferiscano lo status di socio.",
      assoc_collab_forms_title: "Forme di collaborazione",
      assoc_collab_1:
        "<strong>Partnership istituzionale</strong> (comuni, università, musei, archivi, enti culturali).",
      assoc_collab_2:
        "<strong>Sponsorizzazione</strong> del concorso e/o di attività culturali e divulgative.",
      assoc_collab_3:
        "<strong>Sostegno in natura o servizi</strong> (spazi, logistica, comunicazione, stampa, materiali, ecc.).",
      assoc_collab_4:
        "<strong>Diffusione e rete culturale</strong> (media, prescrittori, enti partner).",
      assoc_collab_cta_1: "Proponi una collaborazione",
      assoc_collab_cta_2: "Contatto istituzionale",

      // ===== CONTACTO =====
      contact_page_title: "Contatti · DULCESOR",
      contact_meta_description: "Contatti dell’Associazione culturale DULCESOR.",
      contact_title: "Contatti",
      contact_subtitle: "Canali di comunicazione dell’Associazione culturale DULCESOR.",
      contact_block_title: "Informazioni di contatto",
      contact_email_label: "Informazioni generali",
      contact_contact_label: "Contatto istituzionale",
      contact_contest_label: "Concorsi",
      contact_address_label: "Sede",
      contact_address_value: "Plaza Santa Ana, 4 · 47001 Valladolid (Spagna)",
      contact_note: "Se desideri collaborare o ricevere maggiori informazioni, scrivici e ti risponderemo il prima possibile.",
      contact_collab_title: "Collabora con DULCESOR",
      contact_collab_text:
        "Se sei un’istituzione, un ente o un collettivo interessato a sostenere progetti culturali o attività, possiamo valutare modalità di collaborazione e partecipazione.",
      contact_collab_btn: "Vedi sponsor",
      contact_collab_note: "Puoi anche scriverci direttamente a contacto@dulcesor.org.",

      // ===== PATROCINADORES =====
      sponsors_page_title: "Sponsor · DULCESOR",
      sponsors_meta_description: "Sponsor e collaboratori dell’Associazione culturale DULCESOR.",
      sponsors_title: "Sponsor",
      sponsors_subtitle: "Entità partner dell’Associazione culturale DULCESOR.",
      sponsors_assoc_title: "Sponsor dell’associazione",
      sponsors_assoc_text: "Queste entità sostengono lo sviluppo generale dell’Associazione culturale DULCESOR.",
      sponsors_assoc_note: "Questo elenco si amplierà progressivamente con nuovi partner.",
      sponsors_collab_title: "Vuoi collaborare?",
      sponsors_collab_text:
        "Se la tua organizzazione desidera sostenere i progetti culturali di DULCESOR, scrivici e ti informeremo sulle modalità di collaborazione.",
      sponsors_collab_btn: "Vai ai contatti",
      sponsors_list_title: "Elenco",
      sponsors_nb21_text: "Sponsor dell’Associazione culturale DULCESOR.",
      sponsors_apolo_text: "Sponsor dell’Associazione culturale DULCESOR.",
      sponsors_spainai_text: "Partner tecnologico e culturale nella linea di innovazione.",
      sponsors_visit_web: "Visita il sito",
      sponsors_cta: "Proponi una sponsorizzazione",
      sponsors_institutional: "Istituzionali",
      sponsors_institutional_text:
        "Enti pubblici e istituzioni che sostengono il progetto culturale e il concorso.",
      sponsors_private: "Collaboratori",
      sponsors_private_text:
        "Aziende ed enti partner che rendono possibili attività, comunicazione e supporto.",

      // ===== PROYECTOS =====
      projects_page_title: "Progetti · DULCESOR",
      projects_meta_description:
        "Progetti culturali e gastronomici dell’Associazione culturale DULCESOR.",
      projects_title: "Progetti",
      projects_subtitle:
        "Iniziative culturali e gastronomiche dedicate alla preservazione e diffusione della pasticceria monastica e conventuale.",
      projects_intro_title: "Presentazione generale",
      projects_intro_text:
        "I progetti dell’Associazione culturale DULCESOR mirano a valorizzare il patrimonio dolciario di conventi e monasteri, rafforzare il legame tra gastronomia e cultura e aprire uno spazio di collaborazione tra artigiane, istituzioni e cittadinanza.",
      projects_lines_title: "Linee d’azione",
      projects_line_1: "Organizzazione di concorsi, mostre e giornate dedicate alla pasticceria conventuale.",
      projects_line_2:
        "Sviluppo di percorsi e incontri culturali per promuovere la visita a monasteri e musei legati alla tradizione dolciaria.",
      projects_line_3:
        "Pubblicazione di materiali divulgativi ed educativi su storia, tecniche ed eredità dolciaria.",
      projects_line_4: "Collaborazioni con istituzioni accademiche e culturali per ricerca e diffusione.",
      projects_featured_title: "Progetti in evidenza",
      projects_featured_project_title: "I Concorso internazionale di pasticceria monastica -DULCESOR- 2026",
      projects_featured_project_text:
        "Prima convocazione internazionale promossa da DULCESOR, dedicata al riconoscimento e alla diffusione della pasticceria tradizionale realizzata in monasteri e conventi, con la città di Valladolid come primo scenario.",
      projects_featured_more: "Scopri di più sui concorsi",
      projects_future_title: "Progetti futuri",
      projects_future_text:
        "L’Associazione culturale DULCESOR sta attualmente progettando nuove iniziative legate alla ricerca e alla divulgazione del patrimonio conventuale, oltre alla creazione di alleanze internazionali che rafforzino la diffusione culturale e gastronomica di questa eredità.",
      projects_future_note:
        "Se sei un’istituzione, un ente o un collettivo interessato a collaborare, puoi contattarci per esplorare forme di partecipazione.",

      // ===== RUTAS =====
      routes_page_title: "Percorsi · DULCESOR",
      routes_meta_description: "Percorsi monastici e musei conventuali: linea culturale di DULCESOR.",
      routes_title: "Percorsi monastici",
      routes_subtitle:
        "Linea culturale di DULCESOR dedicata alla diffusione del patrimonio monastico e della tradizione artigianale, con link istituzionali e risorse culturali.",
      routes_nav_routes: "Percorsi",
      routes_nav_museums: "Musei",
      routes_focus_title: "Approccio culturale",
      routes_focus_text:
        "Questo spazio è concepito come una linea di divulgazione culturale e patrimoniale. Non è un sito turistico generico: privilegiamo un tono istituzionale, sobrio e rispettoso, promuovendo la conoscenza e la valorizzazione del patrimonio monastico e della pasticceria artigianale.",
      routes_focus_note:
        "Le informazioni e gli elenchi verranno ampliati progressivamente con l’avanzare dell’attività dell’associazione.",
      routes_note_title: "Nota",
      routes_note_text:
        "DULCESOR rimanda a risorse istituzionali o ufficiali quando disponibili. Questo sito non vende prodotti: se una comunità dispone di un canale di vendita proprio, verrà collegato al suo canale ufficiale.",
      routes_note_pill: "Contenuto in crescita",

      museums_title: "Musei conventuali",
      museums_intro:
        "DULCESOR sostiene la conservazione e la diffusione del patrimonio culturale legato alla vita conventuale, promuovendo i musei conventuali come spazi vivi di memoria, arte e tradizione.",

      museum_santaana_title: "Museo del Real Monasterio di San Joaquín e Santa Ana (Valladolid)",
      museum_santaana_text:
        "Museo di arte sacra barocca nel monastero cistercense, con un insieme patrimoniale di grande rilevanza. Spazio legato all’identità culturale di DULCESOR.",
      museum_pill_priority: "Prioritario",
      museum_pill_convent: "Museo conventuale",
      museum_pill_city_valladolid: "Valladolid",
      museum_santaana_btn_web: "Sito ufficiale del museo",
      museum_santaana_btn_rv: "Esperienza virtuale (VR) · Prossimamente",
      museum_santaana_note:
        "È in sviluppo un’esperienza di realtà virtuale (VR) legata a opere del museo, che sarà presentata prossimamente.",

      museum_ursulas_title: "Las Úrsulas e Las Claras (Salamanca)",
      museum_ursulas_text_1:
        "I musei Las Úrsulas e Las Claras di Salamanca testimoniano, attraverso l’arte, la presenza della Comunità di Santa Clara nella provincia.",
      museum_ursulas_text_2:
        "Il Monastero dell’Annunciazione, conosciuto popolarmente come “las Úrsulas”, è uno dei complessi religiosi più interessanti della città di Salamanca ed è Monumento storico nazionale dal 1931.",
      museum_ursulas_text_3:
        "Il Museo di pittura medievale di Santa Clara mette in luce l’importanza artistica di questo spazio, dei suoi murales, del soffitto a cassettoni e della sua musealizzazione.",
      museum_pill_city_salamanca: "Salamanca",
      museum_pill_inprep: "In preparazione",

      museums_other_title: "Altri musei (in preparazione)",
      museums_other_1_title: "Monastero di Santa Clara (Tordesillas) · Complesso monumentale",
      museums_other_1_text:
        "Spazio monastico di grande valore storico e patrimoniale. Questo blocco è pronto per essere completato con informazioni istituzionali e link ufficiale.",
      museums_other_2_title: "Convento di San Francisco (Medina de Rioseco) · Patrimonio sacro",
      museums_other_2_text:
        "Spazio legato al patrimonio conventuale della provincia. Questo blocco è pronto per essere completato con informazioni istituzionali e link ufficiale.",
      museums_other_note:
        "Questa sezione crescerà includendo altri musei conventuali che condividono i valori culturali e patrimoniali di DULCESOR.",

      routes_morning_title: "Percorsi di una mattina",
      routes_morning_text:
        "Prepareremo brevi percorsi culturali (mattina o mezza giornata) per visitare tre o quattro monasteri, musei o siti patrimoniali, con la possibilità di rimandare all’acquisto di prodotti se la comunità dispone di canali ufficiali.",
      routes_morning_note:
        "Questi percorsi saranno pubblicati una volta verificati e con un approccio culturale e rispettoso verso le comunità.",

      routes_convents_title: "Conventi e monasteri",
      routes_convents_text:
        "Link diretti a siti ufficiali o canali istituzionali di conventi e monasteri. Quando esistono negozi online o sistemi di vendita propri, verranno collegati per facilitare l’accesso ai loro prodotti.",
      routes_convents_note:
        "DULCESOR non vende prodotti su questo sito. I link rimandano a piattaforme esterne gestite da ciascuna comunità o ente.",
      routes_example_1_title: "Convento / Monastero (Esempio 1)",
      routes_example_1_text:
        "Blocco pronto per includere nome, località, breve descrizione istituzionale e link ufficiale.",
      routes_example_2_title: "Convento / Monastero (Esempio 2)",
      routes_example_2_text:
        "Blocco pronto per includere nome, località, breve descrizione istituzionale e link ufficiale.",
      routes_example_btn_web: "Sito ufficiale · Prossimamente",
      routes_example_btn_shop: "Acquisto prodotti · Prossimamente",
      routes_convents_howto:
        "Per aggiungere un nuovo convento/monastero, duplica uno dei blocchi “Esempio” e modifica titolo, testo e link.",

      // ===== CONCURSOS (contest_*) =====
      contest_hero_title: "I Concorso internazionale<br>di pasticceria monastica DULCESOR",
      contest_title: "IConcorso internazionale di pasticceria monastica DULCESOR 2026",
      contest_place_date: "Valladolid · 1–4 ottobre",
      contest_btn_registration_top: "Domanda di iscrizione",
      contest_intro_p:
        "Un incontro culturale dedicato alla pasticceria monastica-conventuale come patrimonio vivo: tradizione, artigianato, trasmissione del sapere e dialogo con la gastronomia contemporanea.",

      contest_poster_kicker: "Locandina ufficiale del concorso",
      contest_poster_alt: "Locandina ufficiale del concorso",
      contest_poster_note:
        "La locandina appare come immagine ufficiale del I Concorso internazionale di pasticceria monastica DULCESOR 2026.",

      contest_presentation_title: "Presentazione",
      contest_presentation_p1:
        "Il concorso nasce con vocazione culturale e internazionale per riconoscere e valorizzare la pasticceria monastica come eredità storica ed espressione di artigianato. Riunisce comunità, istituzioni e cittadinanza attorno a un programma che combina preparazione, divulgazione e incontro.",
      contest_presentation_note:
        "(Le informazioni dettagliate su partecipazione, criteri e calendario saranno incluse nel regolamento ufficiale).",

      contest_section_title: "Il concorso",
      contest_section_subtitle: "Preparazione e valutazione",
      contest_section_li1: "Preparazione: giovedì 1 ottobre (Scuola Internazionale di Cucina).",
      contest_section_li2: "Cerimonia di premiazione (pomeriggio): Cappella del Convento di Santa Ana.",
      contest_section_li3: "Nota: dettagli completi nel regolamento.",

      contest_craft_kicker: "Artigianato / Fare",
      contest_craft_img_alt: "Mani che impastano",
      contest_craft_note: "Processo, mestiere, lavoro umano.",

      contest_sales_title: "Vendita e incontro con il pubblico",
      contest_sales_p1:
        "Da venerdì a domenica, il concorso si apre al pubblico in uno spazio di incontro, vendita e divulgazione.",
      contest_sales_li1: "Venerdì e sabato dalle 10:00 alle 19:00",
      contest_sales_li2: "Domenica dalle 10:00 alle 16:00",
      contest_sales_li3: "Espacio La Granja (Valladolid)",
      contest_sales_li4: "Incontro con la cittadinanza",

      contest_meet_kicker: "Incontro",
      contest_meet_img_alt: "Tavolo di dolci e vendita al pubblico",
      contest_meet_note: "Evento vivo, comunità e apertura.",

      contest_trad_title: "Tradizione, dialogo e innovazione",
      contest_trad_subtitle: "Tavole rotonde e attività culturali",
      contest_trad_p1:
        "Parallelamente al concorso, si svolgerà un programma di tavole rotonde e incontri divulgativi dedicati alla pasticceria monastica e artigianale, affrontando temi come:",
      contest_trad_li1: "la trasmissione del sapere tradizionale,",
      contest_trad_li2: "il valore culturale della pasticceria artigianale rispetto alla produzione industriale,",
      contest_trad_li3: "il ruolo della tradizione nella gastronomia contemporanea.",
      contest_trad_img_alt: "Libro antico e tablet (dialogo tra tradizione e innovazione)",
      contest_trad_note: "Immagine di lettura/riflessione: contrasto e pensiero.",

      contest_innov_title: "Innovazione",
      contest_innov_subtitle: "Un dessert sperimentale creato con intelligenza artificiale",
      contest_innov_p1:
        "Come esperienza culturale fuori concorso, verrà preparato un dessert sperimentale la cui ricetta è stata sviluppata tramite intelligenza artificiale, in collaborazione con l’associazione Spain AI.",
      contest_innov_img_alt: "Immagine associata all’innovazione",
      contest_innov_p2:
        "Questa iniziativa è concepita come un esercizio di riflessione e dialogo tra tradizione e innovazione, esplorando i limiti e le possibilità della creazione gastronomica da una prospettiva culturale.",
      contest_badge_out: "Fuori concorso",

      contest_reg_title: "ISCRIZIONE · Bando iniziale",
      contest_reg_status_label: "Stato:",
      contest_reg_status_value: "in preparazione",
      contest_reg_p1:
        "Il bando iniziale è in preparazione. In questa sezione saranno pubblicati il regolamento e la documentazione ufficiale per partecipare.",

      contest_docs_title: "Documentazione ufficiale",
      contest_docs_bases_soon: "Regolamento (PDF) · Prossimamente",
      contest_docs_application: "Domanda di iscrizione",
      contest_docs_info_soon: "Info (PDF) · Prossimamente",
      contest_docs_note:
        "Se un link non è ancora pubblicato, apparirà contrassegnato come “Prossimamente”.",

      contest_institutional_title: "Quadro istituzionale",
      contest_institutional_p1:
        "Il concorso si sviluppa con vocazione di continuità e collaborazione. DULCESOR articola relazioni con istituzioni culturali ed educative e con le amministrazioni pubbliche, nonché con enti partner, per rafforzare la sua dimensione patrimoniale, culturale e divulgativa.",

      contest_sponsors_title: "Sponsor del concorso",
      contest_sponsors_note: ""
    }
  };

  // ---------- Utilidades idioma ----------
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

  const setNodeTextOrHtml = (el, value) => {
    const v = value == null ? "" : String(value);
    if (v.includes("<")) el.innerHTML = v;
    else el.textContent = v;
  };

  const apply = (root = document) => {
    const lang = getLang();
    const dict = DICT[lang] || DICT.es || {};

    // 1) Texto principal
    root.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const val = dict[key];
      if (val == null) return;

      if (el.tagName === "TITLE") {
        document.title = String(val);
        return;
      }

      setNodeTextOrHtml(el, val);
    });

    // 2) Atributos
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

    // 3) Meta content (SEO)
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
    apply(document);
    document.dispatchEvent(new CustomEvent("dulcesor:langchange"));
  };

  const t = (key, fallback = "") => {
    const lang = getLang();
    const dict = DICT[lang] || DICT.es || {};
    return key && dict[key] != null ? String(dict[key]) : fallback;
  };

  // API pública
  const api = { DICT, t, apply, getLang, setLang };
  window.DULCESOR_I18N = api;

  // Puente compatible con header.js/footer.js
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

  // Por si el header llama algo tipo applyTranslations()
  window.applyTranslations =
    window.applyTranslations ||
    function () {
      if (window.DULCESOR_I18N && typeof window.DULCESOR_I18N.apply === "function") {
        window.DULCESOR_I18N.apply(document);
      }
    };
})();
